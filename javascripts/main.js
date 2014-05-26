console.log('This would be the main JS file.');

$(document).ready(function(){
	
	console.log('ready to work');

//Control del boton de subir arriba
$(window).scroll(function(){
	if($(this).scrollTop() > 400){
		$(".subirArriba").fadeIn();
	} else {
		$(".subirArriba").fadeOut();
	}	
});

$(".subirArriba").click(function(){
	$("html, body").animate({scrollTop : 0}, 600);
	return false;
	});	
});