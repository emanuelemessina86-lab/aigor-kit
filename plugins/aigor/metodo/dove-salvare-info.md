# Dove va un'informazione nuova

Criterio di smistamento: prima di salvare qualcosa, decidere dove va **prima** di
scriverlo. Senza un criterio, l'indice della memoria si rigonfia e le stesse cose
finiscono duplicate in più posti.

## La tabella

| Se l'informazione… | va in… |
|---|---|
| riguarda un **cliente/progetto/entità specifica** | `context/<entità>.md` — la ripesca la skill dedicata a quell'entità |
| è un **fatto operativo che evolve** (procedura, stato di un progetto, dato che cambia nel tempo) | **nuova memoria** in `memory/` + riga d'indice in `MEMORY.md` |
| è **profilo stabile** o una **regola di comportamento sempre valida** | il file di istruzioni sempre caricato (es. `CLAUDE.md`) — **raro**: ogni byte lì è sempre in contesto |
| è una **procedura ripetibile che deve partire al momento giusto** (senza che qualcuno la chieda esplicitamente) | **skill** — si paga in `description` sempre caricata, vedi sotto |
| è una **capacità in più per una procedura che esiste già** | corpo della skill esistente — **gratis** |
| è uno **script** | cartella script del reparto, con un catalogo |
| serve **solo a questa conversazione**, o sta già in un file consultabile altrove | **da nessuna parte** |

**Prima di creare**: cercare se qualcosa copre già il tema e aggiornare quello. Meglio
un file aggiornato che due che si contraddicono.

## Prima di sovrascrivere: l'archivio

Se la cartella di memoria non è sotto controllo versione, ogni riscrittura è una
perdita definitiva — sparisce anche il *perché* di una decisione poi cambiata.

**Regola**: quando un'informazione già scritta viene sostituita o superata, il pezzo
vecchio si copia in `memory/_archivio/AAAA-MM-GG-<nome>.md` **prima** di riscrivere.
Ci va solo ciò che è stato *sostituito*, non ciò che è stato *corretto* (refusi, link,
riscritture più brevi che dicono la stessa cosa restano nel file).
Test: *"fra sei mesi, sapere che prima era così cambierebbe una decisione?"* — se no,
non archiviare.

## La fonte dentro la memoria

Ogni memoria dice **da dove viene** ciò che afferma: una conversazione e una data, un
file, la risposta di un'API, una pagina web. Basta una riga. Serve a due cose:

- rileggerla fra mesi sapendo se è ancora verificabile;
- capire se è **metodo** (una regola di lavoro, portabile) o **contesto** (un dato
  specifico di questo reparto/cliente, non portabile) senza dover analizzare il
  contenuto da capo.

Se una fonte nuova **smentisce** (non integra) quanto già scritto, non si sovrascrive:
si segnala la contraddizione e decide chi è responsabile di quel dominio.

## A che altezza va

> "Un'indicazione generale va più in cima, una specifica va più a fondo nelle
> gerarchie."

Il criterio è **l'ampiezza di ciò a cui si applica**, non l'argomento della sessione
in cui è emersa.

- Vale per **più contesti** → scheda trasversale propria, richiamata da quelle
  verticali con un rimando.
- Vale per **un solo contesto** → dentro la scheda di quel contesto, e basta.

Il test: *se questo fatto servisse lavorando su tutt'altro, lo troverei?* Se la
risposta dipende dall'aver aperto per caso la scheda giusta, è scritto troppo in
basso. Sintomo tipico: lo stesso fatto ripetuto in due o tre schede — segno che sta
cercando da solo la sua altezza.

## Come si scrive la riga d'indice

La riga nell'indice serve solo a decidere **se** una memoria è rilevante — il
contenuto sta nel file. Quindi:

- **breve** (indicativamente sotto i 150 caratteri), e **punta, non racconta**;
- la compressione dell'indice è manutenzione **ricorrente**, non una tantum — tende a
  rigonfiarsi da solo;
- prima di togliere una riga perché "la copre una skill", verificare che la skill
  **rimandi** alla memoria, non che ne abbia **ricopiato** il contenuto — altrimenti
  la memoria diventa un fantasma;
- nelle memorie che sono regole attive, tenere l'imperativo nella riga ("leggere
  prima di...", "usare per ogni..."): è ciò che le fa scattare.

## Skill o memoria?

La differenza non è l'importanza né la dimensione, ma **chi decide quando
l'informazione entra in gioco**:

- **memoria** = un *fatto*, recuperato passivamente se l'indice fa match. Costo:
  minimo (una riga, zero se una skill la copre già).
- **skill** = una *procedura* + un **trigger attivo**. Costo: la sua `description` è
  sempre in contesto, a prescindere dal fatto che serva in quella sessione.

**La domanda che decide**: *se non parte da sola, ce ne si accorge?*
- "Sì, e costa" (va ricordato di chiederlo, o esce un output sbagliato) → **skill**.
- "No, tanto lo si chiede quando serve" → **memoria**, e basta.

Segnale che serve una skill: una memoria il cui trigger è stato rinforzato a mano
(MAIUSCOLE, "SEMPRE", "non opzionale"). Se il trigger va urlato, non è un fatto: è una
procedura senza innesco.

**Corollario**: solo la `description` di una skill è sempre in contesto — il corpo si
carica quando la skill parte. Quindi aggiungere capacità al **corpo** di una skill
esistente costa zero; toccare la `description` si paga (e va ritestato l'
auto-trigger); crearne una nuova costa sempre più di quanto tolga dall'indice — non si
autofinanzia, si compra prontezza pagando peso.

## Il principio che regge tutto

**È raggiungibile solo ciò che è nominato in un testo sempre caricato**: l'indice
della memoria oppure la `description` di una skill. Se un'informazione viene spostata
fuori dall'indice, deve esserci una skill la cui `description` contenga le parole con
cui verrà cercata. Altrimenti è stata solo nascosta.
