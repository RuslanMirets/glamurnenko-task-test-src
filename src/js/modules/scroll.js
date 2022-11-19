jQuery(function ($) {
	var $nav = $(".header");
	var $win = $(window);
	var winH = $win.height();

	$win
		.on("scroll", function () {
			$nav.toggleClass("fixed", $(this).scrollTop() > winH);
		})
		.on("resize", function () {
			winH = $(this).height();
		});
});
