# AIGor — un profilo Claude Code portabile

Un assistente Claude Code che ragiona e lavora con lo stesso **metodo** di un uso
maturo (conferme, disciplina di memoria), senza portarsi dietro il **contesto**
specifico di chi l'ha sviluppato (Emanuele Messina). "Profilo" non è per forza un
reparto aziendale: è chiunque debba ricevere metodo senza contesto — un collega,
un familiare, un collaboratore.

**v2.0 (settembre 2026)** — riscritto come **plugin Claude Code** rispetto alla
v1.0 (agosto 2026, zip per persona da `~/dev/profili-claude/`). Vedi "Perché
questa forma" più sotto per cosa cambia e perché.

## Per chi lo riceve

- **Da zero**: segui `MANUALE.md` in questo repo.
- **Ha già VS Code + estensione Claude Code**: due comandi e basta —
  ```
  claude plugin marketplace add emanuelemessina86-lab/aigor-kit
  claude plugin install aigor
  ```
  poi apri la chat di Claude Code nella propria cartella di lavoro: AIGor si
  presenta da solo e fa l'intervista di primo avvio.

## Cosa sa fare AIGor appena installato, e cosa va collegato

| Cosa | Serve autorizzare qualcosa? |
|---|---|
| File locali, script, ricerca web, pagine/mockup (Artifact) | No |
| Google Sheet/Doc/Drive | Sì — connettore Google (account personale, claude.ai/customize/connectors) |
| Gmail | Sì — connettore Gmail (stesso posto) |
| Slack / Asana di un workspace aziendale | Sì — connettore per quello spazio, di solito serve un admin |
| Video: riassunto da sottotitoli | In parte — spesso funziona senza collegare nulla |
| Video: riassunto da audio/fotogrammi, editing avanzato Sheet/Doc, integrazioni tipo Shopify/Klaviyo | No, non incluso in questo kit — richiede software extra, oggi si chiede caso per caso |

Dettaglio e passi esatti: skill `aigor-collega-strumenti` (interna, la spiega
AIGor stesso quando serve — non un documento a parte).

## Struttura

```
.claude-plugin/marketplace.json     <- il "negozio" da cui si installa il plugin
plugins/aigor/
  .claude-plugin/plugin.json
  hooks/
    hooks.json                      <- registra i due hook sotto
    session-start.js                <- SessionStart: inietta metodo/ + .aigor/config.md come contesto sempre attivo
    autonomia.js                    <- PreToolUse: forza conferma su scritture di sistema, invii non-bozza, comandi distruttivi
  metodo/
    dove-salvare-info.md
    sessioni.md
    attrito-ricorrente.md
    verifica-osservabile.md
    autonomia-conferme.md
    identita.md                     <- il nome AIGor, e quando usarlo
  skills/
    avvio/SKILL.md                  <- intervista di primo avvio, scrive .aigor/config.md nel progetto della persona
    collega-strumenti/SKILL.md      <- mappa capacità + come autorizzare i connettori
MANUALE.md                          <- documento ESTERNO, per chi parte da zero (prima ancora che Claude Code esista sul suo PC)
```

`.aigor/config.md` (nome, ruolo, strumenti da collegare, eventuali categorie
extra sempre-conferma) **non è nel plugin**: lo scrive l'intervista dentro il
progetto di chi riceve AIGor, così sopravvive agli aggiornamenti del plugin e
resta suo, non nostro.

## Perché questa forma (plugin, non più zip per persona)

Quattro cambi rispetto alla v1.0:

1. **Un solo pacchetto per chiunque**, non uno zip generato a mano per persona
   (`Crea-Profilo.ps1`). L'intervista distingue le persone, non il pacchetto.
2. **`${CLAUDE_PLUGIN_ROOT}`** (variabile che Claude Code risolve da sola)
   elimina la chirurgia manuale su `settings.json` che la v1.0 chiedeva di fare
   "a mano" durante l'intervista — l'hook è attivo dal momento dell'installazione.
3. **Niente più `.code-workspace` da unire**: si apre VS Code direttamente nella
   cartella di lavoro vera della persona (il plugin è a livello utente, non
   legato a una cartella profilo). Un intero passaggio dell'intervista v1.0 è
   sparito.
4. **La macchina non è più nel kit**: niente script `~/.gcp`-style qui dentro.
   Le capacità vere (Gmail, Drive, Slack, Asana) arrivano dai connettori nativi
   di Claude Code, che ogni persona autorizza da sola col proprio account — non
   più credenziali/OAuth da gestire per chi distribuisce il profilo.

Cosa NON è cambiato: il principio delle conferme, la disciplina di scrivere
memoria proattivamente, il nome AIGor — vedi `plugins/aigor/metodo/`.

## Cosa NON c'è (ancora)

- Non testato su un destinatario reale in questa forma (v1.0 era arrivata a
  preparare due consegne, mai verificate end-to-end).
- Le funzionalità "oltre le basi" (video da audio/fotogrammi, ecc.) restano un
  puntatore verso Emanuele, non pacchettizzate — scelta deliberata per non
  appesantire l'installazione base (vedi skill `aigor-collega-strumenti`).
- Repo pubblico deciso il 06/09/2026: contiene solo metodo generico, nessun dato
  personale — verificare comunque prima di ogni push che non sia scivolato
  dentro nulla di specifico.
