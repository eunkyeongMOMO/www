

  let smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
  let on_off=false; 
    
       $('#headerArea').mouseenter(function(){
          //let scroll = $(window).scrollTop();
           $(this).css('background','#fff').css('box-shadow','3px 3px 7px 5px rgba(0,0,0,.05)');
           $('.dropdownmenu li.menu a').css('color','#333'); 
           $('h1 a').css({'background':'url(https://momo726.cafe24.com/common/images/logo333.png) no-repeat'});
           $('.login li a').css('color','#333');
           on_off=true;
       });
    
   
      $('#headerArea').mouseleave(function(){
          let scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-150 ){
               $(this).css('background','none').css('box-shadow','3px 3px 7px 5px rgba(0,0,0,0.01)');
               $('.dropdownmenu li.menu a').css('color','#fff');
               $('.login li a').css('color','#fff');
               $('h1 a').css({'background':'url(https://momo726.cafe24.com/common/images/logo.png) no-repeat'})
           }else{
               $(this).css('background','#fff').css('box-shadow','3px 3px 7px 5px rgba(0,0,0,0.02)');
               $('.dropdownmenu li.menu a').css('color','#333');}
          on_off=false; });
      
   
      $(window).on('scroll',function(){
          let scroll = $(window).scrollTop();  

           if(scroll>smh-150){
               $('#headerArea').css('background','#fff').css('box-shadow','3px 3px 7px 5px rgba(0,0,0,.05)');
               $('.dropdownmenu li a').css('color','#333');
               $('h1 a').css({'background':'url(https://momo726.cafe24.com/common/images/logo333.png) no-repeat'})
               $('.login li a').css('color','#333');


           }else{
              if(on_off==false){
                   $('#headerArea').css('background','none').css('box-shadow','3px 3px 7px 5px rgba(0,0,0,0.01)');
                   $('.dropdownmenu li a').css('color','#fff');
                   $('h1 a').css({'background':'url(https://momo726.cafe24.com/common/images/logo.png) no-repeat'});
                   $('.login li a').css('color','#fff');
                }
           }; 
           
        });
  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:360},'fast').clearQueue();
          $('h1 a').css('background','url(https://momo726.cafe24.com/common/images/logo333.png) no-repeat');
          $('#headerArea::before').css('background','#1b4a9f');
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:130},'fast').clearQueue();
     });
  
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#1b4a9f').clearQueue();
       },function() {
          $('.depth1',this).css('color','#333');
     });
    
    //logo hover 처리
    $('h1 a').hover(function(){
        $(this).css('background','url(https://momo726.cafe24.com/common/images/logocolor.png) no-repeat').clearQueue();
    },function(){
        $(this).css('background','url(https://momo726.cafe24.com/common/images/logo333.png) no-repeat');}) 
        //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:360},'fast').css('background','#fff').clearQueue();
        $('.dropdownmenu li a').css('color','#333');
        $('h1 a').css('background','url(https://momo726.cafe24.com/common/images/logo333.png) no-repeat');
        $('.login li a').css('color','#333');
        $('.login li a::after').css('background','#333')

     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:130},'normal').clearQueue();
    });

    //go_top 처리코드
            
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


    //footer family site

    
	$('.family>a').toggle(function(e){
        e.preventDefault();
		$('.family .family_list').fadeIn('slow');	
	},function(){
        $('.family .family_list').fadeOut('fast');	
	});

	//tab키 처리
	  $('.family>a').on('focus', function () {        
     $('.family .family_list').fadeIn('slow');	
       });
       $('.family .family_list li:last a').on('blur', function () {        
              $('.family .family_list').fadeOut('fast');
       });
 
