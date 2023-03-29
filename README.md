Griglia Campo Minato
===

## CONSEGNA

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### **Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

>**Consigli del giorno:**  

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:
```
- Di cosa ho bisogno per generare i numeri?
- Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
- Le validazioni e i controlli possiamo farli anche in un secondo momento.
```

---

## STEPS

1. Scrivo l'HTML come me lo immagino, con un bottone, un container e i quadrati al suo inteno;
2. Stilizzo il tutto con CSS per avere un immagine
azione migliore;
3. Inizio a dare i primi comandi a JS;
4. Mi prendo il bottone dall'HTML al JS;
5. Creo un ciclo per generare i cubi all'interno del container;
6. Al click del bottone si avvia il ciclo e si visualizzano;
---
7. Pensare a come aggiungere la funzionalità del click sulla cella che all'azione si colorerà di azzurro e contemporaneamente in *console* si visualizzerà il numero random corrispondente di quella cella;
8. Creare una funzione che mi genera un numero random **SENZA RIPETIZIONI**;
9. Aprire l'azione del click sulla cella e inserire la conseguenza: colorare la cella tramite l'agginta di una classe creata in CSS che modificherà il  background-color;
