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

function calculateLIsInRow() {
    var lisInRow = 0;
    $('ul.dyna-width li').each(function() {
        if($(this).prev().length > 0) {
            if($(this).position().top != $(this).prev().position().top) return false;
            lisInRow++;
        }
        else {
            lisInRow++;   
        }
    });
var x = lisInRow;
var y = 18;
var pxreduce = x +'px'
var masterwide = x * y + 'rem';
$(".copy-cat").width(masterwide)
};

calculateLIsInRow();

$(window).resize(calculateLIsInRow);
$(document).ready(calculateLIsInRow);

$(document).ready(function() {
  $('ul.sorter a').click(function() {
    $(this).css('outline', 'none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');

    var filterVal = $(this).text().toLowerCase().replace(' ', '-');

    if (filterVal == 'all') {
      $('ul.card-sort li.hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('ul.card-sort li').each(function() {
        if (!$(this).hasClass(filterVal)) {
          $(this).fadeOut('normal').addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }

    return false;
  });
});


