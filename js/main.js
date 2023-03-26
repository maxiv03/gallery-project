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
  let actualTheme = localStorage.getItem("actual-theme");
  console.log(actualTheme);
  if(actualTheme != null){
    theme.attr("href", `css/${actualTheme}.css`);
  }
  $("#to-theme-1").click(function(){
    theme.attr("href", "css/theme-1.css");
    localStorage.setItem("actual-theme", "theme-1");
  });

  $("#to-theme-2").click(function(){
    theme.attr("href", "css/theme-2.css");
    localStorage.setItem("actual-theme", "theme-2");
  });

  $("#to-theme-3").click(function(){
    theme.attr("href", "css/theme-3.css");
    localStorage.setItem("actual-theme", "theme-3");
  });

  $("#to-theme-4").click(function(){
    theme.attr("href", "css/theme-4.css");
    localStorage.setItem("actual-theme", "theme-4");
  });

});