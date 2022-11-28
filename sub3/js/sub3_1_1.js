// 전시장 안내 처리 
var article = $('.motors_con01 .shop_list'); 
$('.motors_con01 .shop_list').first().find('.shop_details').slideDown(100);
$('.motors_con01 .shop_list').first().removeClass('hide').addClass('show'); 
  
$('.motors_con01 .shop_list a').click(function(e){   
      e.preventDefault();

var myArticle = $(this).parents('.shop_list'); 
if(myArticle.hasClass('hide')){   
    article.find('.shop_details').slideUp(100);
    article.removeClass('show').addClass('hide');
    myArticle.removeClass('hide').addClass('show');  
    myArticle.find('.shop_details').slideDown(100);  
 } else {  
   myArticle.removeClass('show').addClass('hide');  
   myArticle.find('.shop_details').slideUp(100);   
}  
});      
//모두여닫기
$('.all').toggle(function(e){
    e.preventDefault(); 
    article.find('.shop_details').slideDown(100);
    article.removeClass('hide').addClass('show');
    $(this).html('전시장 정보닫기 <i class="fa-solid fa-minus"></i>');
},function(e){ 
    e.preventDefault();
    article.find('.shop_details').slideUp(100);
    article.removeClass('show').addClass('hide');
    $(this).html('모든 전시장보기<i class="fa-solid fa-plus"></i>');
});

//주요모델안내 슬라이더처리

let position=0;  //최초위치
let movesize=$('.motors_list li').outerWidth(true)

$('.motors_list').after($('.motors_list').clone())
$('.button').click(function(e){
 e.preventDefault();
 if($(this).is('.left')){
     position-=movesize; 
    $('.model_info').animate({left:position}, 'fast',
    console.log(position),
      function(){							
      if(position<=-2000){
      $('.model_info').css('left',0);
      position=-0;}}).clearQueue();
 }else if($(this).is('.right')){  //다음버튼 클릭
      if(position==0){
      $('.model_info').css('left',-2000);
      position=-2000;}//제일 처름 오른쪽버튼을 경우, left값을 변경해줘야한다.
      position+=movesize; 
      $('.model_info').animate({left:position}, 'fast',
      function(){							
      if(position>=0){
      $('.model_info').css('left',-2000);
      position=-2000;}}).clearQueue();}
  });

//json import
var motorsInfoData = new XMLHttpRequest();  
var responseObject;

motorsInfoData.onload = function() { 
 
    responseObject = JSON.parse(motorsInfoData.responseText); 
};
motorsInfoData.open('GET', './js/motors.json', true); 
motorsInfoData.send(null);                                 


//modal popup
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

