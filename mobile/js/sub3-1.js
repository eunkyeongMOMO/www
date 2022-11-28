var article = $('.motors_content .shop_list'); 
$('.motors_content .shop_list').first().find('.shop_details').slideDown(100);
$('.motors_content .shop_list').first().removeClass('hide').addClass('show'); 
  
$('.motors_content .shop_list a').click(function(e){   
      e.preventDefault();

var myArticle = $(this).parents('.shop_list'); 
if(myArticle.hasClass('hide')){   
    article.find('.shop_details').slideUp(100);
    article.removeClass('show').addClass('hide');
    myArticle.removeClass('hide').addClass('show');  
    myArticle.find('.shop_details').slideDown(100);  
 } else {  
   myArticle.removeClass('show').addClass('hide');  
   myArticle.find('.shop_details').slideUp(100);   
}  
});     

// 스크롤바 이벤트
let barSize = 10        ;
let barTotal = 10;
let movesize3 = 300;  //li의 너비
let position3 = 0;
let newCnt = 0;
let startX, endX;
const chemicalSec = document.querySelector('.bangqlufsen_content');
const chemicalMove = document.querySelector('.bangqlufsen_content .shop_list');
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

      if(newCnt >= 10){
        newCnt = newCnt - 1;
        chemicalMove.style.left = '-3050px';
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