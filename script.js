// ANIMATIONS:
/*
$(function() {
    // jQuery goes here...

    // Uncomment this line to fade out the red box on page load
    // .fadeOut() changes the CSS property of display = none.
    // .fadeIn() changes the CSS property of display to whatever it was before.
    // .fadeTo() ONLY changes the opacity.
    // .fadeToggle() ONLY changes the opacity.

    $(".red-box").fadeTo(3000, 0.2);
    $(".green-box").fadeTo(2000, 0.5);
    $(".blue-box").fadeTo(1000, 0.8);

    $(".blue-box").fadeToggle();
    $(".blue-box").fadeToggle();
});
*/

/*
$(function() {
    $(`.blue-box`).hide();
    $(`.blue-box`).show();
    $(`.blue-box`).toggle();
    $(`.blue-box`).hide(1000);
    $(`.blue-box`).show(1000);
});
 */

/*
$(function() {
    $(`.blue-box`).slideUp(2000);
    $(`.blue-box`).slideDown(2000);
    $(`p`).hide();
    $(`p`).slideDown(1000);
    $(`.blue-box`).slideToggle(2000);
});
 */

/*
$(function() {
    $(`.blue-box`).animate({
        "margin-left": "+=200px"
    }, 1000, "linear")
        .animate({
            "margin-left": "-=200px"
        }, 2000, "linear")
});
 */

/*
$(function() {
    $(`.blue-box`).animate({
        marginLeft: "200px",
        opacity: 0,
        height: "50px",
        width: "50px",
        marginTop: "25px"
    }, 2000)
    $(`p`).animate({
        fontSize: "20px",
    }, 1000)
});
 */

/*
$(function() {
    $(`.red-box`).fadeTo(1000, 0.2);
    $(`.green-box`).delay(1000).fadeTo(1000, 0.5);
    $(`.blue-box`).delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();
});
 */

/*
$(function() {
    $(`.red-box`).fadeTo(1000, 0, function() {
        $(`.green-box`).fadeTo(1000, 0, function() {
            $(`.blue-box`).fadeTo(1000, 0);
        });
    });
});
 */

/*
$(function() {
    $(`.lightbox`).delay(500).fadeIn(1000);
});
 */