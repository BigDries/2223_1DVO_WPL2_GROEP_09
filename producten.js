if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
let kortePasta = document.getElementsByClassName("korte_pasta")[0];
let langePasta = document.getElementsByClassName("lange_pasta");
let noodles = document.getElementsByClassName("noodles");
let lasagne = document.getElementsByClassName("lasagne");
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
let checkboxGevuldePasta = document.getElementById("gevulde-pasta");
let checkboxVolkPasta = document.getElementById("volkoren_pasta");
let checkboxGlutenvrij = document.getElementById("Glutenvrije-pasta's");
let checkboxSauzen = document.getElementById("Pasta-sauzen");
let checkboxCulinaireSauzen = document.getElementById("Culinaire-sauzen");
let checkboxLactosevrijeSauzen = document.getElementById("Lactosevrije-sauzen");
let checkboxRijst = document.getElementById("Rijst");
let checkboxMaaltijden= document.getElementById("Ready-to-eat");

function ready() {

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

        if (checkboxKortePasta.checked){
            kortePasta.classList.add("visible");
        }
        else{
            kortePasta.classList.add("invisible");
        }



    }
}


