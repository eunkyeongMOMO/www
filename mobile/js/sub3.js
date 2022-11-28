
//tab,map 
let count=$('.sub_menu li').size(); 
$('section:eq(0)').show(); 
$('.sub_menu li:eq(0)').addClass('current');
  
$('.sub_menu .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.sub_menu .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $("section").hide(); //모든 탭내용을 안보이게...
      $("section:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
      $('.sub_menu li').removeClass('current');
      $(this).parent('li').addClass('current');
 });


