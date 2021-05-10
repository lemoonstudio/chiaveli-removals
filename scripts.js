// header animação
$(function () {
    //caches a jQuery object containing the header element
    var header = $("header");
    var headerContent = $(".header");
    var logoB = $(".hideLogoB");
    var logoW = $(".hideLogow");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.addClass("scrollHeader");
            headerContent.addClass("scrollHeaderContent");
            logoW.hide()
            logoB.show()
        } else {
            header.removeClass("scrollHeader");
            headerContent.removeClass("scrollHeaderContent");
            logoW.show()
            logoB.hide()

        }
    });
});


jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.menu-desk ul li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active-link ');
            console.log('add')
        }
        console.log('rodo')

    });
});