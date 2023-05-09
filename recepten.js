

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


let pastaTomaat = document.getElementById("item_pasta_tomaat");
pastaTomaat.addEventListener('click', functie1)
function functie1(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_tomaat.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta Tomaat</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Vegan</p>"
    document.getElementById("icon_allergie2").src = "assets/recepten_veggie.png";
    document.getElementById("allergie2").innerHTML = "<p>Lactose</p>";
}

let pastaCarbonara = document.getElementById("item_pasta_carbonara");
pastaCarbonara.addEventListener('click', functie2)
function functie2(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta-carbonara.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta carbonara</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_lactose.png";
    document.getElementById("allergie1").innerHTML="<p>Lactose</p>"
    document.getElementById("icon_allergie2").style.display = "none";
    document.getElementById("allergie2").style.display = "none";
}