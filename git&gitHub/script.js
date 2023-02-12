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

    fade();
};

function fade(){
    $("#ser-list").fadeOut();
    $("#check-list").fadeOut();
    $("#init-list").fadeOut();
    $("#stage-list").fadeOut();
    $("#branch-list").fadeOut();
    $("#inspect-list").fadeOut();
    $("#update-list").fadeOut();
    $("#tracking-list").fadeOut();
    $("#rewrite-list").fadeOut();
    $("#ignore-list").fadeOut();
    $("#temporary-list").fadeOut();
};

$(document).ready(function () {

                        // display-buttons show and hide Option jQuery

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



                    // display-subButtons show and hide Option jQuery

                    $("#btn-set").click(function () {
                        $("#check-list").hide();
                        $("#set-list").fadeToggle();
                    });
                    
                    $("#btn-check").click(function () {
                        $("#set-list").hide();
                        $("#check-list").fadeToggle();
                    });

                    $("#btn-init").click(function () { 
                        $("#init-list").fadeToggle();
                    });

                    $("#btn-stage").click(function () { 
                        $("#stage-list").fadeToggle();
                    });

                    $("#btn-branch").click(function () { 
                        $("#branch-list").fadeToggle();
                    });

                    $("#btn-inspect").click(function () { 
                        $("#inspect-list").fadeToggle();
                    });

                    $("#btn-update").click(function () { 
                        $("#update-list").fadeToggle();
                    });

                    $("#btn-tracking").click(function () { 
                        $("#tracking-list").fadeToggle();
                    });

                    $("#btn-rewrite").click(function () { 
                        $("#rewrite-list").fadeToggle();
                    });

                    $("#btn-ignore").click(function () { 
                        $("#ignore-list").fadeToggle();
                    });

                    $("#btn-temporary").click(function () { 
                        $("#temporary-list").fadeToggle();
                    });


    });
});