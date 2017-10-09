let fruits = ["Banana", "Orange", "Apple", "Mango"]
let i = 0;
let text = '';
let j = 10;

while (fruits[i]) {
    text += fruits[i] + "<br />";
    i++;
}
document.getElementById("resultMonthly").innerHTML = text;

for (let i = 0; i < fruits.length; i++) 
    document.getElementById("resultDaily").innerHTML += fruits[i] + "<br />";

function guessWage() {
do {
    var guess = document.getElementById("guessNumber")
    if (guess.value != 15) {
        guess.value = false;
    }
} while (guess.value === 15)
    alert('you guessed the number');
}

//for (j = 0; j <= 20; j++) {
//    if ((j % 2) === 0) {
//        continue;
//    }
//    if (j === 15) {
//        break;
//    }
//    document.write(j + "<br />");
//}

do {
    var guess = prompt("Guess a number between 1 and 20");
} while (guess !=15)

alert("Success!");