


  let content1= $('.content_area .chemical_item li:eq(0)').offset().top-300;
  let content2= $('.content_area .chemical_item li:eq(1)').offset().top-300;
  let content3= $('.content_area .chemical_item li:eq(2)').offset().top-300;
  let content4= $('.content_area .chemical_item li:eq(3)').offset().top-300;
  let content5= $('.content_area .chemical_item li:eq(4)').offset().top-300;
  let content6= $('.content_area .chemical_item li:eq(5)').offset().top-300;

 //슬라이드 메뉴 처리
$('#content .chemical_icon li a').click(function(e){
e.preventDefault(); 
let value=0;
   if($(this).hasClass('chemical1')){   
    value= content1}
    else if($(this).hasClass('chemical2')){
    value= content2;}
    else if($(this).hasClass('chemical3')){
     value= content3;}
     else if($(this).hasClass('chemical4'))
     {value= content4;} 
     else if($(this).hasClass('chemical5'))
     {value= content5;} 
     else if($(this).hasClass('chemical6'))
     {value= content6;} 
  $("html,body").stop().animate({"scrollTop":value},1000);
  });


// scrollEvent
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  if(scroll >$('#content .summary').offset().top-700){
       $('#content .summary').addClass('moved')}
  if(scroll >$('#content .summary2').offset().top-700){
       $('#content .summary2').addClass('moved')}
  if(scroll >$('#content .main_img').offset().top-700){
       $('#content .main_img').addClass('moved')}
  if(scroll >$('#content .chemical_icon').offset().top-700){
       $('#content .chemical_icon').addClass('moved')}
  const safetyLi = Number($('#content .chemical_item li').length);
  for(let i = 0; i < safetyLi; i++){
      if(scroll > $('#content .chemical_item li:eq('+i+')').offset().top - 700){
           $('#content .chemical_item li:eq('+i+')').addClass('moved')
      }
  }
})
