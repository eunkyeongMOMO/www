  // scrollEvent
  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .education').offset().top-700){
         $('#content .education').addClass('moved')}
    if(scroll >$('#content .info').offset().top-700){
         $('#content .info').addClass('moved')}
    const contentLi = Number($('#content .leader li').length);
    for(let i = 0; i < contentLi; i++){
        if(scroll > $('#content .leader li:eq('+i+')').offset().top - 900){
             $('#content .leader li:eq('+i+')').addClass('moved')
        }
    }
  })
  