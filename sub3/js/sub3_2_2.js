
//scrollEvent
$(window).on('scroll',function(){
     let scroll = $(window).scrollTop();
     if(scroll >$('#content .main_img').offset().top-700){
          $('#content .main_img').addClass('moved')}
     if(scroll >$('#content .summary').offset().top-700){
          $('#content .summary').addClass('moved')}
     if(scroll >$('#content .summary2').offset().top-700){
          $('#content .summary2').addClass('moved')}
     if(scroll >$('#content .info li').offset().top-700){
          $('#content .info li').addClass('moved')}
     if(scroll >$('#content .chemical_con01').offset().top-700){
          $('#content .chemical_con01').addClass('moved')}
   
     const contentLi = Number($('#content .chemical_con01 .item li').length);
     for(let i = 0; i < contentLi; i++){
         if(scroll > $('#content .chemical_con01 .item li:eq('+i+')').offset().top - 700){
              $('#content .chemical_con01 .item li:eq('+i+')').addClass('moved')
         }
     }
   })
   