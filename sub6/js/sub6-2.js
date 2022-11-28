//json import
var jobInfoData = new XMLHttpRequest();  
var responseObject;

jobInfoData.onload = function() { 
 responseObject = JSON.parse(jobInfoData.responseText); 
};
jobInfoData.open('GET', './js/job.json', true); 
jobInfoData.send(null);                                 


//modal popup
let ind = 0;
let popup_text ='';
function popchange(){
  popup_text ='';

  popup_text+= '<img src="./images/content2/'+responseObject.job[ind].photo+'.jpg" alt=""/>'
  popup_text+= '<strong>'+responseObject.job[ind].title+'</strong>';
  popup_text+= '<dl>';
  popup_text+= '<dt>직무소개</dt>';
  popup_text+= '<dd>'+responseObject.job[ind].main_text1+'</dd>';
  popup_text+= '<dd>'+responseObject.job[ind].main_text2+'</dd>';
  popup_text+= '</dl>';
  popup_text+= '<dl>';
  popup_text+= '<dt>필요역량</dt>';
  popup_text+= '<dd>'+responseObject.job[ind].ability1+'</dd>';
  popup_text+= '<dd>'+responseObject.job[ind].ability2+'</dd>';
  popup_text+= '</dl>';
  popup_text+= '<dl>';
  popup_text+= '<dt>관련전공</dt>';
  popup_text+= '<dd>'+responseObject.job[ind].major+'</dd>';
  popup_text+= '</dl>';
  popup_text+= '<dl>';
  popup_text+= '<dt>배치부서</dt>';
  popup_text+= '<dd>'+responseObject.job[ind].team+'</dd>';
  popup_text+= '</dl>';
  popup_text+= '<a href="https://dream.kolon.com/RECRUIT_KOLON/hr/rec/recruit/jobopen/controller/candidate/JobOpen310WebController/init.hr" target="_blank" title="지원공고창이 새창에서열림">지원공고 보러가기</a>'
  
  $('.job_popup .info').html(popup_text);}

$('.content_area a').click(function(e){
  e.preventDefault();
  ind = $(this).index('.content_area a'); 
  console.log(ind);
  $('.content_area .modal_box').fadeIn('fast');
  $('.job_popup').fadeIn('slow');
  popchange();});

$('.content_area .modal_box').click(function(e){
  e.preventDefault();
  $('.content_area .modal_box').fadeOut('fast');
  $('.job_popup').fadeOut('fast');
});

  // scrollEvent
  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    if(scroll >$('#content .content01').offset().top-700){
         $('#content .content01').addClass('moved')}
    if(scroll >$('#content .content02').offset().top-700){
         $('#content .content02').addClass('moved')}
})
  
