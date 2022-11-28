//network 숫자처리함수

function info_text(){
    let businessInfoText= 3240;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 3000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val))
        $(".info_bottom ul li .count1").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count1").text(number);}
    });
   businessInfoText= 47295;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 3000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val))
        $(".info_bottom ul li .count2").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count2").text(number);}
    });
   businessInfoText= 2415;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 3000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val))
        $(".info_bottom ul li .count3").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count3").text(number);}
    });
     businessInfoText= 1370;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 3000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count4").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count4").text(number);}
    });}
    let numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
//스크롤처리
let onOff=true;
 $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();//스크롤top의 좌표를 담는다
    let section2= $('#content .summary').offset().top-800 ;
    let section3= $('#content .info_top').offset().top-700 ;
    let section4= $('#content .info_bottom').offset().top-700 ;
    let section5= $('#content .business_info ul li:eq(0)').offset().top-700 ;
    let section6= $('#content .business_info ul li:eq(1)').offset().top-700 ;
    let section7= $('#content .business_info ul li:eq(2)').offset().top-700 ;
        if(scroll>section7){$('#content .business_info ul li:eq(2)').addClass('moved');}
        else if(scroll>section6){$('#content .business_info ul li:eq(1)').addClass('moved');}
        else if(scroll>section5){$('#content .business_info ul li:eq(0)').addClass('moved');}
        else if(scroll>section4){$('#content .info_bottom').addClass('moved');
                                    if(onOff==true){info_text(); onOff=false;}}
        else if(scroll>section3){$('#content .info_top').addClass('moved');}
        else if(scroll>section2){$('#content .summary').addClass('moved');}
        else if(scroll>=30){$('.investment').addClass('moved');}
    });