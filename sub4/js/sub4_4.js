  // scrollEvent
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  if(scroll >$('#content .summary').offset().top-700){
       $('#content .summary').addClass('moved')}
  const safetyLi = Number($('#content .investment_con li').length);
  for(let i = 0; i < safetyLi; i++){
      if(scroll > $('#content .investment_con li:eq('+i+')').offset().top - 700){
           $('#content .investment_con li:eq('+i+')').addClass('moved')
      }
  }
})
