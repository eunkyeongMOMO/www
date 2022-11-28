  //GNB 처리
  let gnb_open = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
       
  $('#headerArea').removeClass('mn_open');
  $(".menu_open").click(function() { //메뉴버튼 클릭시
      
      let documentHeight =  $(document).height();
      $("#gnb").css('height',documentHeight);
  
     if(gnb_open==false){
       $("#gnb").animate({right:0,opacity:1}, 'fast');
       $('#headerArea #gnb').fadeIn();
       $('#headerArea').addClass('mn_open');

       gnb_open=true;
     }else{
        $('#headerArea #gnb').fadeOut();
       $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
       $('#headerArea').removeClass('mn_open');
       gnb_open=false;
     }
  
  });
  
  
//header 
let scroll = $(window).scrollTop();
let smh=$('.videoBox').height(); 
let on_off=false; 
 
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();  

         if(scroll>smh-50){
             $('#headerArea').addClass('moved')  
         }else{
          $('#headerArea').removeClass('moved')}; 
      });
//goToTop
$('.go_top').hide();
           
$(window).on('scroll',function(){ //스크롤 값의 변화
     var scroll = $(window).scrollTop(); //스크롤의 거리 담는 변수처리
     if(scroll>1000){ 
         $('.go_top').fadeIn('slow');  //top버튼 보임
     }else{
         $('.go_top').fadeOut('fast'); //top버튼 안보임
     }
});

 $('.go_top').click(function(e){ //클릭시 상단이동->이동시 스무스하게 올라가게 처리
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":0},1000); 
 });
