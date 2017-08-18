
$(document).ready(function(){

	$('.submitBtn').on('click', function(event){
		event.preventDefault();
		var values = $('input');
		console.log(values);
	})
});