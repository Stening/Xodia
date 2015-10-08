var map = document.getElementById("map");
var cords = [];
var boxcords = [];
var boxnumberid = 1;
var boxes = {};
window.onload = function() {
    function generateseatrow(xstart, ystart, numberofseats) {
        for (var i = 0; i < numberofseats; i++) {
            var box = map.getContext("2d");
            boxes["box" + boxnumberid] = [xstart, ystart, xstart + 30, ystart + 30, boxnumberid];
            box.beginPath();
            box.fillStyle = "black";
            box.rect(xstart, ystart, 30, 30);
            box.lineWidth = 3;
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
    
    
    
    
    map.addEventListener("mousedown", function(e){
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        var canvasX = 0;
        var canvasY = 0;
        totalOffsetX += map.offsetLeft - map.scrollLeft;
        totalOffsetY += map.offsetTop - map.scrollTop;
        canvasX = e.pageX - totalOffsetX;
        canvasY = e.pageY - totalOffsetY;
        console.log(canvasX, ", ", canvasY);
        
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