let kortePasta = document.getElementsByClassName("korte_pasta");
let langePasta = document.getElementsByClassName("lange_pasta");
let volkoren = document.getElementsByClassName("volkoren_pasta");
let glutenvrij = document.getElementsByClassName("glutenvrij");
let pastaSauzen = document.getElementsByClassName("pasta_sauzen");
let rijst = document.getElementsByClassName("rijst");
let checkboxKortePasta = document.getElementById("short-pasta").checked;
let checkboxLangePasta = document.getElementById("long-pasta").checked;
let checkboxVolkPasta = document.getElementById("volkoren_pasta").checked;
let checkboxGlutenvrij = document.getElementById("Glutenvrije-pasta's").checked;
let checkboxSauzen = document.getElementById("Pasta-sauzen").checked;
let checkboxRijst = document.getElementById("Rijst").checked;
let filterButton = document.getElementsByClassName("filter_button");

filterButton.addEventListener('click', function () {
    console.log(checkboxKortePasta);
    kortePasta.style.visibility= ""
})


