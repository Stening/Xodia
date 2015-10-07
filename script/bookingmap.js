var map = document.getElementById("map");
var cords = [];
var boxcords = [];
window.onload = function() {
    var x = 0;
    var y = 0;
    for (var i = 1; i < 5; i++) {//3an är antalet platser
        var box = map.getContext("2d");
        box.fillStyle = "green";
        box.fillRect(x, y, 50, 50);
        
        x += 55;
        y += 55;
        //place box here
    }
    /*        for (var j = 0; j < i.length; j++) {
    map.getContext("2d");
    testbox.fillStyle = "green";
    testbox.fillRect(x, y, 50, 50);
    x +=55;
    y +=55;*/
};