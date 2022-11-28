//주요모델안내 슬라이더처리

let position=0;  //최초위치
let movesize=$('.item_list ul li').outerWidth(true)
console.log(movesize);
$('.item_list ul').after($('.item_list ul').clone())
$('.button').click(function(e){
 e.preventDefault();
 if($(this).is('.left')){
     position-=movesize; 
    $('.item_list').animate({left:position}, 'fast',
    console.log(position),
      function(){							
      if(position<=-3150){
      $('.item_list').css('left',0);
      position=-0;}}).clearQueue();
 }else if($(this).is('.right')){ 
      if(position==0){
      $('.item_list').css('left',-3150);
      position=-3150;}
      position+=movesize; 
      $('.item_list').animate({left:position}, 'fast',
      function(){							
      if(position>=0){
      $('.item_list').css('left',-3150);
      position=-3150;}}).clearQueue();}
  });



//scrollEvent
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  if(scroll >$('#content .content_area img').offset().top-700){
       $('#content .content_area img').addClass('moved')}
  if(scroll >$('#content .summary').offset().top-700){
       $('#content .summary').addClass('moved')}
  if(scroll >$('#content .info').offset().top-700){
       $('#content .info').addClass('moved')}
  if(scroll >$('#content .safety_con02').offset().top-700){
       $('#content .safety_con02').addClass('moved')}

  const contentLi = Number($('#content .safety_con01 li').length);
  for(let i = 0; i < contentLi; i++){
      if(scroll > $('#content .safety_con01 li:eq('+i+')').offset().top - 700){
           $('#content .safety_con01 li:eq('+i+')').addClass('moved')
      }
  }
})
