
$('.certification a').click(function(e){
    e.preventDefault();
    ind = $(this).index('.certification a'); 
    console.log(ind);
    $('.content_area .modal_box').fadeIn('fast');
    $('.safety_popup').fadeIn('slow');});
  
  $('.close_btn,.content_area .modal_box').click(function(e){
    e.preventDefault();
    $('.content_area .modal_box').fadeOut('fast');
    $('.safety_popup').fadeOut('fast');});
$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
        if(scroll >$('#content .content_area').offset().top-800){
             $('#content .certification').addClass('moved')
        }})