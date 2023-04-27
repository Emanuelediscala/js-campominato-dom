// DICHIARAZIONE VARIABILE
const griglia = document.getElementById("grid");
const PushdButton = document.getElementById("play");
let bombs = [];

let BlockValue;


// DICHIARAZIONE FUNZIONE TASTO BUTTON
PushdButton.addEventListener("click", function() {
    bombs = [] 
    griglia.innerHTML = ""
    griglia.classList.remove("d-none")
// DIFFICULT SELECTION
const Difficult = document.getElementById("Options").value;
console.log(Difficult);
if (Difficult == "Easy") {
    Generablocchi(49)
    for (let u= 1; u <= 16; u++) {
        bombs.push(getRndnumber(1,49));
    }   
    
}
else if (Difficult == "Medium") {
    Generablocchi(81) 
    for (let u= 1; u <= 16; u++) {
        bombs.push(getRndnumber(1,81));
    }
} 
else if  (Difficult == "HardMode") {
    Generablocchi(100)
    for (let u= 1; u <= 16; u++) {
        bombs.push(getRndnumber(1,100));
    }
} 
})        

// GENERA BLOCCHI DEFAULT
function Generablocchi(Selection) {
for (let i = 1; i <= Selection; i++) {
let Nuovoblocco = document.createElement("div");
Nuovoblocco.classList.add("square");
if (Selection == 49) {
    Nuovoblocco.style.width = "calc(100% / 7)"
}
else if (Selection == 81) {
    Nuovoblocco.style.width = "calc(100% / 9)"
}
else if (Selection == 100) {
    Nuovoblocco.style.width = "calc(100% / 10)"
}
griglia.appendChild(Nuovoblocco);
Nuovoblocco.innerHTML = [i];
BlockValue = Nuovoblocco.innerHTML;
Nuovoblocco.addEventListener("click", controlNumber);
}
}

// FUNZIONE PER DEFINIRE NUMERO RANDOM
function getRndnumber(min, max) {
    let existingNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    while (bombs.includes(existingNumber)) {
    existingNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return existingNumber;
}

// FUNZIONE PER CONTROLLO NUMERO RANDOM 

function controlNumber() {
    let explosion = false;
    for (let i = 0; i < bombs.length; i++) {
        if (bombs[i] == this.innerHTML) {
        this.style.backgroundColor = "red"
        explosion = true;
    }
    }
    if (explosion == false) {
        this.classList.toggle("clicked"); 
    }
}

