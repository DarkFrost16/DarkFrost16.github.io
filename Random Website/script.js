$(document).ready(function() {

  $(".bigger").click(function(event){
    event.preventDefault();
    $(".bigger").animate({"font-size":"100px"});
  });

  $(".big_image").mouseover(function(event){
    event.preventDefault();
    $(".big_image").animate({"width":"500px"});
    $(".big_image").animate({"width":"300px"});
  });
});
