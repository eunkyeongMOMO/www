// scrollEvent
$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .summary').offset().top-700){
         $('#content .summary').addClass('moved')}
    if(scroll >$('#content .safety04 li').offset().top-700){
         $('#content .safety04 li').addClass('moved')}
    const safetyLi = Number($('.safety04_list li').length);
    for(let i = 0; i < safetyLi; i++){
        if(scroll > $('.safety04_list li:eq('+i+')').offset().top - 700){
             $('.safety04_list li:eq('+i+')').addClass('moved')
        }
    }
})
