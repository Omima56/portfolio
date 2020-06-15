//Change Navbar Color On Scroll//

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
});