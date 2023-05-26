if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let kortePasta = document.getElementsByClassName("korte_pasta");
    let langePasta = document.getElementsByClassName("lange_pasta");
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

        let checkboxChecked= checkboxKortePasta.checked;
        console.log(checkboxChecked);

        if (checkboxKortePasta.checked) {
            for (let i = 0; i < kortePasta.length; i++) {
                kortePasta[i].classList.add("visible");
                kortePasta[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < kortePasta.length; i++) {
                kortePasta[i].classList.add("invisible");
                kortePasta[i].classList.remove("visible");
            }
        }

        if (checkboxLangePasta.checked) {
            for (let i = 0; i < langePasta.length; i++) {
                langePasta[i].classList.add("visible");
                langePasta[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < langePasta.length; i++) {
                langePasta[i].classList.add("invisible");
                langePasta[i].classList.remove("visible");
            }
        }

        if (checkboxNoodles.checked) {
            for (let i = 0; i < noodles.length; i++) {
                noodles[i].classList.add("visible");
                noodles[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < noodles.length; i++) {
                noodles[i].classList.add("invisible");
                noodles[i].classList.remove("visible");
            }
        }

        if (checkboxLasagne.checked) {
            for (let i = 0; i < lasagne.length; i++) {
                lasagne[i].classList.add("visible");
                lasagne[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < lasagne.length; i++) {
                lasagne[i].classList.add("invisible");
                lasagne[i].classList.remove("visible");
            }
        }

        if (checkboxGevuldePasta.checked) {
            for (let i = 0; i < gevuldePasta.length; i++) {
                gevuldePasta[i].classList.add("visible");
                gevuldePasta[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < gevuldePasta.length; i++) {
                gevuldePasta[i].classList.add("invisible");
                gevuldePasta[i].classList.remove("visible");
            }
        }

        if (checkboxVolkPasta.checked) {
            for (let i = 0; i < volkoren.length; i++) {
                volkoren[i].classList.add("visible");
                volkoren[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < volkoren.length; i++) {
                volkoren[i].classList.add("invisible");
                volkoren[i].classList.remove("visible");
            }
        }

        if (checkboxGlutenvrij.checked) {
            for (let i = 0; i < glutenvrij.length; i++) {
                glutenvrij[i].classList.add("visible");
                glutenvrij[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < glutenvrij.length; i++) {
                glutenvrij[i].classList.add("invisible");
                glutenvrij[i].classList.remove("visible");
            }
        }

        if (checkboxSauzen.checked) {
            for (let i = 0; i < pastaSauzen.length; i++) {
                pastaSauzen[i].classList.add("visible");
                pastaSauzen[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < pastaSauzen.length; i++) {
                pastaSauzen[i].classList.add("invisible");
                pastaSauzen[i].classList.remove("visible");
            }
        }

        if (checkboxLactosevrijeSauzen.checked) {
            for (let i = 0; i < lactosevrijeSauzen.length; i++) {
                lactosevrijeSauzen[i].classList.add("visible");
                lactosevrijeSauzen[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < lactosevrijeSauzen.length; i++) {
                lactosevrijeSauzen[i].classList.add("invisible");
                lactosevrijeSauzen[i].classList.remove("visible");
            }
        }

        if (checkboxCulinaireSauzen.checked) {
            for (let i = 0; i < culinaireSauzen.length; i++) {
                culinaireSauzen[i].classList.add("visible");
                culinaireSauzen[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < culinaireSauzen.length; i++) {
                culinaireSauzen[i].classList.add("invisible");
                culinaireSauzen[i].classList.remove("visible");
            }
        }

        if (checkboxRijst.checked) {
            for (let i = 0; i < rijst.length; i++) {
                rijst[i].classList.add("visible");
                rijst[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < rijst.length; i++) {
                rijst[i].classList.add("invisible");
                rijst[i].classList.remove("visible");
            }
        }

        if (checkboxMaaltijden.checked) {
            for (let i = 0; i < maaltijd.length; i++) {
                maaltijd[i].classList.add("visible");
                maaltijd[i].classList.remove("invisible");
            }
        } else {
            for (let i = 0; i < maaltijd.length; i++) {
                maaltijd[i].classList.add("invisible");
                maaltijd[i].classList.remove("visible");
            }
        }
    }

}



