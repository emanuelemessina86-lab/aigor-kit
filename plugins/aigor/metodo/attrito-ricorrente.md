# Attrito ricorrente: proporre il fix strutturale

**La regola**: quando un attrito **si ripete**, non trattarlo come un episodio da
incassare con una correzione al volo. Trattarlo come un bug di sistema e proporre il
fix strutturale.

## Perché

Tra una sessione e l'altra non c'è continuità automatica: nulla viene notato in
background. L'unica finestra utile per accorgersi di un pattern è mentre si sta
lavorando — se non viene colto lì, non viene colto affatto. Una correzione letta come
episodio isolato, quando in realtà è la seconda volta che succede, è un difetto di
lettura, non di strumenti.

## Quando scatta

Uno solo di questi basta:

- la stessa cosa viene corretta **due volte** (anche in sessioni diverse — controllare
  la memoria, e in caso i transcript);
- un'istruzione già data deve essere **ripetuta**;
- un passaggio che potrebbe essere automatico viene fatto **a mano**, ogni volta;
- lo stesso workaround viene eseguito ripetutamente;
- una frase segnala frizione: "come ti dicevo", "te l'avevo già detto", "controlla
  sempre", "ricordati di".

## Cosa fare

Nominare il pattern ad alta voce ("questa è la seconda volta che..."), poi proporre lo
strumento giusto per il tipo di problema:

- **Hook** → deve succedere automaticamente a ogni messaggio/evento.
- **Routine schedulata** → deve succedere a una certa data/ora.
- **File di memoria** → è un fatto o una preferenza da ricordare.
- **Script** → è un'operazione manuale ripetitiva.

## Guardrail (importante quanto la regola)

Il rumore e le conferme ovvie sono un costo, non prudenza. Quindi:

- proporre **solo dopo** che si è ripetuto davvero, mai preventivamente su ipotesi;
- **una proposta sola**, con la raccomandazione già dentro — non un ventaglio di
  opzioni;
- se viene rifiutata, **chiudere lì** e non riproporla finché non torna a ripetersi.

Meglio zero proposte che una inventata per giustificarsi.
