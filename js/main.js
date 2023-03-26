$(document).ready(function(){

  //slider function
  $(function(){
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        responsive: true,
        pager: false
      });
    });

  //theme selector
  const theme = $("#theme");
  $("#to-theme-1").click(function(){
    theme.attr("href", "css/theme-1.css");
  });

  $("#to-theme-2").click(function(){
    theme.attr("href", "css/theme-2.css");
  });

  $("#to-theme-3").click(function(){
    theme.attr("href", "css/theme-3.css");
  });

  $("#to-theme-4").click(function(){
    theme.attr("href", "css/theme-4.css");
  });

});