const btn = document.querySelector(".footer__btn");

btn.addEventListener("click", function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
