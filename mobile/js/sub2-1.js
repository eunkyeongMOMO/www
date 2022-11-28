
let movesize5 = 320;  //li의 너비
let position5 = 0;
let newCnt2 = 0;
let startX2, endX2;
const safetySec = document.querySelector('.safety01');
const safetyMove = document.querySelector('.safety01 ul');

function touchsafetyStart(e){
 
  if(e.pageX==undefined){  //모바일이면...
    startX2 = e.touches[0].pageX ;
  }else{  //데스크탑이면..
    e.preventDefault();
    startX2 =  e.pageX;
  }
};

function touchsafetyEnd(e){

  if(e.pageX==undefined){
     endX2 = e.changedTouches[0].pageX;
  }else{
    
    e.preventDefault();
    endX2 = e.pageX;
  }

 

    if(startX2 > endX2){
      newCnt2++;

      if(newCnt2 >= 8){
        newCnt2 = newCnt2 - 1;
        safetyMove.style.left = '-1600px';
      } else {
        position5 += -movesize5;
        safetyMove.style.left = position5+'px';
      }
    } else {
      newCnt2--;

      if(newCnt2 < 0){
        newCnt2 = 0;
        safetyMove.style.left = 0;
      } else {
        position5 -= -movesize5;
        safetyMove.style.left = position5+'px';
      }
    }
 
};
safetySec.addEventListener('touchstart', touchsafetyStart);
safetySec.addEventListener('touchend', touchsafetyEnd);
safetySec.addEventListener('mousedown', touchsafetyStart);
safetySec.addEventListener('mouseup', touchsafetyEnd);