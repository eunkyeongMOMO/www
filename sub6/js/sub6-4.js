// JavaScript Document

	var article = $('.faq_wrap .info'); //모든 li들 담는 변수
	
  $('.faq_wrap .info .trigger').click(function(e){   //각각의 질문을 클릭하면
      e.preventDefault();

	var myArticle = $(this).parents('.info');  //클릭한 해당 메뉴에 li(리스트) 변수
	
	if(myArticle.hasClass('hide')){   //클릭한 해당 리스트 클래스 hide가 들어있을때
	    article.find('.info_cont').slideUp(100); // 모든 리스트의 답변을 닫음
		article.children('.info_tit').find('.trigger').children('i').replaceWith('<i class="fa-solid fa-plus"></i>');
        article.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 바꾼다
       
		
		myArticle.removeClass('hide').addClass('show');  // 글릭한 리스트의 클래스만 show로 바꾼다
	    myArticle.find('.info_cont').slideDown(100);  //해당 리스트의 답변을 연다.
	    $(this).children('i').replaceWith('<i class="fa-solid fa-minus"></i>');  //픽토그램 요소 변경
	 } else {  //클릭한 해당 리스트 클래스에 show 가 포함되어있는경우
	   myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
	   myArticle.find('.info_cont').slideUp(100);   //해당 리스트의 답변을 닫음
	   $(this).children('i').replaceWith('<i class="fa-solid fa-plus"></i>'); 
	}  
  });      
  
  //모두여닫기
  $('.all a').toggle(function(e){
	    e.preventDefault(); 
		article.find('.info_cont').slideDown(100);
		article.removeClass('hide').addClass('show');
		article.children('.info_tit').find('.trigger').children('i').replaceWith('<i class="fa-solid fa-minus"></i>');
		$(this).html('답변 모두닫기 <i class="fa-solid fa-minus"></i>');
	},function(e){ 
		e.preventDefault();
		article.find('.info_cont').slideUp(100);
		article.removeClass('show').addClass('hide');
		article.children('.info_tit').find('.trigger').children('i').replaceWith('<i class="fa-solid fa-plus"></i>');
		$(this).html('답변 모두보기<i class="fa-solid fa-plus"></i>');
	});

  // scrollEvent
  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    const contentLi = Number($('#content .faq_wrap li').length);
    for(let i = 0; i < contentLi; i++){
        if(scroll > $('#content .faq_wrap li:eq('+i+')').offset().top - 700){
             $('#content .faq_wrap li:eq('+i+')').addClass('moved')
        }
    }
  })