$(document).ready(function() {
   
   /*Variablar som används i funktionen*/
   
    var emailCheck = /^[A-Öa-ö0-9._%+-]+@[A-Za-z-0-9.-]+\.[A-Za-z]{2,6}$/;
    var ageCheck = /^[0-9]{1,3}$/;
    var nameCheck = /^[a-öA-Ö]{1,40}$/;
    var lastCheck = /^[a-öA-Ö]+$/;
    var emailApproved = false;
    var ageApproved = false;
    var nameApproved = false;
    var lastNameApproved = false;
    
    /*Variablar som används i funktionen*/
    
    
    
    
    /*Kollar igenom alla input fält om dom är true/false*/

    /*När inputfältet tapar focus, så testas det jag skrivit in genom de olika RegExp:en och ser om det som kommer igenom är Sant eller Falskt*/
    /*Om det blir sant så kommer inputfältet att ges en grön border som är 4px stor*/
    /*Om det inte blir true,ge den en röd border som är 4px stor*/
    
    $("#ageBox").blur(function() {
        if (((ageCheck.test($("#ageBox").val())) === true)) {
            $("#ageBox").css({
                "border": "4px solid green"
            });
            ageApproved = true;
        }
        else {
            $("#ageBox").css({
                "border": "4px solid red"
            });
            ageApproved = false;
        }
    });
    $("#emailBox").blur(function() {
        if (((emailCheck.test($("#emailBox").val())) === true)) {
            $("#emailBox").css({
                "border": "4px solid green"
            });
            emailApproved = true;
        }
        else {
            $("#emailBox").css({
                "border": "4px solid red"
            });
            emailApproved = false;
        }
    });
    /**/
    $("#firstNameBox").blur(function() {
        if (((nameCheck.test($("#firstNameBox").val())) === true)) {
            $("#firstNameBox").css({
                "border": "4px solid green"
            });
            nameApproved = true;
        }
        else {
            $("#firstNameBox").css({
                "border": "4px solid red"
            });
            nameApproved = false;
        }
    });
    /**/
    $("#lastNameBox").blur(function() {
        if (((lastCheck.test($("#lastNameBox").val())) === true)) {
            $("#lastNameBox").css({
                "border": "4px solid green"
            });

            lastNameApproved = true;
        }
        else {
            $("#lastNameBox").css({
                "border": "4px solid red"
            });

            lastNameApproved = false;
        }
    });

    /*Kollar igenom alla rader input fält om dom är true/false*/
    






    
    /*När man klickar på knappen med #continuebutton så kollar den om alla fälten är true,
      om dom är de så kommer den att skriva ut display:block i cssn så att popup rutan kommer visas.*/
    /**/

    $("#continuebutton").click(function() {
        if (lastNameApproved === true && nameApproved === true && emailApproved === true && ageApproved === true) {
            $("#confirmMessage").css({
                "display": "block"
            });
            $("#emailForm").empty();
            $("#ageForm").empty();
            $("#nameForm").empty();
            $("#lastNameForm").empty();


            $("#emailForm").append($("#emailBox").val());
            $("#ageForm").append($("#ageBox").val());
            $("#nameForm").append($("#firstNameBox").val());
            $("#lastNameForm").append($("#lastNameBox").val());
        }
    });
    $("#tillbaka").click(function() {
        $("#confirmMessage").css({
            "display": "none"
        });
    });
    $("#betala").click(function() {
        $("#popupForm").submit()({});
    });
});
