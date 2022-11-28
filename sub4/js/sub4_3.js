  // scrollEvent
  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .investment01').offset().top-700){
         $('#content .investment01').addClass('moved')}
    if(scroll >$('#content .investment02').offset().top-700){
         $('#content .investment02').addClass('moved')}
    if(scroll >$('#content .link').offset().top-800){
         $('#content .link').addClass('moved')}

  })
  