    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
    
        const contentHeight = Number($('.content_area div').length);
        for(let i = 0; i < contentHeight; i++){
            if(scroll > $('.content_area div:eq('+i+')').offset().top - 600){
                 $('.content_area div:eq('+i+')').addClass('moved')
            }else{
                $('.content_area div:eq('+i+')').removeClass('moved')
            }
        }})