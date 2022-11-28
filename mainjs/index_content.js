

//비주얼이미지 슬라이드 처리
    let timeonoff;   //타이머 처리
    let imageCount=$('.gallery ul li').size();   
    let cnt=1;  
    let onoff=true; 
    $('.mbutton').css({'background':'#fff','width':16,'height':16});//버튼불다꺼!!
    $('.btn1').css({'border':'1px solid #fff','width':32,'height':32,'background':'none','opacity':1});
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..

 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화
      cnt++;
     $('.gallery li').fadeOut('fast'); //모든 이미지를 보이지 않게.
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
     $('.gallery li .slogan').css('bottom',200).css('opacity',0);
     $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({bottom:300, opacity:1},'slow');
	
      $('.mbutton').css({'background':'#fff','width':16,'height':16}); // 버튼 원래의 너비
      $('.btn'+cnt).css({'border':'1px solid #fff','width':32,'height':32,'background':'none','opacity':1})
      $('.gallery li .slogan').css('bottom',200).css('opacity',0);
      $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({bottom:300, opacity:1},'slow');

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);
   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     let $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	    $('.gallery li').fadeOut('fast');

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }else if($target.is('.btn4')){
				 cnt=4; 
		  }else if($target.is('.btn5')){
				 cnt=5; 
		  } 

		  $('.gallery .link'+cnt).fadeIn('slow'); 
      $('.mbutton').css({'background':'#fff','width':16,'height':16});
      $('.btn'+cnt).css({'border':'1px solid #fff','width':32,'height':32,'background':'none','opacity':1})
      $('.gallery li .slogan').css('bottom',200).css('opacity',0);
      $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({bottom:300, opacity:1},'slow');
      if(cnt==imageCount)cnt=0; 
      timeonoff= setInterval( moveg , 4000); 
      if(onoff==false){ 
            onoff=true; 
            $('.ps').css('background','url(images/stop.png)');
      }
      
    });

  $('.ps').click(function(){ 
     if(onoff==true){
	       clearInterval(timeonoff);   
		     $(this).css('background','url(./images/play.png)');
         onoff=false;   
	   }else{ 
		   timeonoff= setInterval( moveg , 4000); 
		   $(this).css('background','url(./images/stop.png)');
		   onoff=true; 
	   }
  });	


    $('.visual .btn').click(function(){
      clearInterval(timeonoff); 
      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }
    $('.gallery li').fadeOut('fast'); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow');
                        
    $('.mbutton').css({'background':'#fff','width':16,'height':16});
    $('.btn'+cnt).css({'border':'1px solid #fff','width':32,'height':32,'background':'none','opacity':1})
    $('.gallery li .slogan').css('bottom',200).css('opacity',0);
    $('.gallery .link'+cnt).find('.slogan').delay(1000).animate({bottom:300, opacity:1},'slow');

    timeonoff= setInterval( moveg , 4000); 

    if(onoff==false){
      onoff=true;
      $('.ps').css('background','url(./images/stop.png)');
    }
  });


//safety_content 슬라이드처리

var content = [
  {title:'안전보건 경영방침', sub_text:'기업 경영활동 전반에서 최우선 핵심가치로 실천하고 법규 및 기준을 준수하는 안전보건 관리체계를 구축합니다.',},
  {title:'안전보건 경영인증', sub_text:'코오롱글로벌 주식회사는 재해예방을 위해 안전보건경영시스템을 체계적으로 추진해 나아가고 있습니다.',},
  {title:'안전보건 경영시스템', sub_text:'경영이념과 비전을 전 임직원과 공유하고 회사가 추구하는 목표와 가치달성을 위한 국내외 안전보건활동을 적극 동참하고 실천하고 있습니다.',},
  {title:'안전보건 상생경영', sub_text:'최첨단 안전보건 스마트 IOT 기술을 사업장에 지원하고 있으며 우수협력사 육성을 위해 다양하고 지속적인 자원을 제공하고 있습니다.',},
];
var ind = 0;  
var text ='';

function safetychange(){
$('.safety_inner .safety_left img').attr('src','./images/safety_img0'+(ind+1)+'.jpg');
text ='';
text+= '<dl>';
text+= '<dt>'+content[ind].title+'</dt>';
text+= '<dd>'+content[ind].sub_text+'</dd>';
text+= '</dl>';
text+= '<a class="more_blue" href="./sub2/sub2_'+(ind+1)+'.html"><span>VIEW MORE</span></a>';
$('.safety_right .content').html(text);
}

$('.side_link a').click(function(e){
 e.preventDefault();

if($(this).hasClass('left')){
    if(ind==0)ind=content.length;
    ind--;
    safetychange();
}else if($(this).hasClass('right')){
    if(ind==content.length-1)ind=-1;
    ind++;
    safetychange();
}
});

//news_content 슬라이드처리

let position=0;  //최초위치
let movesize=$('.content_box .news_list li').outerWidth(true);
$('.content_box .news_list').after($('.content_box .news_list').clone());
$('.button_box .button').click(function(e){
 e.preventDefault();
 if($(this).is('.left')){  //이전버튼 클릭
     position-=movesize; 
     console.log(position);
    $('.content_box').animate({left:position}, 'fast', 
            function(){			
                if(position<=-2000){
                    $('.content_box').css('left',0);
                    position=0;
                }
            }).clearQueue();
           
 }else if($(this).is('.right')){  //다음버튼 클릭
       if(position==0){
            $('.content_box').css('left',-2000);
            position=-2000;
        }//제일 처름 오른쪽버튼을 경우, left값을 변경해줘야한다.


      position+=movesize; // 150씩 증가
      $('.content_box').animate({left:position}, 'fast',
      function(){							
        if(position>=0){
        $('.content_box').css('left',-2000);
        position=-2000;}}).clearQueue();
  }
});
//news popup 처리


// let news_text=[ 
//   {title:"코오롱글로벌, 431억대 '영덕 호지마을 풍력사업' 수주", sub:'뉴데일리 성재용 기자',
//   main:"코오롱글로벌이 '영덕 호지마을 풍력발전사업' EPC 계약을 체결했다고 29일 공시했다. 계약금액은 431억원으로 연결기준 매출의 0.91% 규모다. 앞으로 코오롱글로벌은 경북 영덕군 영해면 괴시리 산67-1일대에 16.68㎿(5.56㎿x3기) 규모의 풍력발전단지를 건설한다. 공사기간은 실착공일부터 24개월이다."},
//   {title:'구미인동 하늘채 디어반 2차 본격 분양', sub:'대구신문 최규열 기자',
//   main:'코오롱글로벌㈜가 시공하는 ‘구미인동 하늘채 디어반 2차’ 907세대가 지난달 30일 견본주택을 공개하고 본격 분양에 들어갔다.단지가 들어서게 되는 구미시 인동 일대는 구미지역 대표적인 원도심으로 교통, 교육, 생활인프라 등의 발달로 기존 입주민들의 높은 주거만족도는 물론, 주거선호도도 상당히 높은 지역이다.'},
//   {title:'코오롱글로벌, 스마트 건설기술 공모전 개최… 7월 31일 마감', sub:'코오롱글로벌 언론보도기사',
//   main:'코오롱글로벌은 건설업의 미래 성장 동력을 확보하고 우수 기술사와의 상생 협력을 강화하기 위한 스마트 건설기술 공모전을 진행한다.공모 분야는 △통합 모니터링 및 위치 추적 등 스마트 안전·관제 기술 활용한 주거 서비스 확대 기술 등 건설 현장에 즉시 적용할 수 있는 모든 스마트 건설기술을 대상으로 한다.'},
//   {title:'코오롱글로벌, 현장 안전사고 사전예방 위한 통합관제시스템 구축', sub:' 한국금융신문 장호성 기자',
//   main:'코오롱글로벌의 통합관제센터는 모든 현장의 CCTV를 연계해 전국 각지에 흩어진 현장 상황을 한눈에 실시간으로 볼 수 있다. 이 시스템은 국내에서 유일하게 CCTV와 대시보드를 동시에 관제할 수 있는 것이 특징이다. 통합관제센터의 대시보드는 △프로젝트 현황 △고위험작업 △점검현황 △재난정보를 시각화했다.'},
//   {title:'코오롱글로벌, "커먼타운" 공간디자인페어 기획전 참여', sub:'현대경제신문 정유리기자',
//   main:'코오롱글로벌은 신개념 공유주거(Co-Living) 브랜드 [커먼타운]이 남구 삼성동 코엑스(COEX) D홀에서 열리는 2022 공간디자인페어의 기획전에 참여한다고 29일 밝혔다.오는 31일까지 진행되는 이번 전시회에서 코오롱글로벌은 공유주거 기획관을 조성해 커먼타운을 간접체험할 수 있는 기회를 제공한다. 커먼타운은 코오롱글로벌의 자회사 코오롱하우스비전과 리베토코리아가 개발 및 운영하고 각 분야의 전문가 집단과 함께 공유주거에 대한 원스톱 서비스를 제공하는 사업이다'}
// ];
// let index = 0;
// let popup_text ='';

// function popchange(){
// $('.news_popup img:eq(0)').attr('src','./images/news_popup_img0'+(index+1)+'.jpg');
// popup_text ='';
// popup_text+='<strong>'+news_text[index].title+'</strong>';
// popup_text+='<span>'+news_text[index].sub+'</span>';
// popup_text+='<p>'+news_text[index].main+'</p>';

// $('.news_popup .info').html(popup_text);}

// $('.news_list li a').click(function(e){
// e.preventDefault();
// index = $(this).index('.news_list a'); 
// $('.news .modal_box').fadeIn('fast');
// $('.news_popup').fadeIn('slow');

// popchange();

// });

// $('.close_btn,.news .modal_box').click(function(e){
// e.preventDefault();
// $('.news .modal_box').fadeOut('fast');
// $('.news_popup').fadeOut('fast');
// });



