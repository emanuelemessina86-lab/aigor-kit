# AIGor — come installarlo (da zero)

Questa guida è per chi **non ha ancora niente installato**. Se hai già VS Code e
l'estensione Claude Code, salta direttamente al **Passo 5**.

Tempo previsto: 15-20 minuti, la maggior parte è download.

## Passo 1 — Node.js

Serve per far girare Claude Code.

- **Windows**: apri il "Prompt dei comandi" (cerca "cmd" nel menu Start) e scrivi:
  ```
  winget install OpenJS.NodeJS.LTS
  ```
- **Mac**: scarica l'installer `.pkg` da [nodejs.org](https://nodejs.org) (versione
  LTS) e seguilo come un'installazione normale.

## Passo 2 — Visual Studio Code

Scarica da [code.visualstudio.com](https://code.visualstudio.com):
- **Windows**: esegui l'installer scaricato, avanti-avanti-fine.
- **Mac**: apri lo `.zip` scaricato e trascina "Visual Studio Code" nella cartella
  Applicazioni. Al primo avvio potrebbe avvisarti "sviluppatore non identificato":
  tasto destro sull'icona → Apri, per confermare che ti fidi.

## Passo 3 — Estensione Claude Code

Dentro VS Code: icona dei quadratini a sinistra (Estensioni) → cerca **"Claude
Code"** → Installa. Uguale su Windows e Mac.

## Passo 4 — Login

Appena installata, l'estensione ti chiede di accedere: usa il tuo account
Anthropic/Claude (o creane uno se non ce l'hai). Segui le indicazioni a schermo.

## Passo 5 — Apri la TUA cartella di lavoro

Questo è il passo che conta: in VS Code, **File → Apri cartella...** e scegli la
cartella (o il Drive/OneDrive) dove tieni davvero i tuoi file di lavoro — non una
cartella vuota di prova. AIGor lavorerà da lì.

## Passo 6 — Installa AIGor

Apri il terminale integrato di VS Code (menu **Terminale → Nuovo terminale**) e
scrivi questi due comandi, uno alla volta:

```
claude plugin marketplace add emanuelemessina86-lab/aigor-kit
claude plugin install aigor
```

## Passo 7 — Apri la chat di Claude Code e basta

Apri il pannello di Claude Code (icona nella barra laterale) e scrivi qualcosa
come "ciao" o "ho bisogno di aiuto con...". **AIGor si presenta da solo e ti fa
qualche domanda** per capire come lavori — non devi preparare niente prima.

---

Se qualcosa in questi passi non torna (un comando che dà errore, un'icona che non
trovi), è comunque una buona prima domanda da fare ad AIGor stesso appena parte:
spesso riesce a guidarti anche nei problemi di installazione residui.
