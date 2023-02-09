// console.log("hello user  welcome to the JQury")


$(document).ready(function () {


    
    $("#setup").click(function () {
        console.log("hlo function");
        $("#display-setup-1").slideToggle();
        $("#display-setup-2").slideToggle();
    });

    $("#btn-set").click(function () {
        $("#set-list").show();
        $("#check-list").hide();
    });

    $("#btn-check").click(function () {
        $("#set-list").hide();
        $("#check-list").show();
    });

    

    $("#set-name").click(function () {
        $("#set-name-value").show();
        $("#set-email-value").hide();
        $("#set-ui-color-value").hide();
        $("#check-name-content").hide();
        $("#check-email-content").hide();


    });

    $("#set-email").click(function () {
        $("#set-email-value").show();
        $("#set-ui-color-value").hide();
        $("#set-name-value").hide();
        $("#check-name-content").hide();
        $("#check-email-content").hide();
    });

    $("#set-ui-color").click(function () {
        $("#set-ui-color-value").show();
        $("#set-email-value").hide();
        $("#set-name-value").hide();
        $("#check-name-content").hide();
        $("#check-email-content").hide();
    });


    $("#check-name").click(function () {
        $("#check-name-content").show();
        $("#check-email-content").hide();
        $("#set-ui-color-value").hide();
        $("#set-email-value").hide();
        $("#set-name-value").hide();
    });

    $("#check-email").click(function () {
        $("#check-name-content").hide();
        $("#check-email-content").show();
        $("#set-ui-color-value").hide();
        $("#set-email-value").hide();
        $("#set-name-value").hide();
    });




    // init content start

    $("#init").click(function () {
        
        $("#display-setup-3").slideToggle();
    });

    $("#btn-init").click(function () {
        $("#init-list").toggle();
    });

    $("#git-init").click(function () {
        $("#init-value").show();
        $("#clone-value").hide();
    });

    $("#git-clone").click(function () {
        $("#init-value").hide();
        $("#clone-value").show();
    });
});



