// 스크롤바 이벤트
let barSize = 16.66;
let barTotal = 16.66;
let movesize3 = 300;  //li의 너비
let position3 = 0;
let newCnt = 0;
let startX, endX;
const chemicalSec = document.querySelector('.chemical_content');
const chemicalMove = document.querySelector('.chemical_content ul');
const scrollBarBlue = document.querySelector('.scrollBar span');

function touchchemicalStart(e){
 
  if(e.pageX==undefined){  //모바일이면...
    startX = e.touches[0].pageX ;
  }else{  //데스크탑이면..
    e.preventDefault();
    startX =  e.pageX;
  }
};

function touchchemicalEnd(e){

  if(e.pageX==undefined){
     endX = e.changedTouches[0].pageX;
  }else{
    
    e.preventDefault();
    endX = e.pageX;
  }

 

    if(startX > endX){
      newCnt++;

      if(newCnt >= 6){
        newCnt = newCnt - 1;
        chemicalMove.style.left = '-1500px';
      } else {
        position3 += -movesize3;
        chemicalMove.style.left = position3+'px';

        barTotal += barSize;
        scrollBarBlue.style.width = `${barTotal}%`;
        scrollBarBlue.style.transition = 'width .3s';
      }
    } else {
      newCnt--;

      if(newCnt < 0){
        newCnt = 0;
        chemicalMove.style.left = 0;
      } else {
        position3 -= -movesize3;
        chemicalMove.style.left = position3+'px';

        barTotal -= barSize;
        scrollBarBlue.style.width = `${barTotal}%`;
        scrollBarBlue.style.transition = 'width .3s';
      }
    }
 
};
chemicalSec.addEventListener('touchstart', touchchemicalStart);
chemicalSec.addEventListener('touchend', touchchemicalEnd);
chemicalSec.addEventListener('mousedown', touchchemicalStart);
chemicalSec.addEventListener('mouseup', touchchemicalEnd);