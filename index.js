import { GYUMOLCSOK } from "./adatok.js";

letrehozTablazat()

const vasarolt = [];

// 1. feladat
function letrehozTablazat() {
    const tablaELEM = document.getElementById("feladat_1");
    let tablazat = "<table>";
    for (let i = 0; i < GYUMOLCSOK.length; i++) {
        let sorok = "<tr>";
        for (const key in GYUMOLCSOK[i]) {
            sorok += `<td>${GYUMOLCSOK[i][key]}</td>`
        }
        sorok += "</tr>";
        tablazat += sorok;
    }
    tablazat += "</table>";
    tablaELEM.innerHTML = tablazat;

}

// 2. feladat
function osszesit() {
    const osszesitoELEM = document.getElementById("feladat_2");
    let suly = 0;
    for (const key in GYUMOLCSOK[i]) {
        suly += GYUMOLCSOK[i][key].tomeg
    }
    osszesitoELEM.innerHTML = `<p>A gyümölcsök súlya összesen: ${suly}</p>`


}

// 3. feladat
function vasarol(zoldseg) {

}

// 4. feladat
function torolEsemeny() {

}