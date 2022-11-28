
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#webBG").show();
          $("#webBG").attr('src','./images/sub3/sub03_web.jpg');
          $("#mobileBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#webBG").hide();
          $("#webBG").attr('src','');
          $("#mobileBG").show();
          current=false;
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(){
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });

  //popup

  $('.popup-youtube').click(function(e){
    e.preventDefault();
    $(this).siblings('.modal_box').fadeIn('fast');
    $(this).siblings('.popup').fadeIn('slow');
  });
  
  $('.modal_box').click(function(e){
    e.preventDefault();
    $(this).fadeOut('fast');
    $(this).siblings('.popup').fadeOut('fast');
    var video = $("#youtube-player").attr("src");
    $("#youtube-player").attr("src",""); 
    $("#youtube-player").attr("src",video);
  });
  
  $('.close_btn').click(function(e){
    e.preventDefault();
    $('.modal_box').fadeOut('fast');
    $(this).parents('.popup').fadeOut('fast');
    var video = $("#youtube-player").attr("src");
    $("#youtube-player").attr("src",""); 
    $("#youtube-player").attr("src",video);
  });
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    //centeredSlides: true,
    spaceBetween: 10,
  });
  