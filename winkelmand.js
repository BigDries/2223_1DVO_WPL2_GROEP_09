if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    let addToCartButtons = document.getElementsByClassName('voeg_toe')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('button_afronden')[0].addEventListener('click', purchaseClicked)
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
    let title = shopItem.getElementsByClassName('item_title')[0].innerText;
    let price = document.getElementsByClassName('item-prijs')[0];
    let imageSrc = document.getElementsByClassName('item_afbeelding')[0];
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartRow = document.createElement('div');
    cartRow.classList.add("row", "pt-3", "pb-3", "winkelmand_rij");
    cartItems.appendChild(cartRow);

    let cartImage = document.createElement("div");
    cartImage.classList.add("col-2", "winkelmand_foto", "align-items-center");
    cartRow.appendChild(cartImage);
    let cartImageFile = document.getElementsByClassName("item_afbeelding")[0];
    cartImageFile.style.width= "20%";
    cartImage.appendChild(cartImageFile);

    let cartName = document.createElement("div");
    cartName.classList.add("col-3", "winkelmand_naam", "align-items-center");
    cartRow.appendChild(cartName);
    let cartNameItem = document.getElementsByClassName("item_title")[0];
    cartNameItem.style.fontFamily= "\"roboto\", sans-serif";
    cartNameItem.style.fontSize= "12pt";
    cartName.appendChild(cartNameItem);

    let cartQntity = document.createElement("div");
    cartQntity.classList.add("col-2", "winkelmand_hoeveelheid", "align-items-center");
    cartRow.appendChild(cartQntity);
    let cartQntityNumber = document.createElement("div");
    cartQntityNumber.innerHTML = "<input class=\"winkelmand_hoeveelheid_nummer\" type=\"number\" value=\"1\" min=\"1\" max=\"99\">";
    cartQntity.appendChild(cartQntityNumber);
    let quantityInputs = parseInt("cartQntityNumber");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let cartPrice = document.createElement("div");
    cartPrice.innerHTML = "<div class=\"col-2 winkelmand_prijs align-items-center\">"+"</div>";
    cartRow.appendChild(cartPrice);
    let cartPriceNumber = document.getElementById("item_prijs").value;
    cartPrice.appendChild(cartPriceNumber);

    let winkelmandRemoveDiv = document.createElement("div");
    winkelmandRemoveDiv.innerHTML= "<div class=\"col-2 winkelmand_remove align-items-center\"></div>";
    cartRow.appendChild(winkelmandRemoveDiv);
    let winkelmandRemoveButton = document.createElement("img");
    winkelmandRemoveButton.innerHTML = "<img src=\"assets/delete.png\" alt=\"delete\">";
    winkelmandRemoveDiv.appendChild(winkelmandRemoveButton);
    for (let i = 0; i < winkelmandRemoveButton.length; i++) {
        let button = winkelmandRemoveButton[i]
        button.addEventListener('click', removeCartItem)
    }

    cartRow.classList.add('cart-row')

    let cartItemNames = cartItems.getElementsByClassName('winkelmand_naam')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already added to the cart')
            return
        }
    }

    cartItems.append(cartRow)
    cartRow.getElementsByClassName('winkelmand_remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('winkelmand_hoeveelheid_nummer')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('winkelmand_items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('winkelmand_prijs_nummer')[0]
        let quantityElement = cartRow.getElementsByClassName('winkelmand_hoeveelheid_nummer')[0]
        let price = parseInt(priceElement);
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('totale_prijs')[0].innerText = '€' + total;
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let afronden = document.getElementsByClassName('button_afronden')[0];
    let cartItems= document.getElementsByClassName("winkelmand_items")[0];
    afronden.addEventListener('click', cartLeegmaken)
    function cartLeegmaken (){
        cartItems.innerHTML="";
    }
    updateCartTotal()
}


