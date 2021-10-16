$(document).ready(function () {
  $(".card").on("mouseenter", function () {
    $(this)
      .not($(".card.yellow"))
      .not($(".card.title"))
      .siblings(".card.two")
      .addClass("cardOnHover");
  });

  $(".card").on("mouseleave", function () {
    $(this)
      .not($(".card.yellow"))
      .not($(".card.title"))
      .siblings(".card.two")
      .removeClass("cardOnHover", 200, "easeInBack");
  });
  $(".card.yellow").on("mouseenter", function () {
    $(this)
      .not($(".card.title"))
      .siblings(".card.two")
      .addClass("cardOnHoverYellow");
  });

  $(".card.yellow").on("mouseleave", function () {
    $(this)
      .not($(".card.title"))
      .siblings(".card.two")
      .removeClass("cardOnHoverYellow", 200, "easeInBack");
  });
});
