//2-1 scrollEvent
$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .summary').offset().top-700){
         $('#content .summary').addClass('moved')
    }
    const safetyLi = Number($('.safety01 li').length);
    for(let i = 0; i < safetyLi; i++){
        if(scroll > $('.safety01 li:eq('+i+')').offset().top - 700){
             $('.safety01 li:eq('+i+')').addClass('moved')
        }
    }
})
