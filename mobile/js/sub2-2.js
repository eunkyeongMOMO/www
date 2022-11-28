$('.certification .tab').toggle(function(e){   
    e.preventDefault();
    $('.box').slideDown('slow')},
    function(e){
        e.preventDefault();
        $('.box').slideUp('fast')
    })