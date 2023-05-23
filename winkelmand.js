// let teller= 0;
// let winkelmandRij= document.getElementsByClassName("winkelmand_rij");
// let winkelmandItems= document.getElementsByClassName("winkelmand_items");
//
// if (teller <= 0){
//     winkelmandRij.style.visibility= "hidden";
//     let legeWinkelmand= document.createElement("p");
//     let legeWinkelmandTekst= document.createTextNode("voeg items toe aan je winkelmand");
//     legeWinkelmand.appendChild(legeWinkelmandTekst);
//     winkelmandItems.appendChild(legeWinkelmand);
// }
// else{
// winkelmandRij.style.display= "block";
// //----------------- VUILBAKJE --------------------
// let removeItem = document.getElementsByClassName("winkelmand_remove");
// for (let i = 0; i < removeItem.length; i++) {
//     let button = removeItem[i];
//     button.addEventListener("click", function (event) {
//         let buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//         updateCartTotal()
//     })
// }
// //------------------- AANTALLEN --------------------
// let aantalInput = document.getElementsByClassName("winkelmand_hoeveelheid_nummer")[0];
// for (let i = 0; i < aantalInput.length; i++) {
//     let input = aantalInput[i];
//     aantalInput.addEventListener("change", function (event) {
//         input = event.target;
//         console.log(input)
//         updateCartTotal()
//     })
// }
//
// //---------------------PRODUCT TOEVOEGEN -----------------------------
// let productButton = document.getElementsByClassName("product_item");
// for (let i = 0; i < productButton.length; i++) {
//     let button = productButton[i];
//     button.addEventListener("click", function (event) {
//         let button = event.target
//         let productNaam = button.getElementsByClassName("product_benaming")[0].innerText;
//         let productPrijs = button.getElementsByClassName("product_prijs")[0].innerText;
//         let productFoto = button.getElementsByClassName("product_afbeelding")[0].src;
//         voegProductToe(productFoto, productNaam, productPrijs);
//     })
//     updateCartTotal()
// }
//
// function voegProductToe(productFoto, productNaam, productPrijs) {
//     let winkelmandRij = document.createElement("div");
//     winkelmandRij.classList.add("winkelmand_rij");
//     let winkelmandItem = document.getElementsByClassName("winkelmand_items")[0];
//     let inhoudRij = `<div class="col-2 winkelmand_foto align-middle">
//                         <img src="${productFoto}" alt="">
//                      </div>
//                      <div class="col-3 winkelmand_naam align-middle">
//                         <p>${productNaam}</p>
//                      </div>
//                      <div class="col-2 winkelmand_hoeveelheid align-middle">
//                         <input class="winkelmand_hoeveelheid_nummer" type="number" value="1" min="1" max="99">
//                      </div>
//                      <div class="col-2 winkelmand_prijs">
//                         <p>€<span class="winkelmand_prijs_nummer">${productPrijs}</span></p>
//                      </div>
//                      <div class="col-2 winkelmand_remove align-middle">
//                         <img src="assets/delete.png" alt="delete">
//                      </div>`
//     winkelmandRij.innerHTML = inhoudRij;
//     winkelmandItem.append(winkelmandRij);
// }
//
//
// //-------------------- UPDATE TOTALE PRIJS -----------------------
// function updateCartTotal() {
//     let winkelmandContainer = document.getElementsByClassName("winkelmand_items")[0];
//     let winkelmandRij = winkelmandContainer.getElementsByClassName("winkelmand_rij");
//     //let winkelmandRij = document.getElementsByClassName("winkelmand_rij");
//     let totaal = 0;
//     for (let i = 0; i < winkelmandRij.length; i++) {
//         let winkelmandItem = winkelmandRij[i];
//         let prijsElement = winkelmandItem.getElementsByClassName("winkelmand_prijs_nummer")[0];
//         let hoeveelheidElement = winkelmandItem.getElementsByClassName("winkelmand_hoeveelheid_number")[0];
//         let prijs = parseFloat(prijsElement.innerText.replace("€", ""));
//         let hoeveelheid = hoeveelheidElement.value;
//         totaal = totaal + (prijs * hoeveelheid);
//     }
//     totaal = totaal.toFixed(2);
//     document.getElementsByClassName('totale_prijs')[0].innerText = "€" + totaal;
// }
// }

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('winkelmand_remove')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('winkelmand_hoeveelheid_nummer')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('voeg_toe')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('button_afronden')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('winkelmand_items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('winkelmand_naam')[0].innerText
    let price = shopItem.getElementsByClassName('winkelmand_prijs')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('winkelmand_foto')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('winkelmand_rij')
    let cartItems = document.getElementsByClassName('winkelmand_items')[0]
    let cartItemNames = cartItems.getElementsByClassName('winkelmand_naam')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    let cartRowContents = `
           <div class="row pt-3 pb-3 winkelmand_rij">
               <div class="col-2 align-items-center">
                    <img class="winkelmand_foto" src="${imageSrc}" alt="">
               </div>
               <div class="col-3 align-items-center">
                    <span class="winkelmand_naam">${title}</span>
               </div>
               <div class="col-2 winkelmand_hoeveelheid align-items-center">
                    <input class="winkelmand_hoeveelheid_nummer" type="number" value="1" min="1" max="99">
               </div>
               <div class="col-2 winkelmand_prijs align-items-center">
                    <p>€<span class="winkelmand_prijs_nummer">${price}</span></p>
               </div>
               <div class="col-2 winkelmand_remove align-items-center">
                    <img src="assets/delete.png" alt="delete">
               </div>
           </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('winkelmand_remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('winkelmand_hoeveelheid_nummer')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('winkelmand_items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('winkelmand_rij')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('winkelmand_prijs')[0]
        let quantityElement = cartRow.getElementsByClassName('winkelmand_prijs_nummer')[0]
        let price = parseFloat(priceElement.innerText.replace('€', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    total= "€" + total;
    document.getElementsByClassName('totale_prijs')[0].innerHTML = total;
}