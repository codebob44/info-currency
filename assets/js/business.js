
$(document).ready(function(){

	$('.submitBtn').on('click', function(event){
		event.preventDefault();
		var query = {age: [], income: [], sex: [], household: []};

		var gender = $('input.gender');
		var household = $('input.household');
		var income = $('input.income');
		var age = $('input.age');
		gender.each(function(item){
			console.log($(this).prop( "checked" ), $(this).attr( "data-value" ));
			if($(this).prop("checked")){
				query.sex.push($(this).attr("data-value"));
			}
		});
		household.each(function(item){
			console.log($(this).prop( "checked" ), $(this).attr( "data-value" ));
			if($(this).prop("checked")){
				query.household.push($(this).attr("data-value"));
			}
		});
		income.each(function(item){
			console.log($(this).prop( "checked" ), $(this).attr( "data-value" ));
			if($(this).prop("checked")){
				query.income.push($(this).attr("data-value"));
			}
		});
		age.each(function(item){
			console.log($(this).prop( "checked" ), $(this).attr( "data-value" ));
			if($(this).prop("checked")){
				query.age.push($(this).attr("data-value"));
			}
		});

/*
		console.log(income);
		console.log(household);
		console.log(gender);*/


		if(!$('input#social').prop( "checked" )){
			query.social = false;
		}
		if(!$('input#sports').prop( "checked" )){
			query.sports = false;
		}
		if(!$('input#movies').prop( "checked" )){
			query.movies = false;
		}
		if(!$('input#music').prop( "checked" )){
			query.music = false;
		}
		if(!$('input#food').prop( "checked" )){
			query.fashion = false;
		}

		console.log(window.location);
		var base = window.location.origin;
		$.post(base + "/search", query, function( data ) {
			console.log('Search response',  data);
		}, "json");
	})
});