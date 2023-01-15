$(document).on("click", ".accordion-button", (e) => {
  const parent = $(e.target).closest("header");
  parent.toggleClass("active");
});

$(".live-casino-slider").slick({ arrows: false, dots: true });
$(".sports-betting-slider").slick({ arrows: false, dots: true });
