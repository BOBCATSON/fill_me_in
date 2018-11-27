$(function() {

  $('a').hover(function() {
      $(this).removeClass('active');
      setTimeout(function(){
        $(this).addClass('temp');
      },500);
    },
    function() {
      $(this).addClass('active');
    $(this).removeClass('temp');
    }
  );

});
