$(document).ready(function() {
    var emailCheck = /^[A-Öa-ö0-9._%+-]+@[A-Za-z-0-9.-]+\.[A-Za-z]{2,6}$/;
    var ageCheck = /^[0-9]{1,3}$/;
    var nameCheck = /^[a-öA-Ö]{1,40}$/;
    var lastCheck = /^[a-öA-Ö]+$/;


    $("#ageBox").blur(function() {
        if (((ageCheck.test($("#ageBox").val())) === true)) {
            $("#ageBox").css({"border":"2px solid green"});
        }
        else {
            $("#ageBox").css({"border":"2px solid red"});
            /*$("#fontBildAge").append("<i id='postnumbertriangle' class='fa fa-exclamation-triangle'></i>")*/
        }
    });
    $("#emailBox").blur(function() {
        if (((emailCheck.test($("#emailBox").val())) === true)) {
            $("#emailBox").css({"border":"2px solid green"});
        }
        else {
            $("#emailBox").css({"border":"2px solid red"});
        }
    });
    $("#firstNameBox").blur(function() {
        if (((nameCheck.test($("#firstNameBox").val())) === true)) {
            $("#firstNameBox").css({"border":"2px solid green"});
        }
        else {
            $("#firstNameBox").css({"border":"2px solid red"});
        }
    });
    $("#lastNameBox").blur(function() {
        if (((lastCheck.test($("#lastNameBox").val())) === true)) {
            $("#lastNameBox").css({"border":"2px solid green"});
        }
        else {
            $("#lastNameBox").css({"border":"2px solid red"});
        }
    });
});

