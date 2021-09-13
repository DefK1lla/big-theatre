$( function() {
    const introSlider = $(".intro__slider");

    introSlider.slick();


    // Modal
    const workItems = $('.works__items').find('> .works__item'),
        sliderImg = $('.works__slider-items').find('> .works__-img'),
        lightbox = $('.lightbox'),
        overlay = $('.overlay');
    let targetImg;


    workItems.click(function() {
        targetImg = $(this).find('> .works__img').attr('src');
        lightbox.find('img').attr('src', targetImg);
        lightbox.find('span').text($(this).attr('data-name'));
        lightbox.fadeIn();
    });

    overlay.click (function(){
        lightbox.fadeOut();
    });


    
    // Menu
    const menu = $(".nav"),
        menuBtn = $(".menu__btn"),
        menuClose = $(".menu__close");


    menuBtn.on("click", function(){
        menu.addClass("nav-active");
    });

    menuClose.on("click", function(){
        menu.removeClass("nav-active");
    });



    // Smooth scrolls
    const menuLink = $("[data-scroll]"),
        document = $("html, body");

        
    menuLink.on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll'),
            elementOffset = $(elementId).offset().top;

        document.animate({
            scrollTop: elementOffset,
            options: "linear"
        }, 700);      
    });
});