#!/usr/bin/env node
/*
  session-start.js — SessionStart.

  Rende il "metodo" (metodo/*.md) sempre attivo senza toccare il CLAUDE.md di
  chi riceve il profilo: lo inietta come additionalContext a ogni apertura di
  sessione, letto da qui (single source of truth = i file in metodo/).

  Due casi:
  1. Non esiste ancora `.aigor/config.md` nella cartella di lavoro corrente
     (o esiste ma è ancora il template, marcato [DA COMPILARE]): iniettato
     solo un promemoria che dice di avviare la skill "aigor:avvio" prima di
     procedere con richieste di lavoro normali — l'intervista stessa scrive
     poi config.md.
  2. `.aigor/config.md` esiste ed è compilato: iniettati i file di metodo/ +
     il contenuto di config.md, come contesto sempre presente.

  Qualsiasi errore imprevisto: non iniettare nulla ed uscire con successo —
  un bug qui non deve mai impedire l'apertura della sessione.
*/

const fs = require('fs');
const path = require('path');

function leggiStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function esci(additionalContext) {
  if (additionalContext) {
    const out = {
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext,
      },
    };
    process.stdout.write(JSON.stringify(out));
  }
  process.exit(0);
}

function main() {
  let cwd = process.cwd();
  try {
    const input = JSON.parse(leggiStdin() || '{}');
    if (input.cwd) cwd = input.cwd;
  } catch {
    // input assente o non JSON: usare process.cwd()
  }

  const configPath = path.join(cwd, '.aigor', 'config.md');
  let configContent = null;
  try {
    configContent = fs.readFileSync(configPath, 'utf8');
  } catch {
    configContent = null;
  }

  const nonConfigurato = !configContent || configContent.includes('[DA COMPILARE]');

  if (nonConfigurato) {
    return esci(
      'AIGor: nessuna configurazione trovata in questo progetto (.aigor/config.md mancante o incompleto). ' +
      'Prima di procedere con richieste di lavoro normali, invoca la skill "aigor:avvio" e segui l\'intervista ' +
      'descritta li (una domanda alla volta) per scrivere .aigor/config.md in questa cartella di lavoro.'
    );
  }

  const metodoDir = path.join(__dirname, '..', 'metodo');
  let file_list = [];
  try {
    file_list = fs.readdirSync(metodoDir).filter((f) => f.endsWith('.md')).sort();
  } catch {
    file_list = [];
  }

  const blocchi = [];
  for (const f of file_list) {
    try {
      blocchi.push(fs.readFileSync(path.join(metodoDir, f), 'utf8'));
    } catch {
      // file singolo illeggibile: saltarlo, non bloccare tutto
    }
  }

  const testo =
    '# AIGor — metodo di lavoro (sempre attivo, iniettato dal plugin)\n\n' +
    blocchi.join('\n\n---\n\n') +
    '\n\n---\n\n# Configurazione di questa persona/progetto (.aigor/config.md)\n\n' +
    configContent;

  return esci(testo);
}

try {
  main();
} catch {
  esci(null);
}
