

let tab_move= $('.history_tabs li:eq(0)').offset().top;  //history_tabs 스크롤값
let content2= $('.content_area .hiscon2 dl:eq(0)').offset().top-100;
let content3= $('.content_area .hiscon3 dl:eq(0)').offset().top-100;
let content4= $('.content_area .hiscon4 dl:eq(0)').offset().top-100;
 //슬라이드 메뉴 처리
$('#content .history_tabs li a').click(function(e){
e.preventDefault(); 
let value=0;
   if($(this).hasClass('his1')){   
    value= 0  
   }else if($(this).hasClass('his2')){
    value= content2;
      }else if($(this).hasClass('his3')){
     value= content3;
     }else if($(this).hasClass('his4'))
     {value= content4;} 
  $("html,body").stop().animate({"scrollTop":value},1000);
  });

  $(window).on('scroll',function(){
      let scroll = $(window).scrollTop();
      $('.history_tabs li').removeClass('current');
       if(scroll >0 && scroll<=content2-20){
        $('.history_tabs li:eq(0)').addClass('current');}
      else if(scroll>=content2-20 && scroll<=content3-20){
        $('.history_tabs li:eq(1)').addClass('current');}
      else if(scroll>=content3-20 && scroll<=content4-20){
        $('.history_tabs li:eq(2)').addClass('current');}
      else if(scroll>=content4-20){
        $('.history_tabs li:eq(3)').addClass('current');}
  })


// 스크롤 변수 정의
// 윈도우 높이 
const winH = window.innerHeight;

// 각 스크롤 적용할 부분의 top 값 구하는 법
// item.getBoundingClientRect().top;

  
//            const section = document.querySelectorAll(".history_height");
// const sectionMove = function () {
//     for(let i = 0; i < section.length; i++){
//         if(winH > section[i].getBoundingClientRect().top){
            
//             section[i].classList.add("moveToTop");
            
//         } else {
//                 section[i].classList.remove("moveToTop");
//         }
//     }
// }

// addEventListener("scroll", sectionMove);
