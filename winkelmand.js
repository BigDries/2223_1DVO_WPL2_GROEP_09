if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    let products = [{
                productName: "Penne",
                category: "kortePasta",
                subcategory: "glutenvrij",
                price: "4,49",
                image: "penne-S.png",
            },
            {
                productName: "Fusilli",
                category: "korte_pasta",
                subcategory: "glutenvrij",
                price: "4,49",
                image: "/assets/fusilli.png",
            },
            {
                productName: "Farfalle",
                category: "korte_pasta",
                subcategory: "glutenvrij",
                price: "4,49",
                image: "/assets/farfalle.png",
            },
            {
                productName: "Macaroni",
                category: "korte_pasta",
                subcategory: "glutenvrij",
                price: "4,29",
                image: "/assets/macaroni.png",
            },
            {
                productName: "Spaghetti",
                category: "lange_pasta",
                subcategory: "glutenvrij",
                price: "1,29",
                image: "/assets/spaghetti.png",
            },
            {
                productName: "Volkoren Tagliatelle",
                category: "lange_pasta",
                subcategory: "volkoren",
                price: "8,99",
                image: "/assets/tagii.png",
            },
            {
                productName: "Tagliatelle",
                category: "lange_pasta",
                subcategory: "glutenvrij",
                price: "1,89",
                image: "/assets/tarwe_noods.png",
            },
            {
                productName: "Noodles",
                category: "noodles",
                subcategory: "",
                price: "4,99",
                image: "/assets/noodles.png",
            },
            {
                productName: "Lasagne",
                category: "lasagne",
                subcategory: "glutenvrij",
                price: "4,99",
                image: "/assets/lasagne.png",
            },
            {
                productName: "Capeletti",
                category: "gevuld",
                subcategory: "glutenvrij",
                price: "4,99",
                image: "/assets/capeletti.png",
            },
            {
                productName: "Volkoren Macaroni",
                category: "korte_pasta",
                subcategory: "volkoren",
                price: "4,99",
                image: "/assets/vk%20mac.png",
            },
            {
                productName: "Bolognese",
                category: "sauzen",
                subcategory: "lactosevrij",
                price: "4,99",
                image: "/assets/bolon.png",
            },
            {
                productName: "Carbonara",
                category: "sauzen",
                subcategory: "",
                price: "4,99",
                image: "/assets/carbonara.png",
            },
            {
                productName: "Rijst",
                category: "rijst",
                subcategory: "",
                price: "4,99",
                image: "/assets/rijst-S.png",
            },
        ]

    let productItem= document.getElementsByClassName("product_item");
    for (let i=0; i < productItem.length; i++){
        productItem[i].addEventListener("click", showProductPage)
        function showProductPage(i) {
            let img = document.createElement("img");
            img.src = "assets/penne-S.png";
                //products[i].image;
            let productImage= document.getElementById("bolon_saus");
            productImage.appendChild(img);
        }
    }

}