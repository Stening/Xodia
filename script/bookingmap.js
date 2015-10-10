var map = document.getElementById("map");
var resetCookie = document.getElementById("resetstorage");
var updateSeats = document.getElementById("updateseats");
var boxnumberid = 1;
var boxes = {};
var canvasX = 0;
var canvasY = 0;
var clicked = false;
var seatInfoStorage;
var redBoxMade = false;


window.onload = function() {

    
    function appendToStorage(name, newData){
        console.log(localStorage.getItem(name));
        if(localStorage.getItem(name) !== null && localStorage.getItem(name) !== ""){
        var oldData = JSON.parse(localStorage.getItem(name));
        }
        else{
            oldData = [];
        }
        oldData.push(newData);
        localStorage.setItem(name, JSON.stringify(oldData));
        
    }
    

    function generateseatrow(xstart, ystart, downorright, numberofseats) {
        for (var i = 0; i < numberofseats; i++) {
            redBoxMade = false;
            var box = map.getContext("2d");
            boxes[boxnumberid] = [
                [xstart, ystart],
                [xstart + 30, ystart],
                [xstart + 30, ystart + 30],
                [xstart, ystart + 30], boxnumberid
            ];
            if (localStorage.getItem(seatInfoStorage) !== null) {
                for (var j = 0; j < localStorage.getItem(seatInfoStorage).length; j++) {
                    if (redBoxMade === false) {
                        if (JSON.parse(localStorage.getItem(seatInfoStorage))[j] == boxnumberid) {
                            box.beginPath();
                            box.fillStyle = "black";
                            box.rect(xstart, ystart, 30, 30);
                            box.lineWidth = 2;
                            box.fillStyle = "red";
                            box.fillRect(xstart, ystart, 30, 30);
                            box.fillStyle = "black";
                            box.font = "14pt Arial";
                            box.fillText(boxnumberid, xstart + 5, ystart + 20);
                            box.strokeStyle = 'black';
                            box.stroke();
                            boxnumberid += 1;
                            redBoxMade = true;
                        }
                    }
                }
            }
            if (redBoxMade === false) {
                box.beginPath();
                box.fillStyle = "black";
                box.rect(xstart, ystart, 30, 30);
                box.lineWidth = 2;
                box.fillStyle = "green";
                box.fillRect(xstart, ystart, 30, 30);
                box.fillStyle = "black";
                box.font = "14pt Arial";
                box.fillText(boxnumberid, xstart + 5, ystart + 20);
                box.strokeStyle = 'black';
                box.stroke();
                boxnumberid += 1;
            }
            if (downorright === "right") {
                xstart += 35;
                ystart += 0;
            }
            else if (downorright === "down") {
                xstart += 0;
                ystart += 35;
            }
        }
    }



    function generateAll() {
        generateseatrow(10, 30, "down", 5);
        generateseatrow(45, 65, "right", 5);
        generateseatrow(45, 100, "right", 5);
    }
    updateSeats.onclick = function() {
        boxnumberid = 1;
        generateAll();
    };
    generateAll();


    resetCookie.onclick = function() {
        localStorage.setItem(seatInfoStorage, []);

    };

    console.log(boxes);
    //here i check where the mouse is on the canvas and what seat is selected
    map.addEventListener("mousedown", function(e) {
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        totalOffsetX += map.offsetLeft - map.scrollLeft;
        totalOffsetY += map.offsetTop - map.scrollTop;
        canvasX = e.pageX - totalOffsetX;
        canvasY = e.pageY - totalOffsetY;
        console.log(canvasX, ", ", canvasY);
        console.log(Object.keys(boxes).length);

        for (var i = 1; i < Object.keys(boxes).length + 1; i++) {
            if (clicked === false) {
                if (canvasX > boxes[i][0][0] && canvasX < boxes[i][1][0] && canvasX < boxes[i][2][0] && canvasX > boxes[i][3][0] && canvasY > boxes[i][0][1] && canvasY > boxes[i][1][1] && canvasY < boxes[i][2][1] && canvasY < boxes[i][3][1]) {
                    console.log("you clicked box number: " + boxes[i][4]);
                    appendToStorage(seatInfoStorage, boxes[i][4]);
                    console.log(localStorage.getItem(seatInfoStorage));
                    var tempBox = map.getContext("2d");
                    tempBox.beginPath();
                    tempBox.fillStyle = "black";
                    tempBox.rect(boxes[i][0][0], boxes[i][0][1], 30, 30);
                    tempBox.lineWidth = 2;
                    tempBox.fillStyle = "red";
                    tempBox.fillRect(boxes[i][0][0], boxes[i][0][1], 30, 30);
                    tempBox.fillStyle = "black";
                    tempBox.font = "14pt Arial";
                    tempBox.fillText(boxes[i][4], boxes[i][0][0] + 5, boxes[i][0][1] + 20);
                    tempBox.strokeStyle = 'black';
                    tempBox.stroke();
                    clicked = true;
                }
                else {
                    console.log("you did not click on a box!");
                }
            }
        }
        clicked = false;
    });
};
