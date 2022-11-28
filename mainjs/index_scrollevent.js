//network 숫자처리함수
function info_text(){
    let networkInfoText= 12;
      $({ val : 0 }).animate({ val : networkInfoText }, {
       duration: 3000,
      step: function() {
        let number = Math.floor(this.val);
        $(".net_info .count1").text(number);},
      complete: function() {
        let number = Math.floor(this.val);
        $(".net_info .count1").text(number);}
    });
     networkInfoText= 42;
      $({ val : 0 }).animate({ val : networkInfoText }, {
       duration: 3000,
      step: function() {
        let number = Math.floor(this.val);
        $(".net_info .count2").text(number);},
      complete: function() {
        let number = Math.floor(this.val);
        $(".net_info .count2").text(number);}
    });}
//스크롤처리
let onOff=true;
 $(window).on('scroll',function(){
    
    let scroll = $(window).scrollTop();//스크롤top의 좌표를 담는다
    //business
    let section2= $('#content .business').offset().top-700 ;
    //network
    let section3= $('#content .network').offset().top-700 ;
    //safety_helth
    let section4= $('#content .safety_health').offset().top-700 ;
    let news_sytem= $('#content .safety_health').offset().top-700 ;
    //news
    let section5= $('#content section:eq(4)').offset().top-700 ;
    //recruitment
    let section6= $('#content section:eq(5)').offset().top-900 ;
        if(scroll>section6){$('#content .recruitment').addClass('moved');} 
        else if(scroll>section5){$('#content .news').addClass('moved');}
         else if(scroll>news_sytem){$('#content .sytem').addClass('moved');}   
        else if(scroll>section4){$('#content .safety_health').addClass('moved');}
       else if(scroll>section3+600){$('#content .network svg').addClass('moved');
      if(onOff==true){info_text(); onOff=false;}}
       else if(scroll>section3){$('#content .network').addClass('moved');}
        else if(scroll>section2){$('#content .business').addClass('moved');}
        else if(scroll>=30){
             $('.investment').addClass('moved');}
    });