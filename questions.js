$(document).ready(function(){
    $("#vragen").find(".uitklap-trigger").on("click",function(){
        $(".antwoord").slideUp();
        $(this).next(".antwoord").slideDown();
    });
});