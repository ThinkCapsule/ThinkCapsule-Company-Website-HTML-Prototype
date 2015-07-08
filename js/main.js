//*** Adds scrolling functionality

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$('.page-scroll').hover(function() {
    $('a', $(this).closest('.page-scroll')).css('text-decoration', 'underline');
	}, function() {
    $('a', $(this).closest('.page-scroll')).css('text-decoration', 'none');
});

//*** adding hambyrger button
$('.hamburger').on('click',function(event){
	showMenu();
});
$('.menu .page-scroll').on('click',function(event){
	showMenu();
});

function showBurger(){
	if (window.innerWidth < 750) {
    	$('.nav .page-scroll').hide();
    	$('.hamburger').show();
	}
    else if (window.innerWidth >= 750){
    	$('.menu').hide();
		$('.hamburger').hide();
		$('.nav .page-scroll').show();
	}
}
function showMenu(){
	$( ".menu" ).animate({
    	height: "toggle"
  	}, 500, function() {
    // Animation complete.
  	});
}
//  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent
window.onresize = function() {
    showBurger();
}
$( window ).preLoad(function() {
  	showBurger();
});


//*** For the job descriptions

var careersText1 = $('.careersText1');
var careersText2 = $('.careersText2');
var careersText3 = $('.careersText3');

// Refactor this, never repeat yourself
 
var applyWindow = $('#applyWindow'); // the application popup
var jobDescSection = $('#hideAfterApply'); // the job descriptions

function showCareersText1() {

	if (jobDescSection.is($('.hidden'))) {
		closeApplyWindow();
	}

	careersText2.addClass('hidden');
	careersText3.addClass('hidden');
	careersText1.removeClass('hidden');

}


function showCareersText2() {

	if (jobDescSection.is($('.hidden'))) {
		closeApplyWindow();
	}
	careersText3.addClass('hidden');
	careersText1.addClass('hidden');
	careersText2.removeClass('hidden');
}

function showCareersText3() {
	
	if (jobDescSection.is($('.hidden'))) {
		closeApplyWindow();
	}

	careersText2.addClass('hidden');
	careersText1.addClass('hidden');
	careersText3.removeClass('hidden');
}

//*** For opening the applyWindow 



function openApplyWindow() {
	applyWindow.removeClass('hidden');
	jobDescSection.addClass('hidden');
}

function closeApplyWindow() {
	applyWindow.addClass('hidden');
	jobDescSection.removeClass('hidden');
}
