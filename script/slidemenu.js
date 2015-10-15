$(document).ready( function(){
    console.log($( document ).width())
    var over = true;
    $("#galleributton, #dropdownmenu").mouseover(function() {
        if ((over === true) && ($( document ).width() > 890)) {
            over = false;
            $("#dropdownmenu").slideDown("slow", function() {
            });
        }
    });




    $("#gallerimenu").mouseleave(function() {
        if ((over === false) && ($( document ).width() > 890)) {
            setTimeout(function() {
                $("#dropdownmenu").slideUp("slow");
                over = true;
            },200);
        }
    });
});