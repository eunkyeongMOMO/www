
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#webBG").show();
          $("#webBG").attr('src','./images/sub1/sub01_web.jpg');
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



//members_tab

$('.members_inner li:eq(0)').fadeIn() ; 
$('.members_tab li:eq(0)').addClass('current');
  
$('.members_tab .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.members_tab .tab');  // 클릭시 해당 index를 뽑아준다
      console.log(ind);

      $(".members_inner li").hide(); //모든 탭내용을 안보이게...
      $(".members_inner li:eq("+ind+")").fadeIn() ; //클릭한 해당 탭내용만 보여라
      $('.members_tab li').removeClass('current');
      $(this).parent('li').addClass('current');
 });

//popup

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