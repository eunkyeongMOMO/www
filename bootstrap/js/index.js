//svg
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const path1 = document.querySelector('.path1')
const path2 = document.querySelector('.path2')
const path1Length = path1.getTotalLength()
const path2Length = path2.getTotalLength()
path1.style.strokeDasharray  = path1Length + ' ' + path1Length
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, path1Length)

path2.style.strokeDasharray  = path2Length + ' ' + path2Length
path2.style.strokeDashoffset = path2Length


function calcDashoffset(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight
  const value = length - (length * ratio)
  return value < 0 ? 0 : value > length ? length : value
}

function scrollHandler() {
  const scrollY = window.scrollY + (window.innerHeight * 0.8)
  path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
  path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
}

window.addEventListener('scroll', scrollHandler)
//lookbook tab

$('#lookBook .look_content li:eq(0)').fadeIn() ; 
$('#lookBook .look_tab li:eq(0)').addClass('current');
$('#lookBook .look_tab .tab').click(function(e){
      e.preventDefault();  
      let ind = $(this).index('#lookBook .look_tab li');  // 클릭시 해당 index를 뽑아준다
      $("#lookBook .look_content>li").hide(); //모든 탭내용을 안보이게...
      $("#lookBook .look_content>li:eq("+ind+")").fadeIn() ; //클릭한 해당 탭내용만 보여라
      $('#lookBook .look_tab li').removeClass('current');
      $(this).addClass('current');
 });

 //go_top

 $('.go_top').hide();
           
$(window).on('scroll',function(){ //스크롤 값의 변화
     var scroll = $(window).scrollTop(); //스크롤의 거리 담는 변수처리
     if(scroll>900){ 
         $('.go_top').fadeIn('slow');  //top버튼 보임
     }else{
         $('.go_top').fadeOut('fast'); //top버튼 안보임
     }
});