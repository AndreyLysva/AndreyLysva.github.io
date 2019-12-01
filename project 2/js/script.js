$(".btn-nav").on("click", function() {
	var target = $(this).data("target");
	$(target).toggleClass("card---open");
});