function empty() {
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

function fade() {
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

    hideContent();
};

function hideContent() {
    $("#set-name-value").hide();
    $("#set-email-value").hide();
    $("#set-ui-color-value").hide();

    $("#check-name-value").hide();
    $("#check-email-value").hide();

    $("#init-value").hide();
    $("#clone-value").hide();

    $("#status-value").hide();
    $("#add-value").hide();
    $("#reset-value").hide();
    $("#diff-value").hide();
    $("#diff-stage-value").hide();
    $("#commit-value").hide();

    $("#branch-value").hide();
    $("#create-branch-value").hide();
    $("#checkout-value").hide();
    $("#merge-value").hide();
    $("#log-value").hide();

    $("#git-log-value").hide();
    $("#log-branch-value").hide();
    $("#log-follow-value").hide();
    $("#diff-branch-value").hide();
    $("#show-value").hide();

    $("#remote-value").hide();
    $("#fetch-value").hide();
    $("#merge-alias-branch-value").hide();
    $("#push-branch-value").hide();
    $("#pull-value").hide();

    $("#rm-value").hide();
    $("#mv-value").hide();
    $("#log-stat-value").hide();

    $("#rebase-value").hide();
    $("#reset-hard-value").hide();

    $("#ignoring-value").hide();

    $("#stash-value").hide();
    $("#stash-list-value").hide();
    $("#stash-pop-value").hide();
    $("#stash-drop-value").hide();

}

$(document).ready(function () {

    // display-buttons show and hide Option jQuery

    $("#result").append(function () {
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



        // print syntax for btn event

        // set syntax
        $("#set-name").click(function () {
            hideContent();
            $("#set-name-value").show();
        });

        $("#set-email").click(function () {
            hideContent();
            $("#set-email-value").show();
        });


        $("#set-ui-color").click(function () {
            hideContent();
            $("#set-ui-color-value").show();
        });

        // check syntax
        $("#check-name").click(function () {
            hideContent();
            $("#check-name-value").show();
        });

        $("#check-email").click(function () {
            hideContent();
            $("#check-email-value").show();
        });


        // init syntax
        $("#git-init").click(function () {
            hideContent();
            $("#init-value").show();
        });

        $("#git-clone").click(function () {
            hideContent();
            $("#clone-value").show();
        });


        // stage syntax
        $("#git-status").click(function () {
            hideContent();
            $("#status-value").show();
        });

        $("#git-addFile").click(function () {
            hideContent();
            $("#add-value").show();
        });

        $("#git-resetFile").click(function () {
            hideContent();
            $("#reset-value").show();
        });

        $("#git-diffChange").click(function () {
            hideContent();
            $("#diff-value").show();
        });

        $("#git-diffStage").click(function () {
            hideContent();
            $("#diff-stage-value").show();
        });

        $("#git-commit").click(function () {
            hideContent();
            $("#commit-value").show();
        });

        // branch syntax 
        $("#git-activeBranch").click(function () {
            hideContent();
            $("#branch-value").show();
        });

        $("#git-createBranch").click(function () {
            hideContent();
            $("#create-branch-value").show();
        });

        $("#git-switchBranch").click(function () {
            hideContent();
            $("#checkout-value").show();
        });

        $("#git-mergeBranch").click(function () {
            hideContent();
            $("#merge-value").show();
        });

        $("#git-HistoryBranch").click(function () {
            hideContent();
            $("#log-value").show();
        });

        // inspect syntax
        $("#git-log").click(function () {
            hideContent();
            $("#git-log-value").show();
        });

        $("#git-commitBranch").click(function () {
            hideContent();
            $("#log-branch-value").show();
        });
        
        $("#git-rename").click(function () {
            hideContent();
            $("#log-follow-value").show();
        });

        $("#git-diffBranch").click(function () {
            hideContent();
            $("#diff-branch-value").show();
        });

        $("#git-showObject").click(function () {
            hideContent();
            $("#show-value").show();
        });

        // update syntax 
        $("#git-remoteAdd").click(function () {
            hideContent();
            $("#remote-value").show();
        });

        $("#git-fetch").click(function () {
            hideContent();
            $("#fetch-value").show();
        });

        $("#git-mergeBranchUp").click(function () {
            hideContent();
            $("#merge-alias-branch-value").show();
        });

        $("#git-pushBranch").click(function () {
            hideContent();
            $("#push-branch-value").show();
        });

        $("#git-pullBranch").click(function () {
            hideContent();
            $("#pull-value").show();
        });


        // tracking Syntax 
        $("#git-removal").click(function () {
            hideContent();
            $("#rm-value").show();
        });

        $("#git-moveStage").click(function () {
            hideContent();
            $("#mv-value").show();
        });

        $("#git-movePath").click(function () {
            hideContent();
            $("#log-stat-value").show();
        });

        // rewrite syntax 
        $("#git-rebase").click(function () {
            hideContent();
            $("#rebase-value").show();
        });

        $("#git-clrStage").click(function () {
            hideContent();
            $("#reset-hard-value").show();
        });

        // ignore syntax 
        $("#git-ignore").click(function () {
            hideContent();
            $("#ignoring-value").show();
        });

        // tracking syntax 
        $("#git-stash").click(function () {
            hideContent();
            $("#stash-value").show();
        });

        $("#git-stashList").click(function () {
            hideContent();
            $("#stash-list-value").show();
        });

        $("#git-stashPop").click(function () {
            hideContent();
            $("#stash-pop-value").show();
        });

        $("#git-stashDrop").click(function () {
            hideContent();
            $("#stash-drop-value").show();
        });

    });

    
});