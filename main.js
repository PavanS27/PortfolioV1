$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $("nav a[href*='#']").on("click", function() {
    $("html,body").animate(
      (keyframes = {
        scrollTop: $($(this).attr("href")).offset().top - 100
      }),
      (options = 2000)
    );
  });

  $("#up").on("click", function() {
    $("html,body").animate(
      (keyframes = {
        scrollTop: 0
      }),
      (options = 2000)
    );
  });
});
