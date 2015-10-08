var map = document.getElementById("map");
var boxnumberid = 1;
var boxes = {};
var canvasX = 0;
var canvasY = 0;
var clicked = false;
window.onload = function() {
    function generateseatrow(xstart, ystart, numberofseats) {
        for (var i = 0; i < numberofseats; i++) {
            var box = map.getContext("2d");
            boxes[boxnumberid] = [[xstart, ystart], [xstart + 30, ystart],[xstart + 30, ystart + 30], [xstart, ystart + 30], boxnumberid];
            box.beginPath();
            box.fillStyle = "black";
            box.rect(xstart, ystart, 30, 30);
            box.lineWidth = 2;
            box.strokeStyle = 'black';
            box.font = "14pt Arial";
            box.fillText(boxnumberid, xstart + 5, ystart + 20);
            box.stroke();
            boxnumberid += 1;
            xstart += 35;
            ystart += 0;
        }
    }
    generateseatrow(10, 30, 5);
    generateseatrow(40, 60, 5);
    generateseatrow(80, 90, 5);
    generateseatrow(100, 120, 5);
    generateseatrow(130, 150, 5);
    
    
    console.log(boxes);
    //here i check where the mouse is on the canvas and what seat is selected
    map.addEventListener("mousedown", function(e){
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        totalOffsetX += map.offsetLeft - map.scrollLeft;
        totalOffsetY += map.offsetTop - map.scrollTop;
        canvasX = e.pageX - totalOffsetX;
        canvasY = e.pageY - totalOffsetY;
        console.log(canvasX, ", ", canvasY);
        console.log(Object.keys(boxes).length);
        
        for(var i=1; i<Object.keys(boxes).length + 1; i++){
            if(clicked===false){
            if(canvasX > boxes[i][0][0] && canvasX < boxes[i][1][0] && canvasX < boxes[i][2][0] && canvasX > boxes[i][3][0] && canvasY > boxes[i][0][1] && canvasY > boxes[i][1][1] && canvasY < boxes[i][2][1] && canvasY < boxes[i][3][1]){
                alert("you clicked box number: " + boxes[i][4]);
                clicked = true;
            }
            else{
                console.log("you did not click on a box!");
            }
        }
        }
        clicked = false;
    });
    
    
    
    
    /*
    map.onclick = function(e){
        
        
        
        
        
    }*/
            /*var xclick = map.offsetx;
            var yclick = map.offsety;
            xclick -= map.offsetLeft;
            yclick -= map.offsetTop;
            alert("x:" + xclick + " y:" + yclick);
            console.log(e.offsetLeft)
            console.log(map.offsetTop)
            console.log(xclick)
            console.log(e.clientLeft)
        }*/
    /*        for (var j = 0; j < i.length; j++) {
    map.getContext("2d");
    testbox.fillStyle = "green";
    testbox.fillRect(x, y, 50, 50);
    x +=55;
    y +=55;*/
};