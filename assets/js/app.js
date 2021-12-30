$(function (){
    'use stirct';
       //backToTop bottom
       $(window).on('scroll',function(){
        if($(window).scrollTop() > 400){
            $('#backToTop').fadeIn('slow')
        }else{
            $('#backToTop').fadeOut('slow')
        }
    })

    $('#backToTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0,
        },1000)
    })
    //slick slider
    $('.slider_slick').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        dotsClass:'slider_dots',
    })
    //partnar slick
    $('.partnar_slick').slick({
        arrows:true,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        prevArrow:'<i class="fas fa-chevron-left partnar_arrow partnar_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right partnar_arrow partnar_right"></i>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3,
                }
              },
              {
                breakpoint: 576,
                settings: {
                    slidesToShow:2,
                }
              },
              {
                breakpoint: 400,
                settings: {
                    slidesToShow:1,
                }
              }
        ]
    })
    //
    $('#bkash').on('click',function(){
        $('#bkash').toggleClass('active')
    })
    $('#upay').on('click',function(){
        $('#upay').toggleClass('active')
    })
    $('#rocket').on('click',function(){
        $('#rocket').toggleClass('active')
    })
    $('#abbank').on('click',function(){
        $('#abbank').toggleClass('active')
    })
    $('#okwallet').on('click',function(){
        $('#okwallet').toggleClass('active')
    })
    $('#mycash').on('click',function(){
        $('#mycash').toggleClass('active')
    })
    $('#mcash').on('click',function(){
        $('#mcash').toggleClass('active')
    })
    $('#dmoney').on('click',function(){
        $('#dmoney').toggleClass('active')
    })
    $('#dmoney').on('click',function(){
        $('#dmoney').toggleClass('active')
    })
})