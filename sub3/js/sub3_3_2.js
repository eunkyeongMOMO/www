  // scrollEvent
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  if(scroll >$('#content .summary').offset().top-700){
       $('#content .summary').addClass('moved')}
  const safetyLi = Number($('#content .content01 li').length);
  for(let i = 0; i < safetyLi; i++){
      if(scroll > $('#content .content01 li:eq('+i+')').offset().top - 700){
           $('#content .content01 li:eq('+i+')').addClass('moved')
      }
  }
})
