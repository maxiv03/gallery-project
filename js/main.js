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
  if(actualTheme != null){
    theme.attr("href", `css/${actualTheme}.css`);
  }

  $("#to-theme-1").click(function(){

    $('html, body').fadeOut(500, function(){
      theme.attr("href", "css/theme-1.css");
    });
    $('html, body').fadeIn(500);

    localStorage.setItem("actual-theme", "theme-1");
  });

  $("#to-theme-2").click(function(){

    $('html, body').fadeOut(500, function(){
      theme.attr("href", "css/theme-2.css");
    });
    $('html, body').fadeIn(500);

    localStorage.setItem("actual-theme", "theme-2");
  });

  $("#to-theme-3").click(function(){

    $('html, body').fadeOut(500, function(){
      theme.attr("href", "css/theme-3.css");
    });
    $('html, body').fadeIn(500);

    localStorage.setItem("actual-theme", "theme-3");
  });

  $("#to-theme-4").click(function(){
    
    $('html, body').fadeOut(500, function(){
      theme.attr("href", "css/theme-4.css");
    });
    $('html, body').fadeIn(500);

    localStorage.setItem("actual-theme", "theme-4");
  });

  //Scroll to the start of the page
  $(".to-start").click(function(e){
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500)

    return false;
  });

});