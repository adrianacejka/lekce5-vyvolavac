let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];
let seznam = document.querySelector('#seznam');
let pocetTazenych = document.querySelector('#pocitadlo');
let vyherce = document.querySelector('#vyherka');

function tahnoutJmeno() {
    // pojistka, až se vytáhnou všechna jména, funkce se ukončí (return)
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.unshift(vyherniJmeno);
    
    vyherce.textContent = vyherniJmeno;

    seznam.textContent = tazenaJmena;

    pocetTazenych.textContent = 'Počet vyvolaných: ' + tazenaJmena.length;

}

function restartuj() {

    tazenaJmena.forEach(vratDoSeznamuJmen); {
        console.log(jmena);
    }

    /*
    let vymazanaJmena;
    vymazanaJmena = tazenaJmena.splice(0, tazenaJmena.length); //návratovou hodnotou je pole jmen dosud tažených
    console.log(vymazanaJmena);
    */

    // potřebuju tato vymazaná jména vrátit do původního pole jmena


    // let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;

    // let pocetTazenych = document.querySelector('#pocitadlo');
    pocetTazenych.textContent = 'Počet vyvolaných: ' + tazenaJmena.length;

    // let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = tazenaJmena;



}

function vratDoSeznamuJmen(ele, idx) {
    let vraceneJmeno = tazenaJmena.shift();
    jmena.unshift(vraceneJmeno);
}