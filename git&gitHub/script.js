function empty(){
    $("#display-setup-1").slideUp();
    $("#display-setup-2").slideUp();
    $("#display-setup-3").slideUp();
    $("#display-setup-4").slideUp();
    $("#display-setup-5").slideUp();
    $("#display-setup-6").slideUp();
    $("#display-setup-7").slideUp();
    $("#display-setup-8").slideUp();
    $("#display-setup-9").slideUp();
    $("#display-setup-10").slideUp();
    $("#display-setup-11").slideUp();
}

$(document).ready(function () {
    $("#result").append(function(){
        $("#setup").click(function () { 
            empty();
            $("#display-setup-1").slideDown();
            $("#display-setup-2").slideDown();
        });

        $("#init").click(function () { 
            empty();
            $("#display-setup-3").slideDown();
        });

        $("#stage").click(function () { 
            empty();
            $("#display-setup-4").slideDown();
        });

        $("#barnch").click(function () { 
            empty();
            $("#display-setup-5").slideDown();
        });

        $("#inspect").click(function () { 
            empty();
            $("#display-setup-6").slideDown();
        });

        $("#update").click(function () { 
            empty();
            $("#display-setup-7").slideDown();
        });

        $("#tracking").click(function () { 
            empty();
            $("#display-setup-8").slideDown();
        });

        $("#history").click(function () { 
            empty();
            $("#display-setup-9").slideDown();
        });

        $("#ignoring").click(function () { 
            empty();
            $("#display-setup-10").slideDown();
        });

        $("#tem-commit").click(function () { 
            empty();
            $("#display-setup-11").slideDown();
        });

        




    });
});