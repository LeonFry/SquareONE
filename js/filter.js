$(function () {
	$('.filter-trigger').on('click', function (e) {
		$(this).toggleClass('active');
		$(this).siblings('.filter-container').toggleClass('is-active');
	})
})