    // scrollEvent
$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .summary').offset().top-700){
         $('#content .summary').addClass('moved')}
    if(scroll >$('#content .info').offset().top-700){
         $('#content .info').addClass('moved')}
    if(scroll >$('#content .business').offset().top-700){
         $('#content .business').addClass('moved')}
    const safetyLi = Number($('#content .shop li').length);
    for(let i = 0; i < safetyLi; i++){
        if(scroll > $('#content .shop li:eq('+i+')').offset().top - 700){
             $('#content .shop li:eq('+i+')').addClass('moved')
        }
    }
})
