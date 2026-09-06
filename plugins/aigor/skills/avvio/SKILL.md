---
name: aigor-avvio
description: Intervista di primo avvio di AIGor — quando manca o è incompleto .aigor/config.md nella cartella di lavoro corrente (segnalato dall'hook SessionStart), o quando la persona chiede esplicitamente di rifare/aggiornare la configurazione ("ricomincia l'intervista", "cambia la mia configurazione AIGor"). Fa domande una alla volta, in linguaggio semplice, e scrive .aigor/config.md.
user-invocable: true
---

# Intervista di primo avvio: invece di un file da compilare a mano

Se `.aigor/config.md` nella cartella di lavoro corrente non esiste o è ancora un
template (contiene `[DA COMPILARE]`), prima di procedere con richieste di lavoro
normali va completata questa intervista.

## Perché

Chi riceve AIGor non deve saper scrivere Markdown né capire come funziona un
profilo. Deve solo rispondere a domande, nella sua lingua, come farebbe con una
persona nuova che gli chiede come lavora.

## Come si fa

1. **Presentarsi come AIGor** (vedi `metodo/identita.md`) e spiegare in una riga
   cosa sta succedendo: "prima di iniziare, ti faccio qualche domanda per capire
   come lavori — la prossima volta non serve più, e puoi sempre chiedermi di
   rifarla se qualcosa cambia".
2. **Confermare la cartella di lavoro**: chiedere se questa è la cartella (o il
   Drive/OneDrive locale) dove tiene davvero i suoi file di lavoro — non una
   cartella vuota di prova. Se non lo è, invitarla ad aprire in VS Code quella
   giusta e ricominciare da lì: `.aigor/config.md` vive dentro il progetto, non
   in un posto a parte.
3. **Fare le domande una alla volta**, non un modulo tutto insieme:
   - nome e ruolo (cosa fa, per chi);
   - le cartelle/i file che usa davvero per lavorare;
   - **quali strumenti userà con AIGor**: email (Gmail?), fogli/documenti Google
     (Drive/Sheets/Docs/Slides?), Slack, Asana, altro — non serve che siano già
     collegati, basta sapere cosa serve. Annotare la lista: la skill
     `aigor-collega-strumenti` la userà per la guida passo-passo.
   - **quali sue azioni toccano soldi, invii esterni o dati sensibili** — serve a
     capire se questa persona ha bisogno di soglie di conferma più strette del
     principio generale (es. chi emette fatture o autorizza pagamenti). Se sì,
     annotarlo esplicitamente in config.md come categoria extra da trattare
     sempre con conferma.
4. Prima di scrivere qualunque file, **mostrare un riepilogo** di cosa si sta per
   salvare e chiedere conferma — scrivere un file che diventa comportamento
   futuro del sistema è una delle categorie sempre-conferma del principio
   generale (`metodo/autonomia-conferme.md`), vale anche qui.
5. **Scrivere il risultato** in `.aigor/config.md` (creare la cartella `.aigor/`
   se non esiste), sostituendo il template. Struttura minima:
   ```markdown
   # Configurazione AIGor

   - Nome:
   - Ruolo:
   - Cartelle/strumenti di lavoro reali:
   - Strumenti da collegare: (es. Gmail, Google Drive/Sheets, Slack, Asana)
   - Categorie extra sempre-conferma: (se nessuna, scrivere "nessuna oltre al principio generale")
   ```
6. **Se ha indicato strumenti da collegare**, proporre subito di passare alla
   skill `aigor-collega-strumenti` per la guida — non obbligare, è una persona
   che magari vuole prima solo provare a chiacchierare.
7. Da quel momento in poi il profilo è configurato: le sessioni successive non
   ripetono l'intervista (lo verifica da solo l'hook `SessionStart` a ogni
   apertura).

## Cosa NON fare

- Non chiedere tutto in un messaggio solo: un modulo lungo scoraggia chi non è
  pratico di computer più di quanto aiuti.
- Non inventare risposte plausibili per "andare veloci": una configurazione
  scritta male è peggio di un'intervista che dura qualche scambio in più.
- Non ripetere l'intervista se il profilo è già configurato — controllare prima
  se `.aigor/config.md` ha già contenuto reale.
- Non toccare nessun altro file del progetto della persona durante l'intervista:
  l'unico output è `.aigor/config.md`.
