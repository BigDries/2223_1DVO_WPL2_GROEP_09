//----------------- VUILBAKJE --------------------
let removeItem = document.getElementsByClassName("winkelmand_remove");
for (let i = 0; i < removeItem.length; i++) {
    let button = removeItem[i];
    button.addEventListener("click", function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
//------------------- AANTALLEN --------------------
let aantalInput = document.getElementsByClassName("winkelmand_hoeveelheid_nummer")[0];
for (let i = 0; i < aantalInput.length; i++) {
    let input = aantalInput[i];
    aantalInput.addEventListener("change", function (event) {
        input = event.target;
        console.log(input)
        updateCartTotal()
    })
}

//---------------------PRODUCT TOEVOEGEN -----------------------------
let productButton = document.getElementsByClassName("product_item");
for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i];
    button.addEventListener("click", function (event) {
        let button = event.target
        let productNaam = button.getElementsByClassName("product_benaming")[0].innerText;
        let productPrijs = button.getElementsByClassName("product_prijs")[0].innerText;
        let productFoto = button.getElementsByClassName("product_afbeelding")[0].src;
        voegProductToe(productFoto, productNaam, productPrijs)
    })
    updateCartTotal()
}

function voegProductToe(productFoto, productNaam, productPrijs) {
    let winkelmandRij = document.createElement("div");
    winkelmandRij.classList.add("winkelmand_rij");
    let winkelmandItem = document.getElementsByClassName("winkelmand_items")[0];
    let inhoudRij = `<div class="col-2 winkelmand_foto align-middle">
                        <img src="${productFoto}" alt="">
                     </div>
                     <div class="col-3 winkelmand_naam align-middle">
                        <p>${productNaam}</p>
                     </div>
                     <div class="col-2 winkelmand_hoeveelheid align-middle">
                        <input class="winkelmand_hoeveelheid_nummer" type="number" value="1" min="1" max="99">
                     </div>
                     <div class="col-2 winkelmand_prijs">
                        <p>€<span class="winkelmand_prijs_nummer">${productPrijs}</span></p>
                     </div>
                     <div class="col-2 winkelmand_remove align-middle">
                        <img src="assets/delete.png" alt="delete">
                     </div>`
    winkelmandRij.innerHTML = inhoudRij;
    winkelmandItem.append(winkelmandRij);
}


//-------------------- UPDATE TOTALE PRIJS -----------------------
function updateCartTotal() {
    let winkelmandContainer = document.getElementsByClassName("winkelmand_items")[0];
    let winkelmandRij = winkelmandContainer.getElementsByClassName("winkelmand_rij");
    //let winkelmandRij = document.getElementsByClassName("winkelmand_rij");
    let totaal = 0;
    for (let i = 0; i < winkelmandRij.length; i++) {
        let winkelmandItem = winkelmandRij[i];
        let prijsElement = winkelmandItem.getElementsByClassName("winkelmand_prijs_nummer")[0];
        let hoeveelheidElement = winkelmandItem.getElementsByClassName("winkelmand_hoeveelheid_number")[0];
        let prijs = parseFloat(prijsElement.innerText.replace("€", ""));
        let hoeveelheid = hoeveelheidElement.value;
        totaal = totaal + (prijs * hoeveelheid);
    }
    totaal = totaal.toFixed(2);
    document.getElementsByClassName('totale_prijs')[0].innerText = "€" + totaal;
}