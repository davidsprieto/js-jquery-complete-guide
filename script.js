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

// ELEMENT SELECTORS:
/*
$(function () {
    // $(`p`).css(`background-color`, "yellow");
    // $(`.red-box`).css(`background-color`, "yellow");
    // $(`#list`).css(`background-color`, `yellow`);
    // $(`input[type='text']`).css(`background-color`, `yellow`);
    // $(`input:text`).css(`background-color`, `yellow`);
    // $(`h2, p, input`).css(`background-color`, `yellow`);
    // $(`p:first`).css(`background-color`, "yellow");
    // $(`li:last`).css(`background-color`, "yellow");
    // $(`li:even`).css(`background-color`, `yellow`);
    // $(`li:odd`).css(`background-color`, `lightgreen`);
});
 */

/*
$(function() {
    // $('#list').find('li').css('background-color', 'yellow');
    // $(`#list`).children(`li`).css(`background-color`, `yellow`);
    // $(`#list`).parents(`body`).css(`background-color`, `yellow`);
    // $(`#list`).parent().css(`background-color`, `yellow`);
    // $(`#list`).siblings(`:header`).css(`background-color`, `yellow`);
    // $(`#list`).prev().css(`background-color`, `yellow`);
    // $(`#list`).next().css(`background-color`, `yellow`);
    // $(`:header`).next().css(`background-color`, `yellow`);
    // $(`input:password`).css(`background-color`, `yellow`);
});
 */

/*
$(function() {
    // $(`#list`).children('li').filter(":even").css(`background-color`, `yellow`);
    // $(`li`).filter(function(index) {
    //     return index % 3 === 1;
    // }).css(`background-color`, `yellow`);
    // $(`li`).first().css(`background-color`, `yellow`);
    // $(`li`).last().css(`background-color`, `yellow`);
    // $(`li`).eq(4).css(`background-color`, `yellow`);
    // $(`li`).eq(-2).css(`background-color`, `yellow`);
    // $(`li`).not(`:first`).css(`background-color`, `yellow`);
    // $(`li`).not(function(index) {
    //     return index % 3 === 0;
    // }).css(`background-color`, `yellow`);
});
 */

// MANIPULATING THE DOM:
/*
$(function() {
    // $("ul ul:first").append("<li>I'm going to be the last sub-item");
    // $("<li>I'm going to be the last item</li>").appendTo($("ul ul:first"));

    // $("ul ul:first").prepend("<li>I'm going to be the first sub-item</li>");
    // $("ul ul").prepend("<li>I'm going to be the first sub-item</li>");
    // $("<li>I'm going to be the first sub-item</li>").prependTo($("ul ul:first"));
    // $("<h4>David Prieto</h4>").prependTo("#content");

    // $(".red-box").after("<div class='red-box'>Another Red</div>");
    // $(".blue-box").before("<div class='blue-box'>Another Blue</div>");

    // $(".blue-box").before(function() {
    //     return "<div class='blue-box'>Blue 2</div>";
    // });

    // $(".blue-box").before($(".red-box"));
    // $("p").after($("#list"));

    // $(".red-box").after("<div class='red-box'>Another Red</div>");
    // $(".green-box").after(function() {
    //     return "<div class='green-box'>Another Green</div>";
    // });
    // $(".blue-box").after("<div class='blue-box'>Another Blue</div>");
});
 */

/*
$(function() {
    // $("li").replaceWith("<li>Replaced</li>");
    // $("li").replaceWith(function() {
    //     return "<li>Replaced with function</li>";
    // });
    // let firstListItem = $("li:first");
    // $("p:first").replaceWith(firstListItem);

    // LINES 176 - 178 ACCOMPLISH THE SAME TASK - JUST DIFFERENT WAYS OF WRITING IT
    // $(".red-box, .blue-box").replaceWith("<div class='green-box'>Another Green</div>");
    // $("<div class='green-box'>Another Green</div>").replaceAll(".red-box, .blue-box");
    // $("<div class='green-box'>Another Green</div>").replaceAll($(".red-box, .blue-box"));
});
 */

