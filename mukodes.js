const inputElem = document.getElementById("kijelzo");
const szamElemek = document.getElementsByClassName("szamok");
const muveletElem = document.getElementsByClassName("muvelet");
const torlesElem = document.getElementById("torles");
const egyenlosegElem = document.getElementById("egyeno");

let elsoSzam = "";
let muvelet = "";
let masodikSzam = "";

szamElemek[0].addEventListener("click", szamKatt);
szamElemek[1].addEventListener("click", szamKatt);
szamElemek[2].addEventListener("click", szamKatt);
szamElemek[3].addEventListener("click", szamKatt);
szamElemek[4].addEventListener("click", szamKatt);
szamElemek[5].addEventListener("click", szamKatt);
szamElemek[6].addEventListener("click", szamKatt);
szamElemek[7].addEventListener("click", szamKatt);
szamElemek[8].addEventListener("click", szamKatt);
szamElemek[9].addEventListener("click", szamKatt);

console.log(inputElem)

function szamKatt(event) {
    console.log(event.target.id);
    inputElem.value += event.target.id;
    kifejezesElem.textContent += event.targetid;
}

