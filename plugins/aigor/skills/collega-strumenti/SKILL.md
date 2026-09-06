---
name: aigor-collega-strumenti
description: Mappa di cosa AIGor sa già fare senza permessi e cosa richiede di collegare un account/strumento (Gmail, Google Drive/Sheets/Docs, Slack, Asana), con i passi per farlo. Usare quando la persona chiede "posso leggere un Google Sheet?", "come collego Gmail?", "perché non riesci a mandare l'email/leggere Slack?", o durante l'intervista di primo avvio se ha indicato strumenti da collegare.
user-invocable: true
---

# Cosa puoi già fare, e cosa devi collegare prima

AIGor gira dentro Claude Code. Alcune cose funzionano dal primo secondo, altre
richiedono che tu autorizzi un accesso — è una scelta di sicurezza voluta: nessuno
strumento esterno si attiva da solo senza il tuo consenso esplicito.

## Mappa delle capacità

| Cosa | Serve autorizzare qualcosa? |
|---|---|
| Leggere/scrivere file sul tuo computer, generare testo/script, cercare sul web | **No** — funziona subito |
| Creare pagine, mockup, piccoli strumenti interattivi (li chiamo "Artifact") | **No** — funziona subito, nessun account Google richiesto |
| Leggere/scrivere un Google Sheet, Doc, o un file su Google Drive | **Sì** — connettore Google (vedi sotto) |
| Leggere/scrivere Gmail (bozze, invii, ricerca email) | **Sì** — connettore Gmail (vedi sotto) |
| Leggere/scrivere su Slack di un'azienda | **Sì** — connettore per quel workspace, spesso serve un amministratore |
| Leggere/scrivere task su Asana di un'agenzia | **Sì** — connettore per quello spazio, spesso serve un amministratore |
| Guardare un video e riassumerlo | **Parziale** — se ha sottotitoli/trascrizione pubblica spesso basta chiedere, senza collegare nulla; per analizzare audio o fotogrammi reali serve uno strumento in più, non incluso in questo kit di base |

**Nessuno di questi collegamenti è già attivo per te.** Vanno autorizzati una volta,
con il tuo account — non con quello di chi ti ha dato AIGor.

## Come collegare Gmail / Google Drive (account personale)

1. Vai su `claude.ai/customize/connectors`, con lo **stesso account** con cui hai
   fatto login in Claude Code.
2. Autorizza lì "Gmail" e/o "Google Drive" (Drive copre anche Sheets e Docs).
3. Torna in Claude Code: chiedimi "controlla se Gmail/Drive sono collegati" (uso
   il comando `/mcp` per verificarlo) — se compaiono, sei pronto.

⚠️ Non è verificato se questo richiede un piano Claude a pagamento specifico: se
l'opzione "Connettori" non compare sul tuo account, controlla le impostazioni del
tuo piano su claude.ai o chiedi a chi ti ha dato AIGor.

## Come collegare Slack o Asana di uno spazio di lavoro condiviso

Diverso da Gmail/Drive: qui non basta il tuo account personale, perché lo spazio
(il workspace Slack, l'organizzazione Asana) appartiene a un'azienda/agenzia.

1. Chiedi all'**amministratore di quello spazio** l'indirizzo (URL) e le
   credenziali del server MCP di quel workspace — è una cosa che decide chi
   gestisce lo spazio, non qualcosa che attivi da solo.
2. Con quei dati, da terminale: `claude mcp add --transport http <nome> <url>`
   (i dettagli esatti del comando te li conferma l'amministratore insieme
   all'URL, perché variano da spazio a spazio).
3. Poi, in Claude Code: `/mcp` per verificare che il collegamento compaia.

## Oltre le basi

Chi ti ha dato AIGor usa anche alcuni strumenti in più, non inclusi qui perché
richiedono software aggiuntivo sul computer (Python, altre librerie) e non sono
ancora pacchettizzati per essere distribuiti a chiunque: riassumere un video
partendo da audio/fotogrammi reali (non solo dai sottotitoli), modifiche più fini
a Sheet/Doc che i connettori nativi non coprono, e alcune integrazioni specifiche
(es. Shopify, Klaviyo).

Se una di queste ti servirebbe davvero, **chiedila direttamente a chi ti ha dato
AIGor** invece di darla per impossibile: si valuta caso per caso se e come
condividerla.

## Se qualcosa non funziona

Prova a chiedermi direttamente "controlla i collegamenti attivi" prima di pensare
che sia un problema tuo — spesso è solo un passo di autorizzazione mancante, non
un errore.
