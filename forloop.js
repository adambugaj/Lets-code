
const vacationPlaces = ['Praha','Vien','Munich'];

function backwards() {
for (let vacationSpotIndex = vacationPlaces.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
    let showPlaces = vacationPlaces[vacationSpotIndex] + ", ";
    let removeComma = showPlaces;
    document.getElementById("resultMonthly").innerHTML += removeComma;
 }
}

function forwards() {
for (let i = 0; i < vacationPlaces.length; i++) {
    document.getElementById("resultDaily").innerHTML += vacationPlaces[i] + ", ";
 }
}



function all() {
    backwards();
    forwards();
}

function click() {
    document.getElementById("resultHourly").innerHTML = "hi";
}