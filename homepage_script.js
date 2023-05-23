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
        let containerWidth = containerDimensie.width/3;

        buttonRight[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        buttonLeft[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
function replaceWithVideo() {
    var image = document.getElementById('image');
    var video = document.getElementById('videoo');

    image.style.display = 'none';
    video.style.display = 'block';
    video.play();
}



function underlinenavitem() {
        let navitem = document.getElementsByClassName('nav_item');
        navitem.style.textDecoration = 'underline';

}
function pipi() {


let hoverItem = document.getElementsByClassName('hover_nav_item');
hoverItem.addEventListener('hover',underlinenavitem())
}