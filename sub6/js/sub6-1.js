  // scrollEvent
  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .content01').offset().top-700){
         $('#content .content01').addClass('moved')}
    if(scroll >$('#content .content02').offset().top-700){
         $('#content .content02').addClass('moved')}
    if(scroll >$('#content .content03').offset().top-700){
         $('#content .content03').addClass('moved')}
    const safetyLi = Number($('#content .content04 li').length);
    for(let i = 0; i < safetyLi; i++){
        if(scroll > $('#content .content04 li:eq('+i+')').offset().top - 700){
             $('#content .content04 li:eq('+i+')').addClass('moved')
        }
    }
  })
  