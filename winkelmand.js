var removeItem = document.getElementsByClassName("winkelmand_remove");
for (var i = 0; i < removeItem.length; i++) {
    var button = removeItem[i]
    button.addEventListener("click", function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var winkelmandContainer = document.getElementsByClassName("winkelmand_items")[0];
    var winkelmandRij = winkelmandContainer.getElementsByClassName("winkelmand_rij");
    var totaal = 0;
    for (var i = 0; i < winkelmandRij.length; i++) {
        var winkelmandItem = winkelmandRij[i];
        var prijsElement = winkelmandItem.getElementsByClassName("winkelmand_prijs")[0];
        var hoeveelheidElement = winkelmandItem.getElementsByClassName("winkelmand_hoeveelheid")[0];
        var prijs = parseFloat(prijsElement.innerText.replace("€", ""));
        var hoeveelheid = hoeveelheidElement.value;
        totaal = totaal + (prijs * hoeveelheid);
    }
    document.getElementsByClassName('totale_prijs')[0].innerHTML = "€" + totaal;
}