

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
    document.getElementById("recepten_review_titel").style.textDecoration = "underline";
    document.getElementById("recepten_ingredienten_titel").style.textDecoration = "none";
}
let ingredienten = document.getElementById("recepten_ingredienten_titel");
ingredienten.addEventListener("click", changeToIngredienten);
function changeToIngredienten(){
    document.getElementById("recepten_ingredienten_lijst").style.display = "block";
    document.getElementById("recepten_review_inhoud").style.display = "none";
    document.getElementById("recepten_review_titel").style.textDecoration = "none";
    document.getElementById("recepten_ingredienten_titel").style.textDecoration = "underline";
}



let pastaTomaat = document.getElementById("item_pasta_tomaat");
pastaTomaat.addEventListener('click', functie1)
function functie1(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_tomaat.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta Tomaat</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Veggie</p>";
    document.getElementById("icon_allergie2").style.display = "block";
    document.getElementById("icon_allergie2").src = "assets/recepten_lactose.png";
    document.getElementById("allergie2").style.display = "block";
    document.getElementById("allergie2").innerHTML = "<p>Lactose</p>";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta spaghetti</p>" + "<p>Busta vegan bolognese</p>" + "<p>Geraspte mozarella</p>" + "<p>Kruiding naar keuze</p>";
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,3</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta tomaat\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Heerlijke pasta en snel klaar! </br> Heerlijk om na het werk thuis te komen en na 10 minuten al klaar te zijn met koken. Extra pluspunt: de kinderen vinden het ook heel lekker!</p>" + "<p>~ Janne Doe</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta vegan bolognesesaus in een ruime pot en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Kruid de saus naar keuze als deze begint te koken.</br>(Aanbevolen: spaghettimix, paprika, basilicum en look.)</li>" + "<li>Voeg de pasta toe aan de kokende saus.</li>" + "<li>Laat gedurende 5 minuten doorkoken.</li>" + "<li>Serveer met de geraspte mozzarella en geniet!</li>";
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
    document.getElementById("recepten_review_score").innerHTML= "<h1>3,8</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3  class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta carbonara\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Ik eet al 10 jaar vegetarisch dus moest even het recept aanpassen, maar de saus was super lekker!</br> Ik zou het iedereen aanraden.</p>" + "<p>~ Tom Aaten</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta carbonarasaus in een ruime pot en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Kruid de saus naar keuze als deze begint te koken.</br>(Aanbevolen: peper, zout en muskaatnoot.)</li>" + "<li>Bak de spekjes in een tweede pan tot ze krokant zijn</li>" + "<li>Voeg de pasta toe aan de saus als die licht aan het koken is.</li>" + "<li>Laat gedurende 5 minuten doorkoken.</li>" + "<li>Voeg ook de spekjes toe aan de saus als ze krokant zijn. Roer ze door de saus</li>" + "<li>Serveer en geniet!</li> </ol>";
}

let pastaBuffalo = document.getElementById("item_pasta_buffalo");
pastaBuffalo.addEventListener('click', functie3)
function functie3(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_buffalo.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta Buffalo</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Veggie</p>";
    document.getElementById("icon_allergie2").src = "assets/recepten_lactose.png";
    document.getElementById("icon_allergie2").style.display="block";
    document.getElementById("allergie2").innerHTML="<p>Lactose</p>";
    document.getElementById("allergie2").style.display="block";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta spaghetti</p>" + "<p>Busta vegan bolognese</p>" + "<p>verse kerstomaten</p>" + "<p>Verse buffelmozzarella</p>" + "<p>Kruiding naar keuze</p>";
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,8</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta buffalo\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>De eerste keer dat ik dit maakte, was ik direct verkocht! Super lekkere maaltijd en snel klaar.</br> Pasta buffalo staat nu wekelijks op tafel bij ons.</p>" + "<p>~ Peter Selie</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta vegan bolognese in een ruime pot en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Kruid de saus naar keuze als deze begint te koken.</br>(Aanbevolen: spaghttimix; basilicum, paprika.)</li>" + "<li>Was de kerstomaten in water en snij deze daarna in 2.</li>" + "<li>Voeg de pasta toe aan de saus als die licht aan het koken is.</li>" + "<li>Laat de pasta gedurende 5 minuten doorkoken.</li>" + "<li>Breek de Mozzarella in stukken.</li>" + "<li>Als de saus klaar is, haal deze dan van de hittebron en voeg de tomaten stukjes eraan toe. Roer de tomaten onder de saus.</li>" + "<li>Schep de pasta met saus en tomaten op een bord en strooi de stukken mozzarella erover heen.</li>" + "<li>Serveer en geniet!</li> </ol>";

}

let pastaNapolitana = document.getElementById("item_pasta_napolitana");
pastaNapolitana.addEventListener('click', functie4)
function functie4(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_napolitana.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta napolitana</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Veggie</p>";
    document.getElementById("icon_allergie2").style.display = "none";
    document.getElementById("allergie2").style.display = "none";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta farfalle</p>" + "<p>Busta napolitana saus</p>" + "<p>Geraspte kaas</p>" + "<p>Verse basilicum</p>";
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,4</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta napolitana\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Ik ben een echte fan van Busta. De pasta is super snel klaar en hun recepten zijn super makkelijk!</p>" + "<p>~ Kim Kommer</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta napolitana saus in een ruime pot en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Voeg de verse bladen basilicum toe aan de saus als deze begint te koken.</li>" + "<li>Voeg de pasta toe aan de saus als die licht aan het koken is.</li>" + "<li>Laat de pasta gedurende 5 minuten doorkoken.</li>" + "<li>Serveer met geraspte kaas en geniet!</li> </ol>";

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
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta penne</p>" + "<p>Busta vier kazen saus</p>" + "<p>Hespenblokjes</p>" + "<p>Geraspte kaas</p>" + "<p>Peper, zout en muskaatnoot</p>";
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,7</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta vier kazen\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Heerlijk om na een drukke werkdag thuis te kunnen komen en niet meer dan 10 minuten te moeten besteden aan het klaarmaken van deze maaltijd. Mijn vriend en ik zijn verkocht!</p>" + "<p>~ Bas Silicum</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta vier kazen saus in een ruime pot en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Voeg ook hespenblokjes toe aan de saus.</li>" + "<li>Voeg ook de pasta toe aan de saus als die licht aan het koken is.</li>" + "<li>Kruid met peper, zout en muskaatnoot.</li>" + "<li>Laat de pasta gedurende 5 minuten doorkoken.</li>" + "<li>Serveer met geraspte kaas en geniet!</li> </ol>";

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
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta tagliatelle</p>" + "<p>Busta pesto</p>" + "<p>Spekjes</p>" + "<p>Champignons</p>" + "<p>Kruiding naar keuze</p>";
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,5</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta spek en shrooms\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Ik ben normaal geen fan van champignons maar voor dit gerecht maak ik graag een uitzondering.</br> Super lekker!</p>" + "<p>~ Lizzy Briers</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Breng een pot met water aan de kook. Kruid het water met een blokje bouillon of met zout.</li>" + "Kuis de champignons en snij deze in grove stukken." + "<li>Bak de spekjes en champignons in een pan tot de spekjes krokant zijn.</li>" + "<li>Kook de Busta tagliatelle gedurende 30 seconden in het water. Giet daarna af.</li>" + "<li>Pak een eetlepel pesto en roer deze onder de warme pasta. Voeg naar eigen smaak meer pesto toe.</li>" + "<li>Voeg nu ook de champignons en de spekjes toe aan de pasta en roer.</li>" + "<li>Kruid af met kruiden naar keuze en serveer.</li> </ol>";

}

let pastaTomaatMozarella = document.getElementById("item_pasta_tomaatmozarella");
pastaTomaatMozarella.addEventListener('click', functie7)
function functie7(){
    document.getElementById("recepten_bord").src = "assets/recepten_pasta_tomaat-mozarella.png";
    document.getElementById("recepten_titel").innerHTML="<h1>Pasta tomaat mozzarella</h1>";
    document.getElementById("icon_allergie1").src = "assets/recepten_veggie.png";
    document.getElementById("allergie1").innerHTML="<p>Veggie</p>";
    document.getElementById("icon_allergie2").src = "assets/recepten_lactose.png";
    document.getElementById("icon_allergie2").style.display = "block";
    document.getElementById("allergie2").innerHTML = "<p>Lactose</p>";
    document.getElementById("allergie2").style.display = "block";
    document.getElementById("recepten_ingredienten_lijst_items").innerHTML = "<p>Busta tagliatelle</p>" + "<p>Busta napolitana saus</p>" + "<p>Verse tomaten</p>" + "<p>Verse mozzarella</p>" + "<p>Kruiding naar keuze</p>";
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,1</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta tomaat mozarella\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Het is al even lekker als dat het eruit ziet. Heel lekker en makkelijk te bereiden.</p>" + "<p>~ Miguel Celen</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta napolitana saus in een ruime pot die ook in de oven mag en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Was de tomaten en snij deze in grove stukken.</li>" + "<li>Breek de mozzarella in grove stukken.</li>" + "<li>Voeg de pasta toe aan de saus als die licht aan het koken is. Kruid de saus ook met kruiden naar keuze.</br>(Aanbevolen: spaghettimix, basilicum, paprika.)</li>" + "<li>Haal na 3 minuten de pot met pasta en saus van de hittebron.</li>" + "<li>Roer de tomaten door de saus en stooi de mozarella erboven op. </li>" + "<li>Zet de pot 5 minuten in een voorverwarmde oven op 180°</li></ol>";

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
    document.getElementById("recepten_review_score").innerHTML= "<h1>4,0</h1>";
    document.getElementById("recepten_review_knoppen").innerHTML= "<h3 class='knop'><a href='#'>Bekijk alle</a></h3>" + "<h3 class='knop'><a href=\"mailto:chayenne.leys@student.pxl.be?subject=Review pasta arrabiata\">Schrijf review</a></h3>";
    document.getElementById("recepten_review_getuigenis").innerHTML= "<p>Ik houd van pikant! Deze pasta arrabiata is echt perfect voor mij! Ik ben geen keukenprincess maar ik heb geen probleem om dit klaar te maken.</p>" + "<p>~ Shania Stassen</p>";
    document.getElementById("recepten_bereiding_stappen").innerHTML= "<ol> <li>Doe de Busta arrabiata saus in een ruime pot en warm de saus op tot hij lichtjes kookt. Roer af en toe in de pot om aanbranden te voorkomen.</li>" + "<li>Kruid de saus met kruiding naar keuze.</br>(Aanbevolen: spaghettimix, basilicum en paprika)</li>" + "<li>Voeg de penne toe aan de saus wanneer die begint te koken.</li>" + "<li>Laat de penne 5 minuten doorkoken </li>" + "<li>Serveer met geraspte kaas en geniet!</li> </ol>";

}