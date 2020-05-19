$(function(){
  var header = $("#header"),
   introH = $("#intro").innerHeight(),
   scrolloffset = $(window).scrollTop();

   checkScroll(scrolloffset);

  $(window).on("scroll", function(){
    scrolloffset = $(this).scrollTop();

    checkScroll(scrolloffset);
  });


    function checkScroll(scrolloffset){
      if(scrolloffset >= introH-10){
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }

// scroll

$("[data-scroll]").on("click", function(event){
  event.preventDefault();
  var blockId = $(this).data('scroll'),
  blockoffset = $(blockId).offset().top;

  $("html, body").animate({
    scrollTop: blockoffset
  }, 800);


});


// burger_menu


$("#nav_toggle").on("click", function(event){
  event.preventDefault();
  $(this).toggleClass("active");
  $("nav").toggleClass("active");
});


}); // end
