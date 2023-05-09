

let receptenCarousel = [...document.querySelectorAll(".recepten_carousel")];
let buttonRight = [...document.querySelectorAll(".icon-arrow-right")];
let buttonLeft = [...document.querySelectorAll(".icon-arrow-left")];


function getWindowWidth() {
    if (window.innerWidth!=null) {
        return window.innerWidth;
    } else {
        return document.body.clientWidth;
    }
}

if (getWindowWidth() <= 576){
    receptenCarousel.forEach((item, i) =>{
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width/2;

        buttonRight[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        buttonLeft[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
else if (getWindowWidth() <= 1200){
    receptenCarousel.forEach((item, i) =>{
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width/3;

        buttonRight[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        buttonLeft[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
else {
    receptenCarousel.forEach((item, i) =>{
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width/4;

        buttonRight[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        buttonLeft[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}

let reviews = document.getElementById("recepten_review_titel");
reviews.addEventListener("click", changeToReview);
function changeToReview(){
    document.getElementById("recepten_ingredienten_lijst").style.display = "none";
    document.getElementById("recepten_review_inhoud").style.display = "block";
}
let ingredienten = document.getElementById("recepten_ingredienten_titel");
ingredienten.addEventListener("click", changeToIngredienten);
function changeToIngredienten(){
    document.getElementById("recepten_ingredienten_lijst").style.display = "block";
    document.getElementById("recepten_review_inhoud").style.display = "none";
}


let pastaTomaat = document.getElementById("item_pasta_tomaat");
pastaTomaat.addEventListener('click', functie1)
function functie1(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_tomaat.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta Tomaat</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Vegan</p>";
    document.getElementById("icon_allergie2").style.display = "block";
    document.getElementById("icon_allergie2").src = "assets/recepten_lactose.png";
    document.getElementById("allergie2").style.display = "block";
    document.getElementById("allergie2").innerHTML = "<p>Lactose</p>";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta spaghetti</p>" + "<p>Busta vegan bolognese</p>" + "<p>Geraspte mozarella</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaCarbonara = document.getElementById("item_pasta_carbonara");
pastaCarbonara.addEventListener('click', functie2)
function functie2(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta-carbonara.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta carbonara</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_lactose.png";
    document.getElementById("allergie1").innerHTML="<p>Lactose</p>";
    document.getElementById("icon_allergie2").style.display = "none";
    document.getElementById("allergie2").style.display = "none";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta Tagliatelli</p>" + "<p>Busta carbonara saus</p>" + "<p>Spekjes</p>" + "<p>Extra geraspte kaas</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaBuffalo = document.getElementById("item_pasta_buffalo");
pastaBuffalo.addEventListener('click', functie3)
function functie3(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_buffalo.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta Buffalo</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Vegan</p>";
    document.getElementById("icon_allergie2").src = "assets/recepten_lactose.png";
    document.getElementById("icon_allergie2").style.display="block";
    document.getElementById("allergie2").innerHTML="<p>Lactose</p>";
    document.getElementById("allergie2").style.display="block";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta spaghetti</p>" + "<p>Busta vegan bolognese</p>" + "<p>verse kerstomaten</p>" + "<p>Verse mozarella</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaNapolitana = document.getElementById("item_pasta_napolitana");
pastaNapolitana.addEventListener('click', functie4)
function functie4(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_napolitana.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta napolitana</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Vegan</p>";
    document.getElementById("icon_allergie2").style.display = "none";
    document.getElementById("allergie2").style.display = "none";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta farfalle</p>" + "<p>Busta napolitana saus</p>" + "<p>Geraspte kaas</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaVierKazen = document.getElementById("item_pasta_vierkazen");
pastaVierKazen.addEventListener('click', functie5)
function functie5(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_vier_kazen.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta vier kazen</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_lactose.png";
    document.getElementById("allergie1").innerHTML="<p>Lactose</p>";
    document.getElementById("icon_allergie2").style.display = "none";
    document.getElementById("allergie2").style.display = "none";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta penne</p>" + "<p>Busta vier kazen saus</p>" + "<p>Hespenblokjes</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaSpekShrooms = document.getElementById("item_pasta_spekshrooms");
pastaSpekShrooms.addEventListener('click', functie6)
function functie6(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_spek_en_shrooms.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta spek en shrooms</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_lactose.png";
    document.getElementById("allergie1").innerHTML="<p>Lactose</p>";
    document.getElementById("icon_allergie2").style.display = "none";
    document.getElementById("allergie2").style.display = "none";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta tageliatelle</p>" + "<p>Busta pesto</p>" + "<p>Spekjes</p>" + "<p>Champignons</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaTomaatMozarella = document.getElementById("item_pasta_tomaatmozarella");
pastaTomaatMozarella.addEventListener('click', functie7)
function functie7(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_tomaat-mozarella.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta tomaat mozarella</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Vegan</p>";
    document.getElementById("icon_allergie2").src = "assets/recepten_lactose.png";
    document.getElementById("icon_allergie2").style.display = "block";
    document.getElementById("allergie2").innerHTML = "<p>Lactose</p>";
    document.getElementById("allergie2").style.display = "block";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta tagliatelle</p>" + "<p>Busta napolitana saus</p>" + "<p>Verse tomaten</p>" + "<p>Verse mozarella</p>" + "<p>Kruiding naar keuze</p>";
}

let pastaArrabiata = document.getElementById("item_pasta_arrabiata");
pastaArrabiata.addEventListener('click', functie8)
function functie8(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_arrabiata.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta arrabiata</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_lactose.png";
    document.getElementById("allergie1").innerHTML="<p>Lactose</p>";
    document.getElementById("icon_allergie2").src = "assets/recepten_pikant.png";
    document.getElementById("icon_allergie2").style.display = "block";
    document.getElementById("allergie2").innerHTML = "<p>Pikant</>";
    document.getElementById("allergie2").style.display = "block";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta penne</p>" + "<p>Busta arrabiata saus</p>" + "<p>Geraspte kaas</p>" + "<p>Kruiding naar keuze</p>";
}