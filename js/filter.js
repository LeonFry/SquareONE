$(function () {
	$('.filter-trigger').on('click', function (e) {
		$(this).toggleClass('active');
		$(this).siblings('.filter-container').toggleClass('is-active');
		$(this).siblings('.filter-selector').toggleClass('is-active');
	})
})
$(document).ready(function(){
    $(".load-button").click(function(){
        alert("Width of div: " + $(".copy-cat").width());
    });
});
/*window.onresize = function() {
 $(document).ready(function(){
      $(".copy-cat").width(masterwide);  
});
var masterwide = $(".dyno-width").width()+"px";
}*/

$(document).ready(function calculateLIsInRow() {
    var lisInRow = 0;
    $('ul li').each(function() {
        if($(this).prev().length > 0) {
            if($(this).position().top != $(this).prev().position().top) return false;
            lisInRow++;
        }
        else {
            lisInRow++;   
        }
    });
var x = lisInRow;
var y = 2;
var masterwide = x * y + 'rem';
$(".copy-cat").width(masterwide)
})

calculateLIsInRow();

$(window).resize(calculateLIsInRow);



