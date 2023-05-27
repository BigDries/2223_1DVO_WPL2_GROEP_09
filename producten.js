if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let noodles = document.getElementsByClassName("noodles");
    let lasagne = document.getElementsByClassName("lasagne");
    let gevuldePasta = document.getElementsByClassName("gevulde_pasta");
    let volkoren = document.getElementsByClassName("volkoren_pasta");
    let glutenvrij = document.getElementsByClassName("glutenvrij");
    let pastaSauzen = document.getElementsByClassName("pasta_sauzen");
    let culinaireSauzen = document.getElementsByClassName("culinaire_sauzen");
    let lactosevrijeSauzen = document.getElementsByClassName("lactosevrije_sauzen");
    let rijst = document.getElementsByClassName("rijst");
    let maaltijd = document.getElementsByClassName("maaltijd");
    let checkboxKortePasta = document.getElementById("short-pasta");
    let checkboxLangePasta = document.getElementById("long-pasta");
    let checkboxNoodles = document.getElementById("noodle");
    let checkboxLasagne = document.getElementById("lasagne");
    let checkboxGevuldePasta = document.getElementById("gevulde_pasta");
    let checkboxVolkPasta = document.getElementById("volkoren_pasta");
    let checkboxGlutenvrij = document.getElementById("Glutenvrije-pasta's");
    let checkboxSauzen = document.getElementById("Pasta-sauzen");
    let checkboxCulinaireSauzen = document.getElementById("Culinaire-sauzen");
    let checkboxLactosevrijeSauzen = document.getElementById("Lactosevrije-sauzen");
    let checkboxRijst = document.getElementById("Rijst");
    let checkboxMaaltijden = document.getElementById("Ready-to-eat");


    let filterButton = document.getElementsByClassName("filter_button")[0];
    filterButton.addEventListener('click', filterbutton);

    function filterbutton() {
        console.log(checkboxKortePasta.checked);
        console.log(checkboxLangePasta.checked);
        console.log(checkboxNoodles.checked);
        console.log(checkboxLasagne.checked);
        console.log(checkboxGevuldePasta.checked);
        console.log(checkboxVolkPasta.checked);
        console.log(checkboxGlutenvrij.checked);
        console.log(checkboxSauzen.checked);
        console.log(checkboxCulinaireSauzen.checked);
        console.log(checkboxLactosevrijeSauzen.checked);
        console.log(checkboxRijst.checked);
        console.log(checkboxMaaltijden.checked);

        if (checkboxKortePasta.checked || checkboxLangePasta.checked || checkboxNoodles.checked || checkboxLasagne.checked || checkboxGevuldePasta.checked || checkboxVolkPasta.checked || checkboxGlutenvrij.checked || checkboxSauzen.checked || checkboxCulinaireSauzen.checked || checkboxLactosevrijeSauzen.checked || checkboxRijst.checked || checkboxMaaltijden.checked) {
            let producten = document.querySelectorAll(".product_item");
            for (let i = 0; i < producten.length; i++) {
                producten[i].classList.add("invisible");
                producten[i].classList.remove("visible");
            }

            if (checkboxKortePasta.checked) {
                let kortePasta = document.querySelectorAll(".korte_pasta");
                for (let i = 0; i < kortePasta.length; i++) {
                    kortePasta[i].classList.add("visible");
                    kortePasta[i].classList.remove("invisible");
                }
            }

            if (checkboxLangePasta.checked) {
                let langePasta = document.getElementsByClassName("lange_pasta");
                for (let i = 0; i < langePasta.length; i++) {
                    langePasta[i].classList.add("visible");
                    langePasta[i].classList.remove("invisible");
                }
            }

            if (checkboxNoodles.checked) {
                for (let i = 0; i < noodles.length; i++) {
                    noodles[i].classList.add("visible");
                    noodles[i].classList.remove("invisible");
                }
            }

            if (checkboxLasagne.checked) {
                for (let i = 0; i < lasagne.length; i++) {
                    lasagne[i].classList.add("visible");
                    lasagne[i].classList.remove("invisible");
                }
            }

            if (checkboxGevuldePasta.checked) {
                for (let i = 0; i < gevuldePasta.length; i++) {
                    gevuldePasta[i].classList.add("visible");
                    gevuldePasta[i].classList.remove("invisible");
                }
            }

            if (checkboxVolkPasta.checked) {
                for (let i = 0; i < volkoren.length; i++) {
                    volkoren[i].classList.add("visible");
                    volkoren[i].classList.remove("invisible");
                }
            }

            if (checkboxGlutenvrij.checked) {
                for (let i = 0; i < glutenvrij.length; i++) {
                    glutenvrij[i].classList.add("visible");
                    glutenvrij[i].classList.remove("invisible");
                }
            }

            if (checkboxSauzen.checked) {
                for (let i = 0; i < pastaSauzen.length; i++) {
                    pastaSauzen[i].classList.add("visible");
                    pastaSauzen[i].classList.remove("invisible");
                }
            }

            if (checkboxCulinaireSauzen.checked) {
                for (let i = 0; i < culinaireSauzen.length; i++) {
                    culinaireSauzen[i].classList.add("visible");
                    culinaireSauzen[i].classList.remove("invisible");
                }
            }

            if (checkboxLactosevrijeSauzen.checked) {
                for (let i = 0; i < lactosevrijeSauzen.length; i++) {
                    lactosevrijeSauzen[i].classList.add("visible");
                    lactosevrijeSauzen[i].classList.remove("invisible");
                }
            }

            if (checkboxRijst.checked) {
                for (let i = 0; i < rijst.length; i++) {
                    rijst[i].classList.add("visible");
                    rijst[i].classList.remove("invisible");
                }
            }

            if (checkboxMaaltijden.checked) {
                for (let i = 0; i < maaltijd.length; i++) {
                    maaltijd[i].classList.add("visible");
                    maaltijd[i].classList.remove("invisible");
                }
            }

        } else {
            let producten = document.querySelectorAll(".product_item");
            for (let i = 0; i < producten.length; i++) {
                producten[i].classList.add("visible");
                producten[i].classList.remove("invisible");
            }
        }
    }

}

// let products = {
//     data: [
//         {
//             productName: "Penne",
//             category: "kortePasta",
//             subcategory: "glutenvrij",
//             price: "4,49",
//             image: src = "assets/penne-S.png",
//         },
//         {
//             productName: "Fusilli",
//             category: "korte_pasta",
//             subcategory: "glutenvrij",
//             price: "4,49",
//             image: src = "/assets/fusilli.png",
//         },
//         {
//             productName: "Farfalle",
//             category: "korte_pasta",
//             subcategory: "glutenvrij",
//             price: "4,49",
//             image: src = "/assets/farfalle.png",
//         },
//         {
//             productName: "Macaroni",
//             category: "korte_pasta",
//             subcategory: "glutenvrij",
//             price: "4,29",
//             image: src = "/assets/macaroni.png",
//         },
//         {
//             productName: "Spaghetti",
//             category: "lange_pasta",
//             subcategory: "glutenvrij",
//             price: "1,29",
//             image: src = "/assets/spaghetti.png",
//         },
//         {
//             productName: "Volkoren Tagliatelle",
//             category: "lange_pasta",
//             subcategory: "volkoren",
//             price: "8,99",
//             image: src = "/assets/tagii.png",
//         },
//         {
//             productName: "Tagliatelle",
//             category: "lange_pasta",
//             subcategory: "glutenvrij",
//             price: "1,89",
//             image: src = "/assets/tarwe_noods.png",
//         },
//         {
//             productName: "Noodles",
//             category: "noodles",
//             subcategory: "",
//             price: "4,99",
//             image: src = "/assets/noodles.png",
//         },
//         {
//             productName: "Lasagne",
//             category: "lasagne",
//             subcategory: "glutenvrij",
//             price: "4,99",
//             image: src = "/assets/lasagne.png",
//         },
//         {
//             productName: "Capeletti",
//             category: "gevuld",
//             subcategory: "glutenvrij",
//             price: "4,99",
//             image: src = "/assets/capeletti.png",
//         },
//         {
//             productName: "Volkoren Macaroni",
//             category: "korte_pasta",
//             subcategory: "volkoren",
//             price: "4,99",
//             image: src = "/assets/vk%20mac.png",
//         },
//         {
//             productName: "Bolognese",
//             category: "sauzen",
//             subcategory: "lactosevrij",
//             price: "4,99",
//             image: src = "/assets/bolon.png",
//         },
//         {
//             productName: "Carbonara",
//             category: "sauzen",
//             subcategory: "",
//             price: "4,99",
//             image: src = "/assets/carbonara.png",
//         },
//         {
//             productName: "Rijst",
//             category: "rijst",
//             subcategory: "",
//             price: "4,99",
//             image: src = "/assets/rijst-S.png",
//         },
//     ],
// };

