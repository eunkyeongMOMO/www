//item 슬라이드 처리
let position=0;  //최초위치
let movesize=$('.item_box .item li').outerWidth(true)

$('.item_box .item').after($('.item_box .item').clone())
$('.button').click(function(e){
 e.preventDefault();
 if($(this).is('.left')){
     position-=movesize; 
    $('.item_box').animate({left:position}, 'fast',
      function(){							
      if(position<=-2700){
      $('.item_box').css('left',0);
      position=-0;}}).clearQueue();
 }else if($(this).is('.right')){
      if(position==0){
      $('.item_box').css('left',-2700);
      position=-2700;}
      position+=movesize; 
      $('.item_box').animate({left:position}, 'fast',
      function(){							
      if(position>=0){
      $('.item_box').css('left',-2700);
      position=-2700;}}).clearQueue();}
  });

  //popupEvent
let ind = 0;
let popup_text ='';

function popchange(){
$('.motors_popup img:eq(0)').attr('src','./images/content1/con1/bmw_'+(ind+1)+'.png');
  popup_text ='';
  popup_text+='<strong>'+responseObject.motors_info[ind].title+'</strong>';
  popup_text+= '<dl class="info1">';
  popup_text+= '<dt>신차 시작 가격</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].price+'</dd>';
  popup_text+= '<dt>최고출력</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].engine+'</dd>';
  popup_text+= '<dt>엔진 및 연료타입</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].output+'</dd>';
  popup_text+= '</dl>';
  popup_text+= '<p>제원정보</p>';
  popup_text+= '<dl class="info2">';
  popup_text+= '<dt>공차중량</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].weight+'</dd>';
  popup_text+= '<dt>최고출력 (HP/RPM)</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].high_output+'</dd>';
  popup_text+= '<dt>정부 공인 표준 연비 (등급)</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].level+'</dd>';
  popup_text+= '<dt>CO2 배출량</dt>';
  popup_text+= '<dd>'+responseObject.motors_info[ind].co2+'</dd>';
  popup_text+= '</dl>';
  popup_text+= '<a href="https://www.bmw.co.kr/">공식사이트가기</a>';

  $('.motors_popup .info').html(popup_text);
}

$('.motors_list li a').click(function(e){
  e.preventDefault();
  ind = $(this).index('.motors_list a'); 
  console.log(ind);
  $('.motors_con02 .modal_box').fadeIn('fast');
  $('.motors_popup').fadeIn('slow');

  popchange();

});

$('.close_btn,.motors_con02 .modal_box').click(function(e){
  e.preventDefault();
  $('.motors_con02 .modal_box').fadeOut('fast');
  $('.motors_popup').fadeOut('fast');
});


  // scrollEvent
$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  if(scroll >$('#content .summary').offset().top-700){
       $('#content .summary').addClass('moved')}
  if(scroll >$('#content section:nth-of-type(1)').offset().top-700){
       $('#content section:nth-of-type(1)').addClass('moved')}
  const safetyLi = Number($('#content .shop li').length);
  for(let i = 0; i < safetyLi; i++){
      if(scroll > $('#content .shop li:eq('+i+')').offset().top - 700){
           $('#content .shop li:eq('+i+')').addClass('moved')
      }
  }
})
