#!/usr/bin/env node
/*
  autonomia.js — PreToolUse.

  Rende TECNICO (non solo scritto in un'istruzione che il modello deve
  ricordarsi di seguire) un sottoinsieme delle categorie sempre-conferma di
  metodo/autonomia-conferme.md — quelle riconoscibili da nome-tool/percorso
  senza sapere quali strumenti specifici usa questa persona:

   1. Scritture (Write/Edit) su file che DIVENTANO comportamento futuro del
      sistema: la configurazione di questo profilo (.aigor/), CLAUDE.md,
      settings.json, questo stesso hook.
   2. Tool il cui nome sembra un invio/pubblicazione finale (contiene
      send/publish/invia/pubblica) e NON contiene draft/bozza — le bozze
      restano libere per costruzione, coerente con "lo strumento produce solo
      una bozza -> stato finale già sicuro" dello stesso file.
   3. Comandi Bash chiaramente distruttivi (push --force, rm -rf, reset --hard).

  In tutti e tre i casi la decisione è "ask": forza SEMPRE il prompt di
  conferma, anche se il tool è in allowlist. Non è mai "deny" secco - la
  decisione resta a chi usa il profilo, qui si toglie solo la possibilità che
  passi inosservata.

  Tutto il resto: NON STAMPARE NULLA ed uscire con codice 0 - è così che si
  dice "non interferire, decida il normale sistema di permessi" (verificato
  contro la guida integrata dell'estensione: hookSpecificOutput.permissionDecision
  accetta SOLO "allow"/"deny"/"ask" - "defer" non è un valore valido. Un bug
  trovato sul campo il 06/09/2026: con "defer" il tool restava bloccato per
  sempre nell'estensione VS Code, anche se un test da riga di comando via
  execSync non lo faceva emergere perché non passa dal parsing vero della
  decisione). Qualsiasi errore imprevisto: stessa cosa, non stampare nulla - un
  bug qui non deve MAI bloccare il lavoro normale.
*/

function rispondi(decisione, motivo) {
  const out = { hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: decisione } };
  if (motivo) out.hookSpecificOutput.permissionDecisionReason = motivo;
  process.stdout.write(JSON.stringify(out));
  process.exit(0);
}

function nonInterferire() {
  process.exit(0);
}

function leggiStdin() {
  const fs = require('fs');
  return fs.readFileSync(0, 'utf8');
}

function main() {
  const input = JSON.parse(leggiStdin());
  const toolName = input.tool_name || '';
  const toolInput = input.tool_input || {};

  if (toolName === 'Write' || toolName === 'Edit') {
    const percorso = (toolInput.file_path || '').replace(/\\/g, '/');
    const SENSIBILI = [
      /\/\.aigor\//i,
      /(^|\/)CLAUDE\.md$/i,
      /(^|\/)settings\.json$/i,
      /(^|\/)hooks\.json$/i,
      /autonomia\.js$/i,
      /session-start\.js$/i,
    ];
    if (SENSIBILI.some((rx) => rx.test(percorso))) {
      return rispondi('ask', `"${percorso}" diventa comportamento futuro del sistema: conferma sempre richiesta (metodo/autonomia-conferme.md).`);
    }
  }

  const nomeSembraInvio = /send|publish|invia|pubblica/i.test(toolName);
  const nomeSembraBozza = /draft|bozza/i.test(toolName);
  if (nomeSembraInvio && !nomeSembraBozza) {
    return rispondi('ask', `Il tool "${toolName}" sembra un invio/pubblicazione finale, non una bozza: conferma sempre richiesta.`);
  }

  if (toolName === 'Bash') {
    const cmd = toolInput.command || '';
    const DISTRUTTIVI = [
      /rm\s+-rf/i,
      /git\s+push\b.*--force/i,
      /git\s+reset\s+--hard/i,
    ];
    if (DISTRUTTIVI.some((rx) => rx.test(cmd))) {
      return rispondi('ask', 'Comando potenzialmente distruttivo: conferma sempre richiesta.');
    }
  }

  nonInterferire();
}

try {
  main();
} catch (e) {
  // Qualunque errore imprevisto (JSON malformato, campo mancante...):
  // non bloccare mai il lavoro normale.
  nonInterferire();
}
