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


// $(function() {
//     // attr(), prop(), val()
//
//     let specialLink = $('#special-link');
//     console.log(specialLink.attr('href'));
//     // set a new href value
//     specialLink.attr('href', 'https://petersommerhoff.com');
//
//     let checkbox = $('input:checkbox');
//     console.log(checkbox.prop('checked'));
//     console.log(checkbox.attr('checked'));
//
//     let textName = $('#name');
//     console.log(textName.val());
//     // set the value
//     textName.val('hello world');
//     console.log(textName.val());
//
//     let rangeInput = $('#range');
//     console.log(rangeInput.val());
// });

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
    // $("#btn-hover").hover(function() {
    //     alert("Button was hovered");
    // });
    //
    // $(".green-box").hover(function() {
    //     $(this).text("I was hovered");
    // }, function() {
    //     $(this).text("Green");
    // });

    // let blueBox = $(".blue-box");

    // blueBox.mouseenter(function() {
    //     $(this).stop().fadeTo(500, 0.7);
    // });
    // blueBox.mouseleave(function(){
    //     $(this).stop().fadeTo(500, 1);
    // });

    // hover(handlerIn, handlerOut) - shorthand for mouse enter and mouse leave as performed above
//     blueBox.hover(function() {
//         $(this).stop().fadeTo(500, 0.7);
//     }, function() {
//         $(this).stop().fadeTo(500, 1);
//     });
// });
 */

/*
$(function() {
    // .on("click", function() {...})
    function logEvent() {
        console.log("Mouse was clicked or key was pressed.");
    }
    $("html").on("click keydown", logEvent);

    let images = [
        'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
        'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
        'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1',
        'https://images.pexels.com/photos/592284/pexels-photo-592284.jpeg?auto=compress&cs=tinysrgb&w=660&h=375&dpr=1'
    ];
    let galleryImage = $(".gallery").find("img");

    let i = 0;
    function switchImages() {
        i = (i + 1) % images.length;
        $(this).fadeOut(function() {
            $(this).attr("src", images[i]).fadeIn();
        });
    }
    galleryImage.on("click", switchImages);
});
 */

/*
$(function() {
    // $("p").click(function() {
    //     $(this).slideUp();
    // });
    // $("#content").append("<p>This is a dynamically added paragraph.</p>");

    // Delegated Events
    // $("#content").on("click", "p", function() {
    //     $(this).slideUp();
    // });
    // $("#content").append("<p>This is a dynamically added paragraph.</p>");

    // $("body").on("mouseenter", "li", function() {
    //     $(this).css("color", "orange");
    // });
});
 */

/*
$(function() {
    $("#btn-click").click({
        user: "Peter",
        domain: "petersommerhoff.com"
    }, function(event) {
        greetUser(event.data);
    });

    function greetUser(eventData) {
        let username = eventData.user || "Anonymous";
        let domain = eventData.domain || "example.com";

        alert("Welcome back " + username + " from " + domain + "!");
    }
});
 */

/*
$(function() {
    let galleryImages = $(".gallery").find("img");
    galleryImages.css("width", "24%").css("opacity", "0.8");

    galleryImages.mouseenter(function() {
        $(this).stop().fadeTo(500, 1);
    });

    galleryImages.mouseleave(function() {
        $(this).stop().fadeTo(500, 0.8);
    });

    let lightBox = $(".lightbox");

    galleryImages.click(function() {
        let source =  $(this).attr("src");
        let image = $("<img>").attr("src", source).css("width", "100%");
        lightBox.empty().append(image).fadeIn();
    });

    lightBox.click(function() {
       $(this).stop().fadeOut();
    });
});
 */

/*
$(function() {
    // keypress() - no documentation.. stick to keydown() & keyup();
    $("html").keydown(function(event) {
        console.log(event.which);
    });

    $("html").keydown(function(event) {
        if (event.which === 39) {
            $(".blue-box").css("margin-left", "+=10px"); // can use .stop().animate() instead of .css();
        } else if (event.which === 37) {
            $(".blue-box").css("margin-left", "+=-10px");
        }
    });
});
 */

// EVENTS II - FORMS:
/*
$(function() {
    let inputFields = $("input:text, input:password, textarea");
    inputFields.focus(function() {
       $(this).css("box-shadow", "0 0 4px #666");
    });
    inputFields.blur(function() {
        $(this).css("box-shadow", "none");
    });

    $("#name").blur(function() {
       let text = $(this).val();
       if (text.length <= 3) {
           $(this).css("box-shadow", "0 0 4px #811");
       } else {
           $(this).css("box-shadow", "0 0 4px #181");
       }
    });
});
 */

/*
$(function() {
    $("#checkbox").change(function() {
       let isChecked = $(this).is(":checked");
       if (isChecked) {
           $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
       } else {
           $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
       }
    });

    $("#selections").change(function() {
       let selected = $(this).find(":selected").text();
       alert(selected);
    });
});
 */

/*
$(function() {
   $("#form").submit(function() {
       let textarea = $("#message");
       if (textarea.val().trim() === " ") {
           textarea.css("box-shadow", "0 0 4px #811");
           event.preventDefault();
       } else {
           // form will be submitted.
       }
   });
});
 */

//
// $(function () {
//     $("#form").submit(function () {
//         let name = $("#name").val();
//         let password = $("#password").val();
//         let message = $("#message").val();
//         let checked = $("#checkbox").is(":checked");
//
//         validateNameField(name, event);
//         validatePasswordField(password, event);
//         validateMessageField(message, event);
//         validateCheckboxField(checked, event);
//     });
// });
//
// function validateNameField(name, event) {
//     if (!isValidName(name)) {
//         $("#name-feedback").text("Please enter at least 2 characters").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#name-feedback").text("");
//     }
// }
//
// function isValidName(name) {
//     return name.length >= 2;
// }
//
// function validatePasswordField(password, event) {
//     if (!isValidPassword(password)) {
//         $("#password-feedback").text("Password needs to have least 10 characters and contain a number").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#password-feedback").text("");
//     }
// }
//
// function isValidPassword(password) {
//     return password.length >= 10 && /.*[0-9].*/.test(password);
// }
//
// function validateMessageField(message, event) {
//     if (!isValidMessage(message)) {
//         $("#message-feedback").text("Please enter N/A if not leaving a message").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#message-feedback").text("");
//     }
// }
//
// function isValidMessage(message) {
//     return message.length >= 3 && message.trim() !== "";
// }
//
// function validateCheckboxField(isChecked, event) {
//     if (!isChecked) {
//         $("#checkbox-feedback").text("Please agree to terms & conditions after reviewing them").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#checkbox-feedback").text("");
//     }
// }


// $(function () {
//     let form = $("#form");
//     enableFastFeedback(form);
//
//     form.submit(function () {
//         let name = $("#name").val();
//         let password = $("#password").val();
//         let message = $("#message").val();
//         let checked = $("#checkbox").is(":checked");
//
//         validateNameField(name, event);
//         validatePasswordField(password, event);
//         validateMessageField(message, event);
//         validateCheckboxField(checked, event);
//     });
// });
//
// function enableFastFeedback(formElement) {
//     let nameInput = formElement.find("#name");
//     let passwordInput = formElement.find("#password");
//     let messageInput = formElement.find("#message");
//     let checkboxInput = formElement.find("#checkbox");
//
//     nameInput.blur(function() {
//         let name = $(this).val();
//         validateNameField(name, event);
//
//         if (!isValidName(name)) {
//             $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//         } else {
//             $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
//         }
//     });
//
//     passwordInput.blur(function() {
//         let password = $(this).val();
//         validatePasswordField(password, event);
//
//         if (!isValidPassword(password)) {
//             $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//         } else {
//             $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
//         }
//     });
//
//     messageInput.blur(function() {
//         let message = $(this).val();
//         validateMessageField(message, event);
//
//         if (!isValidMessage(message)) {
//             $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//         } else {
//             $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
//         }
//     });
//
//     checkboxInput.change(function() {
//         let isChecked = $(this).is(":checked");
//         validateCheckboxField(isChecked, event);
//
//         if (!isChecked) {
//             $(this).add("label[for='checkbox']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//         } else {
//             $(this).add("label[for='checkbox']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
//         }
//     });
// }
//
// function validateNameField(name, event) {
//     if (!isValidName(name)) {
//         $("#name-feedback").text("Please enter at least 2 characters").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#name-feedback").text("");
//     }
// }
//
// function isValidName(name) {
//     return name.length >= 2;
// }
//
// function validatePasswordField(password, event) {
//     if (!isValidPassword(password)) {
//         $("#password-feedback").text("Password needs to have least 10 characters and contain a number").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#password-feedback").text("");
//     }
// }
//
// function isValidPassword(password) {
//     return password.length >= 10 && /.*[0-9].*/.test(password);
// }
//
// function validateMessageField(message, event) {
//     if (!isValidMessage(message)) {
//         $("#message-feedback").text("Please enter N/A if not leaving a message").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#message-feedback").text("");
//     }
// }
//
// function isValidMessage(message) {
//     return message.length >= 3 && message.trim() !== "";
// }
//
// function validateCheckboxField(isChecked, event) {
//     if (!isChecked) {
//         $("#checkbox-feedback").text("Please agree to terms & conditions after reviewing them").css("color", "red");
//         event.preventDefault();
//     } else {
//         $("#checkbox-feedback").text("");
//     }
//

// AJAX:
/*
$(function() {
    // $.get(), $.post(), $.ajax(), $.getJSON()

    // $.load()
    let code = $("#code");
    code.load("script.js");

    code.load("script.js", function(response, status) {
        if (status === "error") {
          alert("Could not find file");
        }
        console.log(response);
    });
});
 */

/*
$(function() {
    // JSON, $.getJSON()
    let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $.getJSON(flickrApiUrl, {
        // options
        tags: "sun, beach",
        tagmode: "any",
        format: "json"
    }).done(function(data) {
        // executed if successful
        console.log(data);
        $.each(data.items, function(index, item) {
            console.log(item);
            $("<img>").attr("src", item.media.m).appendTo("#flickr");

            if (index === 4) { // stops iterating through the images at 5 items
                return false;
            }
        })
    }).fail(function() {
        // executed if unsuccessful
        alert("Ajax call failed.");
    });
});
 */

/*
$(function() {
   let pokeApiUrl = "https://pokeapi.co/api/v2/generation/1";
   let pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

   $.getJSON(pokeApiUrl).done(function(data) {
       console.log(data);
       $.each(data.pokemon_species, function (index, pokemon) {
           let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
           let link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
           let par = $("<p>").html("Pokémon species no. " + (index + 1) + " is ").append(link);

           link.click(function(event) {
               $.getJSON(pokemonByName + pokemon.name).done(function(details) {
                   console.log(details);
                   let pokemonDiv = $("#pokemon-details");
                   pokemonDiv.empty();
                   pokemonDiv.append("<h2>" + name + "</h2>");
                   pokemonDiv.append(("<img src= '" + details.sprites.front_default + "'>"));
                   pokemonDiv.append(("<img src= '" + details.sprites.back_default + "'>"));
                   pokemonDiv.append(("<img src= '" + details.sprites.front_shiny + "'>"));
                   pokemonDiv.append(("<img src= '" + details.sprites.back_shiny + "'>"));
               });
               event.preventDefault();
           });

           par.appendTo("#pokemon");
       });
   }).fail(function() {
       console.log("Request to Pokeapi failed");
   }).always(function() {
       console.log("Pokémon is rad.");
   });
});
 */