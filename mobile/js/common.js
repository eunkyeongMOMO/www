$(window).resize(function(){h
  windowWidth = $(window).width().height(); // 디바이스 가로값
});

//GNB 처리
let gnb_open = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
$('#headerArea').removeClass('mn_open');
$(".menu_open").click(function() { //메뉴버튼 클릭시
    
    let documentHeight =  $(document).height();
    $("#gnb").css('height',documentHeight);

   if(gnb_open==false){
     $("#gnb").animate({right:0,opacity:1}, 'fast');
     $('#headerArea').addClass('mn_open');
     gnb_open=true;
   }else{
     $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
     $('#headerArea').removeClass('mn_open');
     gnb_open=false;
   }

});

// header 처리


let scroll = $(window).scrollTop();
let smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
let on_off=false; 
 
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();  

         if(scroll>smh-50){
             $('#headerArea').addClass('moved')
            
         }else{
            if(on_off==false){
                 $('#headerArea').removeClass('moved')
              }
         }; 
         
      });


 //2depth 메뉴 교대로 열기 처리 
 let onoff=[false,false,false,false];
 let arrcount=onoff.length;
$('#gnb li.depth1:eq(0) ul').show();
 $('#gnb .depth1 h3 a').click(function(){
     var ind=$(this).parents('.depth1').index();
     

    if(onoff[ind]==false){
     //$('#gnb .depth1 ul').hide();
     $(this).parents('.depth1').find('ul').slideDown();
     $(this).parents('.depth1').siblings('li').find('ul').slideUp();
      for(var i=0; i<arrcount; i++) onoff[i]=false; 
      onoff[ind]=true;
          
         
    }else{
      $(this).parents('.depth1').find('ul').slideUp(); 
      onoff[ind]=false;   
           
    }
 });    

//family

$('.family>a').toggle(function(e){
    e.preventDefault();
    $('.family .family_list').fadeIn('slow');	
},function(){
    $('.family .family_list').fadeOut('fast');	
});


//goToTop
$('.go_top').hide();
           
$(window).on('scroll',function(){ //스크롤 값의 변화
     var scroll = $(window).scrollTop(); //스크롤의 거리 담는 변수처리
     if(scroll>300){ 
         $('.go_top').fadeIn('slow');  //top버튼 보임
     }else{
         $('.go_top').fadeOut('fast'); //top버튼 안보임
     }
});

 $('.go_top').click(function(e){ //클릭시 상단이동->이동시 스무스하게 올라가게 처리
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":0},1000); 
 });