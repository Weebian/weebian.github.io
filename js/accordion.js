$(function () {
    let active = false;

    //Menu stuff
    $(".menuButton").click(function () {
        if ($('.menuItems').is(':hidden')) {
            $('.menuItems').show();
        }
        else {
            $('.menuItems').hide();
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 760) {
            $('.menuItems').show();
            $('.menuItems').css('display', 'inline');
        }
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    $(function () {
        $(".accordion").accordion();
    });
    $('.accordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });

    $(".accordion").click(function () {
        $("#folder" + active).switchClass("fa-folder-open", "fa-folder");
        active = $(".accordion").accordion("option", "active");
        $("#folder" + active).switchClass("fa-folder", "fa-folder-open");
    });
});