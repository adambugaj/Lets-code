function buttonClick() {
    let text = '';
    let movie = document.getElementById("buttonClicked").value.toUpperCase();

    
    switch (movie) {
        case "GOOD": 
            text = "Very good humor";
            break;
        default:
            text = "Easy and calm"
    }
    document.getElementById("resultMonthly").innerHTML = text;
}

