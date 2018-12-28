function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById('readMoreBtn');

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read More";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read Less";
		moreText.style.display = "inline";
	}
}

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass('active');
});