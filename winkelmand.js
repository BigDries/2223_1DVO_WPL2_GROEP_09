// let addToCartButtons = document.getElementsByClassName('voeg_toe')
// for (let i = 0; i < addToCartButtons.length; i++) {
//     let button = addToCartButtons[i]
//     button.addEventListener('click', addToCartClicked)
// }

document.getElementsByClassName('button_afronden')[0].addEventListener('click', purchaseClicked)


let shopping_cart = [];
loadCart();

function loadCart() {
    if (localStorage.getItem('shopping_cart')) {
        shopping_cart = JSON.parse(localStorage.getItem('shopping_cart'));
        addItemToCart();
    } else {
        shopping_cart = [];
    }
}

function saveCart() {
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
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

// function addToCartClicked(event) {
//     let button = event.target
//     let shopItem = button.parentElement.parentElement;
//     // let title = shopItem.getElementsByClassName('item_title')[0].innerText;
//     // let price = document.getElementsByClassName('item-prijs')[0];
//     // let imageSrc = document.getElementsByClassName('item_afbeelding')[0];
//     addItemToCart();
//     updateCartTotal();
// }

function addItemToCart() {
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartRow = document.createElement('div');
    cartRow.classList.add("row", "pt-3", "pb-3", "winkelmand_rij");
    cartItems.appendChild(cartRow);
    let cartItemRow = document.createElement("div");
    cartItemRow.classList.add("col-11", "mx-auto", "display_flex");
    cartRow.appendChild(cartItemRow);


    let cartImage = document.createElement("div");
    cartImage.classList.add("col-2", "mx-auto", "winkelmand_foto", "align-items-center");
    cartItemRow.appendChild(cartImage);
    let cartImageFile = document.getElementsByClassName("item_afbeelding")[0];
    cartImageFile.style.width = "90%";
    cartImage.appendChild(cartImageFile);

    let cartName = document.createElement("div");
    cartName.classList.add("col-3", "winkelmand_naam", "text-start", "align-items-center");
    cartItemRow.appendChild(cartName);
    let cartNameItem = document.getElementsByClassName("item_title")[0];
    cartNameItem.style.fontFamily = "roboto, sans-serif";
    cartNameItem.style.fontSize = "12pt";
    cartName.appendChild(cartNameItem);

    let cartQntity = document.createElement("div");
    cartQntity.classList.add("col-2", "winkelmand_hoeveelheid", "align-items-center");
    cartItemRow.appendChild(cartQntity);
    let cartQntityNumber = document.createElement("div");
    cartQntityNumber.innerHTML = "<input class=\"winkelmand_hoeveelheid_nummer\" type=\"number\" value=\"1\" min=\"1\" max=\"99\">";
    cartQntity.appendChild(cartQntityNumber);
    let quantityInputs = parseInt("cartQntityNumber");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let cartPrice = document.createElement("div");
    cartPrice.classList.add("col-2", "winkelmand_prijs", "align-items-center");
    cartItemRow.appendChild(cartPrice);
    let cartPriceNumber = document.getElementById("item_prijs");
    let numberValue = document.createTextNode(cartPriceNumber.innerText);
    console.log(cartPriceNumber);
    console.log(numberValue);
    //cartPrice.appendChild(cartPriceNumber);
    cartPrice.appendChild(numberValue);


    let winkelmandRemoveDiv = document.createElement("div");
    winkelmandRemoveDiv.classList.add("col-2", "winkelmand_remove", "align-items-center");
    cartItemRow.appendChild(winkelmandRemoveDiv);
    let winkelmandRemoveButton = document.createElement("img");
    winkelmandRemoveButton.src = "assets/delete.png";
    winkelmandRemoveDiv.appendChild(winkelmandRemoveButton);
    for (let i = 0; i < winkelmandRemoveDiv.length; i++) {
        let button = winkelmandRemoveDiv[i]
        button.addEventListener('click', removeCartItem)
    }

    //cartItemRow.classList.add('cart-row')

    // let winkelmandItems = document.getElementsByClassName("winkelmand_items");
    // let title = document.getElementsByClassName("item_title")[0];
    // for (let i = 0; i < winkelmandItems.length; i++) {
    //     let itemNaam = document.getElementsByClassName("winkelmand_naam")[i];
    //     let addToCartButtons = document.getElementsByClassName('voeg_toe')[0];
    //     addToCartButtons.addEventListener("click", checkItemInCart);
    //
    //     function checkItemInCart() {
    //         if (itemNaam.innerText.toUpperCase() === title.toUpperCase()) {
    //             alert('This item is already added to the cart. Change the quantity if you want to add more.');
    //         } else {
    //             addItemToCart()
    //         }
    //     }
    // }
    // let title= document.getElementsByClassName("winkelmand_naam")[0];
    // let cartItemNames = cartItems.getElementsByClassName('winkelmand_naam');
    // let addToCartButtons = document.getElementsByClassName('voeg_toe');
    // addToCartButtons.addEventListener("click", checkItemInCart);
    // function checkItemInCart(){
    // for (let i = 0; i < cartItemNames.length; i++) {
    //     if (cartItemNames[i].innerText === title) {
    //         alert('This item is already added to the cart. Change the quantity if you want to add more.');
    //     }
    //     else{
    //         addItemToCart()
    //     }}
    // }

    cartItems.append(cartRow)
    cartRow.getElementsByClassName('winkelmand_remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('winkelmand_hoeveelheid_nummer')[0].addEventListener('change', quantityChanged)
    saveCart()
}


function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('winkelmand_items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('winkelmand_rij');
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('item_prijs')[0].innerText;
        let quantityElement = cartRow.getElementsByClassName('winkelmand_hoeveelheid_nummer');
        let price = parseInt(priceElement);
        let quantity = parseInt(quantityElement.value);
        console.log("price");
        console.log("quantity");

        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('totale_prijs')[0].innerText = '€' + total;
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let afronden = document.getElementsByClassName('button_afronden')[0];
    let cartItems = document.getElementsByClassName("winkelmand_items")[0];
    afronden.addEventListener('click', cartLeegmaken)

    function cartLeegmaken() {
        cartItems.innerHTML = "";
    }

    updateCartTotal()
}


