let removeItem = document.getElementsByClassName("winkelmand_remove");
for (let i = 0; i < removeItem.length; i++) {
    let button = removeItem[i];
    button.addEventListener("click", function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

let aantalInput = document.getElementsByClassName("winkelmand_hoeveelheid")[0];
for (let i = 0; i < aantalInput.length; i++) {
    let input = aantalInput[i];
    input.addEventListener("change", function (event) {
        let input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal()
    })
}

function updateCartTotal() {
    let winkelmandContainer = document.getElementsByClassName("winkelmand_items")[0];
    let winkelmandRij = winkelmandContainer.getElementsByClassName("winkelmand_rij")[0];
    let totaal = 0;
    for (let i = 0; i < winkelmandRij.length; i++) {
        let winkelmandItem = winkelmandRij[i];
        let prijsElement = winkelmandItem.getElementsByClassName("winkelmand_prijs")[0];
        let hoeveelheidElement = winkelmandItem.getElementsByClassName("winkelmand_hoeveelheid")[0];
        let prijs = parseInt(prijsElement.innerText.replace("€", ""));
        let hoeveelheid = hoeveelheidElement.value;
        totaal = totaal + (prijs * hoeveelheid);
    }
    totaal= Math.round(totaal * 100)/100;
    document.getElementsByClassName('totale_prijs')[0].innerText = "€" + totaal;
}