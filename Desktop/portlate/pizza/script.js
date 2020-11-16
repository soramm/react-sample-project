$(function(){

    /* about-leftの文字横からfadeIn */
    $(window).scroll(function(){
        $('.about-left').each(function(){
            var position = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight =$(window).height();

            if(scroll > position - windowHeight +500){
                $(this).addClass('active');
            }
        });
    });


    $(window).scroll(function(){
        $('.access-left-title').each(function(){
            var position = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight =$(window).height();

            if(scroll > position - windowHeight +300 ){
                $(this).addClass('active');
            }
        });
    });
    $(window).scroll(function(){
        $('.menu-top').each(function(){
            var position = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight =$(window).height();

            if(scroll > position - windowHeight +300 ){
                $(this).addClass('fadeIn');
            }
        });
    });
    
$('.slider-items li:nth-child(n+2)').hide();
setInterval(function(){
$(".slider-items li:first-child").fadeOut(2000);
$(".slider-items li:nth-child(2)").fadeIn(2000);
$(".slider-items li:first-child").appendTo(".slider-items");
},4000);

});


$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});



