$(document).ready(function(){
	$('.btn').mouseenter(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('btn-info');
	});

	$('.btn').mouseleave(function(){
		$(this).removeClass('btn-info');
		$(this).addClass('btn-default');
	});
});