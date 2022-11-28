

//main slides
let timeonoff; //자동기능 구현
let imageCount = 5;  //이미지 개수 *** 
let cnt = 1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
let position = 0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
let windowWidth = $( window ).width(); // 디바이스 가로값



// 초기셋팅
$('.main .dock span:eq(0)').addClass('on');
$('.slide li:eq(0) .slogan').addClass('moved');



// 자동 슬라이드
function moveg(){

    cnt++;
    if(cnt == imageCount){ cnt=1;} //카운트 초기화

    console.log(cnt);
    position = -(cnt-1) * windowWidth;
    $('.slides').stop().animate({left:position}, 'slow'); // 이미지 left값

    $('.slides .slogan').removeClass('moved');
    $('.slides .slogan:eq('+ (cnt-1) +')').addClass('moved');
    
    $('.main .dock span').removeClass('on');// 버튼 off
    $('.main .dock span:eq('+ (cnt-1) +')').addClass('on');// 나만 on

    $('.main .cnt span:eq(0)').html('0'+cnt);

    if(cnt == imageCount){ cnt=0 };
}
timeonoff= setInterval( moveg , 4000); //4초마다 자동기능
$(window).resize(function(){
    // clearInterval(timeonoff); // 타이머 중지
    windowWidth = $( window ).width(); // 디바이스 가로값

    if(cnt == 0){ cnt = imageCount; } 
    
    position = -(cnt-1) * windowWidth;
    $('.main .slides').css({left:position}); // 이미지 left값
console.log('대체 뭐가문제야'+ windowWidth , cnt, position)
    // timeonoff= setInterval( moveg , 4000);
});


//network

function info_text(){
  let networkInfoText= 12;
    $({ val : 0 }).animate({ val : networkInfoText }, {
     duration: 3000,
    step: function() {
      let number = Math.floor(this.val);
      $(".info_text .count1").text(number);},
    complete: function() {
      let number = Math.floor(this.val);
      $(".info_text .count1").text(number);}
  });
   networkInfoText= 42;
    $({ val : 0 }).animate({ val : networkInfoText }, {
     duration: 3000,
    step: function() {
      let number = Math.floor(this.val);
      $(".info_text .count2").text(number);},
    complete: function() {
      let number = Math.floor(this.val);
      $(".info_text .count2").text(number);}
  });}
  let onOff=true;
 $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();//스크롤top의 좌표를 담는다
    let neetWork= $('#content .network').offset().top-800 ;
        if(scroll>neetWork){if(onOff==true){info_text(); onOff=false;}}});

//busineess

$('.business_item li:eq(0)').fadeIn() ; 
$('.business .tab_btn li:eq(0)').addClass('current');
  
$('.business .tab_btn .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.business .tab_btn .tab');  // 클릭시 해당 index를 뽑아준다

      $(".business_item li").hide(); //모든 탭내용을 안보이게...
      $(".business_item li:eq("+ind+")").fadeIn() ; //클릭한 해당 탭내용만 보여라
      $('.tab_btn li').removeClass('current');
      $(this).parent('li').addClass('current');
 });

//safety_tab

$('.safety .safety_list li:eq(0)').fadeIn() ; 
$('.safety .tab_btn li:eq(0)').addClass('current');
  
$('.safety .tab_btn .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.safety .tab_btn .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $(".safety .safety_list li").hide(); //모든 탭내용을 안보이게...
      $(".safety .safety_list li:eq("+ind+")").fadeIn() ; //클릭한 해당 탭내용만 보여라
      $('.safety .tab_btn li').removeClass('current');
      $(this).parent('li').addClass('current');
 });


 //safety_sytem

let barSize = 25;
let barTotal = 25;
let movesize3 = 160  //li의 너비
let position3 = 0;
let newCnt = 0;
let startX, endX;
const safetySec = document.querySelector('.sytem');
const safetyMove = document.querySelector('.sytem ul');
const scrollBarBlue = document.querySelector('.scrollBar span');

function touchsafetyStart(e){
 
  if(e.pageX==undefined){  //모바일이면...
    startX = e.touches[0].pageX ;
  }else{  //데스크탑이면..
    e.preventDefault();
    startX =  e.pageX;
  }
};

function touchsafetyEnd(e){

  if(e.pageX==undefined){
     endX = e.changedTouches[0].pageX;
  }else{
    
    e.preventDefault();
    endX = e.pageX;
  }

 

    if(startX > endX){
      newCnt++;

      if(newCnt >= 4){
        newCnt = newCnt - 1;
        safetyMove.style.left = '-500px';
      } else {
        position3 += -movesize3;
        safetyMove.style.left = position3+'px';

        barTotal += barSize;
        scrollBarBlue.style.width = `${barTotal}%`;
        scrollBarBlue.style.transition = 'width .3s';
      }
    } else {
      newCnt--;

      if(newCnt < 0){
        newCnt = 0;
        safetyMove.style.left = 0;
      } else {
        position3 -= -movesize3;
        safetyMove.style.left = position3+'px';

        barTotal -= barSize;
        scrollBarBlue.style.width = `${barTotal}%`;
        scrollBarBlue.style.transition = 'width .3s';
      }
    }
 
};
safetySec.addEventListener('touchstart', touchsafetyStart);
safetySec.addEventListener('touchend', touchsafetyEnd);
safetySec.addEventListener('mousedown', touchsafetyStart);
safetySec.addEventListener('mouseup', touchsafetyEnd);


