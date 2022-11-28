
  let tab_move= $('.history_tabs li:eq(0)').offset().top;  //history_tabs 스크롤값
  let content2= $('.content_area .hiscon2 dl:eq(0)').offset().top-550;
  let content3= $('.content_area .hiscon3 dl:eq(0)').offset().top-550;
  let content4= $('.content_area .hiscon4 dl:eq(0)').offset().top-550;
 //슬라이드 메뉴 처리
$('#content .history_tabs li a').click(function(e){
e.preventDefault(); 
let value=0;
   if($(this).hasClass('his1')){   
    value= tab_move-140;  
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
      //sticky menu 처리
      if(scroll>(tab_move-140)){ 
          $('.history_tabs').addClass('tabs_on');
        //   $('.history_tabs').find('a').css('color','#fff');
          $('header').hide();
      }else{
          $('.history_tabs').removeClass('tabs_on');
        //   $('.history_tabs').find('a').css('color','#1b4aa0');
          $('header').show();}
      $('.history_tabs li').find('a').removeClass('history_current');
       if(scroll >tab_move-140 && scroll<=content2-20){
        $('.history_tabs li:eq(0)').find('a').addClass('history_current');}
      else if(scroll>=content2-20 && scroll<=content3-20){
        $('.history_tabs li:eq(1)').find('a').addClass('history_current');}
      else if(scroll>=content3-20 && scroll<=content4-20){
        $('.history_tabs li:eq(2)').find('a').addClass('history_current');}
      else if(scroll>=content4-20){
        $('.history_tabs li:eq(3)').find('a').addClass('history_current');}
  })


  //세부 텍스트처리
  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();

    const historyDl = Number($('.history dl').length);
    for(let i = 0; i < historyDl; i++){
        if(scroll > $('.history dl:eq('+i+')').offset().top - 600){
             $('.history dl:eq('+i+')').addClass('moved')
             $('.history dl:eq('+i+') dt').css('opacity','1')
        }
    }
})