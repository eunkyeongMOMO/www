var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  //centeredSlides: true,
  spaceBetween: 10,
});

// // 스크롤바 이벤트
// let movesize3 = 150;  //li의 너비
// let position3 = 0;
// let newCnt = 0;
// let startX, endX;
// const subMenuSec = document.querySelector('.subnav');
// const subMenuMove = document.querySelector('.subnav ul');

// function touchsubMenuStart(e){
 
//   if(e.pageX==undefined){  //모바일이면...
//     startX = e.touches[0].pageX ;
//   }else{  //데스크탑이면..
//     e.preventDefault();
//     startX =  e.pageX;
//   }
// };

// function touchsubMenuEnd(e){

//   if(e.pageX==undefined){
//      endX = e.changedTouches[0].pageX;
//   }else{
    
//     e.preventDefault();
//     endX = e.pageX;
//   }
//     if(startX > endX){
//       newCnt++;

//       if(newCnt >= 4){
//         newCnt = newCnt - 1;
//         subMenuMove.style.left = '-450px';
//       } else {
//         position3 += -movesize3;
//         subMenuMove.style.left = position3+'px';

//       }
//     } else {
//       newCnt--;
//       if(newCnt < 0){
//         newCnt = 0;
//         subMenuMove.style.left = 0;
//       } else {
//         position3 -= -movesize3;
//         subMenuMove.style.left = position3+'px';
//       }
//     }
 
// };
// subMenuSec.addEventListener('touchstart', touchsubMenuStart);
// subMenuSec.addEventListener('touchend', touchsubMenuEnd);
// subMenuSec.addEventListener('mousedown', touchsubMenuStart);
// subMenuSec.addEventListener('mouseup', touchsubMenuEnd);