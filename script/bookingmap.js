var map = document.getElementById("map");
var cords = [];
var boxcords = [];
var boxnumberid = 1;
var boxes = {};
window.onload = function() {
    function generateseatrow(xstart, ystart, numberofseats) {
        for (var i = 0; i < numberofseats; i++) {               //5an är antalet platser
            boxes["box" + i] = map.getContext("2d");
            boxes["box" + i].beginPath();
            boxes["box" + i].fillStyle = "black";
            boxes["box" + i].rect(xstart, ystart, 30, 30);
            boxes["box" + i].lineWidth = 3;
            boxes["box" + i].strokeStyle = 'black';
            boxes["box" + i].font = "14pt Arial";
            boxes["box" + i].fillText(boxnumberid, xstart + 5, ystart + 20);
            boxes["box" + i].stroke();
            boxnumberid += 1;
            xstart += 55;
            ystart += 0;
        }
    }
    generateseatrow(10, 5, 5);
    console.log(boxes);
    boxes.onclick = function(){
    alert("box 2 clicked");
    }
    map.onclick = function(){
        
        
    }
    /*        for (var j = 0; j < i.length; j++) {
    map.getContext("2d");
    testbox.fillStyle = "green";
    testbox.fillRect(x, y, 50, 50);
    x +=55;
    y +=55;*/
};