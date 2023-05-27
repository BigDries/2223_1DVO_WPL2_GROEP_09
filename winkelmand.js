if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

let products = {
    data: [
        {
            productName: "Penne",
            category: "kortePasta",
            subcategory: "glutenvrij",
            price: "4,49",
            image: src = "assets/penne-S.png",
        },
        {
            productName: "Fusilli",
            category: "korte_pasta",
            subcategory: "glutenvrij",
            price: "4,49",
            image: src = "/assets/fusilli.png",
        },
        {
            productName: "Farfalle",
            category: "korte_pasta",
            subcategory: "glutenvrij",
            price: "4,49",
            image: src = "/assets/farfalle.png",
        },
        {
            productName: "Macaroni",
            category: "korte_pasta",
            subcategory: "glutenvrij",
            price: "4,29",
            image: src = "/assets/macaroni.png",
        },
        {
            productName: "Spaghetti",
            category: "lange_pasta",
            subcategory: "glutenvrij",
            price: "1,29",
            image: src = "/assets/spaghetti.png",
        },
        {
            productName: "Volkoren Tagliatelle",
            category: "lange_pasta",
            subcategory: "volkoren",
            price: "8,99",
            image: src = "/assets/tagii.png",
        },
        {
            productName: "Tagliatelle",
            category: "lange_pasta",
            subcategory: "glutenvrij",
            price: "1,89",
            image: src = "/assets/tarwe_noods.png",
        },
        {
            productName: "Noodles",
            category: "noodles",
            subcategory: "",
            price: "4,99",
            image: src = "/assets/noodles.png",
        },
        {
            productName: "Lasagne",
            category: "lasagne",
            subcategory: "glutenvrij",
            price: "4,99",
            image: src = "/assets/lasagne.png",
        },
        {
            productName: "Capeletti",
            category: "gevuld",
            subcategory: "glutenvrij",
            price: "4,99",
            image: src = "/assets/capeletti.png",
        },
        {
            productName: "Volkoren Macaroni",
            category: "korte_pasta",
            subcategory: "volkoren",
            price: "4,99",
            image: src = "/assets/vk%20mac.png",
        },
        {
            productName: "Bolognese",
            category: "sauzen",
            subcategory: "lactosevrij",
            price: "4,99",
            image: src = "/assets/bolon.png",
        },
        {
            productName: "Carbonara",
            category: "sauzen",
            subcategory: "",
            price: "4,99",
            image: src = "/assets/carbonara.png",
        },
        {
            productName: "Rijst",
            category: "rijst",
            subcategory: "",
            price: "4,99",
            image: src = "/assets/rijst-S.png",
        },
    ],
}


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