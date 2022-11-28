// scrollEvent
$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .summary').offset().top-700){
         $('#content .summary').addClass('moved')}
    if(scroll >$('#content .sytem').offset().top-700){
         $('#content .sytem').addClass('moved')}
    const safetyLi = Number($('.sytem_list li').length);
    for(let i = 0; i < safetyLi; i++){
        if(scroll > $('.sytem_list li:eq('+i+')').offset().top - 700){
             $('.sytem_list li:eq('+i+')').addClass('moved')
        }
    }
})
