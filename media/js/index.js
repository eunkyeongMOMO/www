
//aespa_tab

$('.aespa .members_list>li:eq(0)').fadeIn() ; 
$('.aespa .aespa_tab>li:eq(0)').addClass('current');
  
$('.aespa .aespa_tab .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.aespa .aespa_tab .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $(".aespa .members_list>li").hide(); //모든 탭내용을 안보이게...
      $(".aespa .members_list>li:eq("+ind+")").fadeIn() ; //클릭한 해당 탭내용만 보여라
      $('.aespa .aespa_tab li').removeClass('current');
      $(this).parent('li').addClass('current');
 });

//gallery_tab

$('.gallery .gallery_list>li:eq(0)').fadeIn() ; 
$('.gallery .aespa_tab>li:eq(0)').addClass('current');
  
$('.gallery .aespa_tab .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      let ind = $(this).index('.gallery .aespa_tab .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $(".gallery .gallery_list>li").hide(); //모든 탭내용을 안보이게...
      $(".gallery .gallery_list>li:eq("+ind+")").fadeIn() ; //클릭한 해당 탭내용만 보여라
      $('.gallery .aespa_tab li').removeClass('current');
      $(this).parent('li').addClass('current');
 });

 //img_back text

 const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
  };
  
  const texts = [
      "I'm ejected",
      "only goodness",
      "I can't beat your greatness",
      "I'm exhausted,",
      "All of you",
      "Grown up on greed",
      "Espa is me, ",
      "we can't be two",
  ];
  
  const morphTime = 1;
  const cooldownTime = 0.25;
  
  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;
  
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  
  function doMorph() {
      morph -= cooldown;
      cooldown = 0;
  
      let fraction = morph / morphTime;
  
      if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
      }
      setMorph(fraction);}
  
  function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  }
  
  function doCooldown() {
      morph = 0;
  
      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";
  
      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
  }
  
  function animate() {
      requestAnimationFrame(animate);
  
      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;
  
      cooldown -= dt;
  
      if (cooldown <= 0) {
          if (shouldIncrementIndex) {
              textIndex++;
          }
  
          doMorph();
      } else {
          doCooldown();
      }
  }
  
  animate();
  

