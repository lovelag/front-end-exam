
$(document).ready(function(){
   $(".rightslide > .slider ol li").on("click", function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".rightslide .slider ul").animate({
        top: -$(".slider").height() * $(this).index()
    }, 500);
});

});

$(document).ready(function(){
   $(".solnright > .slider ol li").on("click", function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".solnright .slider ul").animate({
        top: -$(".slider").height() * $(this).index()
    }, 500);
});
});

$(document).ready(function(){
   $(".text-part > .slider ol li").on("click", function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".text-part .slider ul").animate({
        top: -$(".slider").height() * $(this).index()
    }, 500);
});
});

$(document).ready(function(){
$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){
    $(this).children(".video").get(0).play();   
	$(this).children(".playpause").fadeIn();
    }else{      
	$(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
    }
});
});


function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
