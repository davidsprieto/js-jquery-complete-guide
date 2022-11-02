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
    $('#list').find('li').css('background-color', 'yellow');
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

// MANIPULATING THE DOM I:
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

/*
$(function() {
    // $("li").remove();
    // $("form").children().not("input:text, textarea, br").remove();

    // let detachedListItem = $("li").detach();
    // $("#content").append(detachedListItem);

    // $("p:first").empty();
    // $(".red-box, .green-box, .blue-box").empty();
});
 */

/*
$(function() {
    // attr(), prop(), val()

    // let specialLink = $('#special-link');
    // console.log(specialLink.attr('href'));
    // // set a new href value
    // specialLink.attr('href', 'https://petersommerhoff.com');

    // let checkbox = $('input:checkbox');
    // console.log(checkbox.prop('checked'));
    // console.log(checkbox.attr('checked'));

    // let textInput1 = $('#input1');
    // console.log(textInput1.val());
    // // set the value
    // textInput1.val('hello world');
    // console.log(textInput1.val());

    // let rangeInput = $('#range');
    // console.log(rangeInput.val());
});
 */

/*
$(function() {
    let galleryImage = $('.gallery').find('img').first();
    let images = [
        'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
        'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
        'https://images.pexels.com/photos/592284/pexels-photo-592284.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1'
    ];

    let i = 0;
    setInterval(function() {
        i = (i + 1) % images.length; // 2, 1, 0, 2, 1, 0, ....
        galleryImage.fadeOut(function() {
            $(this).attr('src', images[i]);
            $(this).fadeIn();
        });
        // console.log(i + galleryImage.attr('src'));
    }, 2000);
});
 */

// MANIPULATING THE DOM II:
/*
$(function() {
    // $(".gallery").css("display", "none"); // can use .hide() as well
    //
    // let redBox = $(".red-box");
    // console.log(redBox.css("width"));
    // console.log(redBox.width());
    //
    // redBox.css("background-color", "#AA7700");
    // $("p").css("font-size", "18px");
    // redBox.css("width", "+=20px");
    //
    // let properties = $("p").css(["font-size", "line-height", "color"]);
    // console.log(properties);
    // console.log(properties[0]);
    //
    // redBox.css("user-select", "none");
    // redBox.css("user-select", function() {
    //     return "none";
    // })
});
 */

/*
$(function() {
   // $("a").addClass("fancy-link"); // class = "...."
   //  $("p:first").addClass("large emphasize");
   //
   //  $("li li").addClass(function(index) {
   //      $(this).addClass("item-" + index);
   //  });
   //
   //  $("div").addClass(function(index, currentClass) {
   //      if (currentClass === "dummy") {
   //          return "red-box";
   //      }
   //  });
   //
   //  $(".red-box").removeClass("red-box");
   //  $(".red-box").removeClass("red-box").addClass("blue-box");

    // $(".dummy").removeClass("dummy").addClass("green-box");
});
 */

/*
$(function() {
    // let gallery = $(".gallery");
    // let images = [
    //     'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
    //     'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
    //     'https://images.pexels.com/photos/592284/pexels-photo-592284.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1'
    // ];
    // gallery.data("availableImages", images);
    // console.log(gallery.data("availableImages"));
    // gallery.data("name", "The Awesome Gallery");
    // console.log(gallery.data());
    // gallery.removeData("name");
    // console.log(gallery.data("name")); // prints undefined because it was removed in the previous line
});
 */

/*
$(function() {
    // text(), html()
    // let firstPar = $("p:first");
    // console.log(firstPar.text());
    // console.log(firstPar.html());
    //
    // firstPar.text("<strong>Hello</strong> World!");
    // firstPar.html("<strong>Hello</strong> World!");

    // let firstPar = $("p:first");
    // firstPar.html(firstPar.html() + " This was just appended.");
});
 */

// Events I - Handling Mouse Events & Keyboard Events:
/*
$(function() {
   $("#btn-click").click(function(event) {
       console.log(event);
       alert("Button was clicked");
   });

   $(".red-box").click(function() {
       $(this).fadeTo(500, 0.5);
   });

   $(".red-box").click();
});
 */

/*
$(function() {
    // :hover
    $("#btn-hover").hover(function() {
        alert("Button was hovered");
    });

    $(".green-box").hover(function() {
        $(this).text("I was hovered");
    });
});
 */