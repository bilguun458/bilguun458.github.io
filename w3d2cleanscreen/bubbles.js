function drawCicrle() {
    $('body').append($("<div>", {
        "class": "circle",
        "css": {
            "width": parseInt($("#size")[0].value) + 'px',
            "height": parseInt($("#size")[0].value) + "px",
            "border-radius": "50%",
            "position": "absolute",
            "top": (Math.random() * ($(document).height() - 50)) + "px",
            "left": (Math.random() * ($(document).width() - 50)) + "px",
            "background-color": '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6),
        },
        "click": (e) => {
            $(e.target).remove();
        },
        "mouseenter": (e) => {
            $(e.target).css({ "opacity": 0.5 });
        },
        "mouseleave": (e) => {
            $(e.target).css({ "opacity": 1 });
        }
    }));
}

$(function () {
    var growInterval;

    $("#start").click(function () {
        let size = parseInt($("#number")[0].value);
        for (let i = 0; i < size; i++) drawCicrle();

        clearInterval(growInterval);
        growInterval = setInterval(() => {
            $('div.circle').css({
                "height": (i, old) => parseInt(old) + parseInt($("#amount")[0].value) + 'px',
                "width": (i, old) => parseInt(old) + parseInt($("#amount")[0].value) + 'px'
            });
        }, parseInt($("#rate")[0].value));
    });
});