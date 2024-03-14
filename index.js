import { GYUMOLCSOK } from "./adatok.js";

letrehozTablazat();

/* sulyOsszesit();
arOsszesit(); */

const arosszELEM = document.getElementById("feladat_2");
arosszELEM.innerHTML += `<p>A gyümölcsök ára összesen: ${osszesit("ar")}</p>`;
arosszELEM.innerHTML += `<p>A gyümölcsök súlya összesen: ${osszesit(
  "tomeg"
)}</p>`;


// 1. feladat
function letrehozTablazat() {
  const tablaELEM = document.getElementById("feladat_1");
  let tablazat = "<table>";
  for (let i = 0; i < GYUMOLCSOK.length; i++) {
    let sorok = "<tr>";
    for (const key in GYUMOLCSOK[i]) {
      sorok += `<td>${GYUMOLCSOK[i][key]}</td>`;
    }
    sorok += "</tr>";
    tablazat += sorok;
  }
  tablazat += "</table>";
  tablaELEM.innerHTML = tablazat;
}
// 2. feladat
/* function sulyOsszesit() {
  const osszesitoELEM = document.getElementById("feladat_2");
  let suly = 0;
  for (let i = 0; i < GYUMOLCSOK.length; i++) {
    suly += GYUMOLCSOK[i].tomeg;
  }
  osszesitoELEM.innerHTML = `<p>A gyümölcsök súlya összesen: ${suly}</p>`;
}
function arOsszesit() {
  const arosszELEM = document.getElementById("feladat_2");
  let ar = 0;
  for (let i = 0; i < GYUMOLCSOK.length; i++) {
    ar += GYUMOLCSOK[i].ar;
  }
  arosszELEM.innerHTML += `<p>A gyümölcsök ára összesen: ${ar}</p>`;
} */
function osszesit(kulcs) {
  let ossz = 0;
  for (let i = 0; i < GYUMOLCSOK.length; i++) {
    ossz += GYUMOLCSOK[i][kulcs];
  }
  return ossz;
}

// 3. feladat
const vasarolt = [];

function vasarol() { 
// <!-- Ha a feladat_1-ben lévő táblázat egyik elemére kattintunk -->
    const termekELEMEK = document.querySelectorAll("#feladat_1 tr");
    for (let index = 0; index < termekELEMEK.length; index++) {
        termekELEMEK[index].addEventListener("click", function(){
            // console.log(GYUMOLCSOK[index].nev)
            // <!-- Az aktuális elem neve jelenjen meg a  feladat_3 elemben -->
            const megvettELEMEK = document.querySelector("#feladat_3")
            // megvettELEMEK.innerHTML+=`${GYUMOLCSOK[index].nev}, `
            // <!-- Egy elemet csak egyszer tudjunk beletenni a megvásárolt listába -->
            if(vasarolt.indexOf(GYUMOLCSOK[index].nev)===-1){
                vasarolt.push(GYUMOLCSOK[index].nev)
                console.log(vasarolt)
            }
            megvettELEMEK.innerHTML=vasarolt.join(", ")
        })
    }
}
vasarol()


//  <!-- A megvásárolt termékeket a vasarolt []-ben tárold el és ez alapján jelenítsd meg az elemek nevét -->
 //   <!-- Valamint a torles elemre helyezzük rá a hide osztályt --> 




// 4. feladat
function torolEsemeny() {
//  <!-- Hozz létre egy gombot, ami minden elemet töröl a vasarolt []-ből és kiűriti az elemeket a feladat_3 elemből -->
//  <!-- Valamint a torles elemről letörli a hide osztályt -->
    const GOMB = document.getElementById("feladat_4")
    GOMB.innerHTML="<button>Törlés</button>"
    GOMB.addEventListener("click", function(){
        const megvettELEMEK = document.querySelector("#feladat_3")
        megvettELEMEK.innerHTML=""
        vasarolt.splice(0) // kezdo es vegindex kozotti elemeket kiszedi a listabol
        const torlesELEM = document.querySelector("#torles")
 
    })
}
torolEsemeny()