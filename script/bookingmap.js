$(document).ready( function(){
var map = document.getElementById("map");
var resetStorage = document.getElementById("resetstorage");
var updateSeats = document.getElementById("updateseats");
var boxnumberid = 1;
var boxes = {};
var canvasX = 0;
var canvasY = 0;
var clicked = false;
var seatInfoStorage;
var redBoxMade = false;
var takenToggle = false;
/*declaration of variables*/





/*append seat info into localstorage*/

/*this function checks if there is anything stored under the keyword of the input parameter*/
/*if it is, then it gets it and stores it in a temp variable, then adds the new data from the second input parameter, then stores it all back in localstorage under the chosen keyword*/
/*if there is nothing in the keyword, then it just declares it as an empty array and pushes the new data into it and stores it under the chosen keyword*/
    function appendToStorage(name, newData) {
        console.log(localStorage.getItem(name));
        if (localStorage.getItem(name) !== null && localStorage.getItem(name) !== "") {
            var oldData = JSON.parse(localStorage.getItem(name));
        }
        else {
            var oldData = [];
        }
        oldData.push(newData);
        localStorage.setItem(name, JSON.stringify(oldData));
    }
    
    
/*append seat info into localstorage*/
    
    
    




/*check if seat is taken*/
    
    /*this function first checks if there is something in the keyword "seatInfoStorage" if there is, it goes through it and checks if it matches the input parameter and returns thrue or false */
    /*if the SeatInfoStorage does not exist or is an empty string (localstorage can only store strings) the function simply returns false because then no seats have been taken*/
    function isSeatTaken(seatnumber) {
        console.log(localStorage.getItem(seatInfoStorage));
        if (localStorage.getItem(seatInfoStorage) !== null && localStorage.getItem(seatInfoStorage) !== "") {
            for (var i = 0; i < JSON.parse(localStorage.getItem(seatInfoStorage)).length; i++) {
                console.log(JSON.parse(localStorage.getItem(seatInfoStorage)).length);
                if (JSON.parse(localStorage.getItem(seatInfoStorage))[i] == seatnumber) {
                    return true;
                    
                }
            }
            return false;
        }
        else{
            return false;
        }
    }
/*check if seat is taken*/
    
    
    
    
    




/*generate 1 seatrow*/

/*this function uses the object "boxes" to store all the 8 coordinates of the drawn boxes (2 for every corner of a box)*/
/*as it generates boxes it also checks if the seat it is about to create is taken. if so, it generates a box of a different color*/
/*the input parameters is pretty self-explanatory, you input the x and y start of the row, if the row goes right or down, and the total number of seats*/
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
                            box.fillStyle = "orange";
                            box.fillRect(xstart, ystart, 30, 30);
                            box.fillStyle = "black";
                            box.font = "12pt Arial";
                            box.fillText(boxnumberid, xstart + 2, ystart + 20);
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
                box.font = "12pt Arial";
                box.fillText(boxnumberid, xstart + 2, ystart + 20);
                box.strokeStyle = 'black';
                box.stroke();
                boxnumberid += 1;
            }
            if (downorright === "right") {
                xstart += 30;
                ystart += 0;
            }
            else if (downorright === "down") {
                xstart += 0;
                ystart += 30;
            }
        }
    }
/*generate 1 seatrow*/









/*generate all the rows!*/

/*here i "draw" the whole thing manually.*/
/*i just call the function as many times as i need seat rows, this system may be a bit clunky but i found it really easy to use*/
    function generateAll() {
        generateseatrow(150, 130, "right", 5);
        generateseatrow(150, 160, "right", 5);
        generateseatrow(200, 250, "right", 5);
        generateseatrow(200, 300, "right", 6);
        generateseatrow(200, 330, "right", 6);
        generateseatrow(180, 390, "right", 7);
        generateseatrow(180, 420, "right", 7);
        generateseatrow(70, 300, "down", 6);
        generateseatrow(100, 300, "down", 6);
        generateseatrow(180, 500, "right", 9);
        generateseatrow(180, 530, "right", 9);
        generateseatrow(180, 580, "right", 12);
        generateseatrow(180, 610, "right", 12);
        generateseatrow(565, 500, "right", 12);
        generateseatrow(900, 550, "down", 3);
        generateseatrow(590, 570, "right", 8);
        generateseatrow(590, 600, "right", 8);
    }
    
    /*here i call the function at least once every time the document loads*/
    generateAll();

/*generate all the rows!*/









/*update seats button click*/

    /*this function resets the seatnumber counter and calls the function that generates all the seats*/
    updateSeats.onclick = function() {
        boxnumberid = 1;
        generateAll();
    };
/*update seats button click*/








/*reset storage button click*/

/*when you click on the button "rensa valda platser" the function sets the keyword "seatInfo" to an empty array, then resets the seat number counter and then regenerates all the seats*/
    resetStorage.onclick = function() {
        localStorage.setItem(seatInfoStorage, []);
        boxnumberid = 1;
        generateAll();
    };
/*reset storage button click*/
    
    
    
    
    
    
    
    
    /*click on canvas function*/
    
    /*this function checks where on the canvas the user clicks*/
    /*every time the user clicks on the canvas the function goes through the object wich all the coordinates are stored, and checks if the pointer is within any of them*/
    /*if it is it checks if the clicked seat is taken or not, if it is not then an orange box is drawn at the spot of the clicked green box, replacing it*/
    /*the id of the clicked box is also appended into the localstorage so it and other functions know that it is now taken*/
    /*the funcion only draws a new box and appends to localstorage if the seat is not taken*/
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
                    if (isSeatTaken(boxes[i][4]) === false) {
                        appendToStorage(seatInfoStorage, boxes[i][4]);
                        var tempBox = map.getContext("2d");
                        tempBox.beginPath();
                        tempBox.fillStyle = "black";
                        tempBox.rect(boxes[i][0][0], boxes[i][0][1], 30, 30);
                        tempBox.lineWidth = 2;
                        tempBox.fillStyle = "orange";
                        tempBox.fillRect(boxes[i][0][0], boxes[i][0][1], 30, 30);
                        tempBox.fillStyle = "black";
                        tempBox.font = "12pt Arial";
                        tempBox.fillText(boxes[i][4], boxes[i][0][0] + 2, boxes[i][0][1] + 20);
                        tempBox.strokeStyle = 'black';
                        tempBox.stroke();
                    }
                    else {
                        console.log("Seat number " + boxes[i][4] + " is already taken");
                    }
                    console.log("you clicked box number: " + boxes[i][4]);
                    console.log(localStorage.getItem(seatInfoStorage));
                    clicked = true;
                }
                else {
                    console.log("testing!");
                }
            }
        }
        clicked = false;
    });
/*click on canvas function*/




});
