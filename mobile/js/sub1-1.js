//network 숫자처리함수

function info_text(){
    let businessInfoText= 3240;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 4000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val))
        $(".info_bottom ul li .count1").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count1").text(number);}
    });
   businessInfoText= 47295;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 4000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val))
        $(".info_bottom ul li .count2").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count2").text(number);}
    });
   businessInfoText= 2415;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 4000,
      step: function() {
        let number = numberWithCommas(Math.floor(this.val))
        $(".info_bottom ul li .count3").text(number);},
      complete: function() {
        let number = numberWithCommas(Math.floor(this.val));
        $(".info_bottom ul li .count3").text(number);}
    });
     businessInfoText= 1370;
      $({ val : 0 }).animate({ val : businessInfoText }, {
       duration: 4000,
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
      let onOff=true;
      $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();//스크롤top의 좌표를 담는다
        let info_bottom= $('#content .info_bottom').offset().top-600 ;
         if(scroll>info_bottom){if(onOff==true){info_text(); onOff=false;}}});