$(document).ready( function(){
    var over = true;
    $("#galleributton, #dropdownmenu").mouseover(function() {
        if (over === true) {
            over = false;
            $("#dropdownmenu").slideDown("slow", function() {
                //over = false;
                console.log("test3");
            });
        }
    });




    $("#gallerimenu").mouseleave(function() {
        if (over === false) {
            setTimeout(function() {
                $("#dropdownmenu").slideUp("slow");
                over = true;
            },1000);
        }
    });
});