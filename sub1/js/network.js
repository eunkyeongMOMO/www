
//tab,map 
let count=$('.network_menu li').size(); 
$('.net_road li:eq(0)').show('slow'); 
$('.network_menu li:eq(0)').addClass('net_current');
$('.network_map svg #map1 path').css('fill','rgba(87, 140, 247, 0.4)')
  
$('.network_menu .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.network_menu .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $(".net_road li").hide('fast'); //모든 탭내용을 안보이게...
      $(".net_road li:eq("+ind+")").show('slow'); //클릭한 해당 탭내용만 보여라
      $('.network_menu li').removeClass('net_current');
      $(this).parent('li').addClass('net_current');
      $('.network_map svg .svg_map path').css('fill','#fff')
      $('.network_map svg #map'+(ind+1)+' path').css('fill','rgba(87, 140, 247, 0.4)')
 });


