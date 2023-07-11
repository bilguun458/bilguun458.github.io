$(function () {
    "use strict";
    let state = "idle";
    const lose = () => {
        state = "lose";
        $('.boundary').addClass("red");
        $('#status').prepend("You lose! ");
    };
    const win = () => {
        state = "win";
        $('#status').prepend("You win! ");
    };
    const start = () => {
        state = "playing";
        $('.boundary').removeClass("red");
        $('#status').html("Click the \"S\" to begin.");
    };
    $(".boundary").mouseover(() => {
        if (state == "playing") lose();
    });
    $("#maze").mouseleave(() => {
        if (state == "playing") lose();
    });
    $("#end").mouseover(() => {
        if (state == "playing") win();
    });

    $("#start").click(start);
});