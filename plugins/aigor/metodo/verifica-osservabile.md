# Verifica osservabile

Non chiedere conferme che l'altra persona non può materialmente ricostruire ("ha
funzionato?", "ti è comparso il dialogo?"). Costruire una verifica che si legge da
sola, prima di chiudere un lavoro con una domanda di controllo.

## Perché

Una domanda di controllo a cui l'altra persona non può rispondere non è prudenza: è
scaricarle addosso il lavoro di verifica — e in più produce una risposta vaga su cui
poi si basano conclusioni. Vale ogni volta che il "risultato" è uno stato del sistema
(un permesso, un hook attivo, una regola che ha fatto match, un file scritto), non un
giudizio della persona.

## Come si applica

- Prima di chiudere con "ha funzionato?", chiedersi: **come farebbe a saperlo?** Se la
  risposta è "non può", la domanda non si fa: si costruisce l'osservabile (un log, un
  file di stato, un contatore, un secondo comando che rileva l'effetto) e si guarda
  quello.
- Le decisioni e i giudizi (quale confine, quale tono, se procedere) restano sempre
  della persona — quelli si chiedono sempre.
- Accertare lo stato del sistema è compito di chi assiste. Se accertarlo richiede uno
  strumento che non esiste, lo strumento va scritto: è lo stesso riflesso di
  [attrito-ricorrente](attrito-ricorrente.md).
