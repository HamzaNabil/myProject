$(document).ready(function () {
  $("a").click(function () {
    var myHref = $(this).attr("href").split("#")[1];

    $("html,body").animate({
      scrollTop: $("." + myHref).offset().top,
    });

    console.log("hamada");
    
    console.log("new line")
  });
}); // End jQuery
