$(document).ready(function() {

    $(".nextPage").on("click", function () {
		if ($("input[value=man]:checked").val() === "man") {
			console.log("man")
		}

		else if ($("input[value=woman]:checked").val() === "woman") {
			console.log("click")
		}

  });


	//Switcher function:
	$(".rb-tab").click(function(){
	  //Spot switcher:
	  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
	  $(this).addClass("rb-tab-active");
	});


	console.log(window.location.origin);
	$('.Demographic').on('click', function(){
		var id = $('.demoUserId').text();
		var data = {
			age: 99,
			state: 'ny',
			sex: 'mail',
			income: 1000000
		};
		$.post(window.location.origin+'/update/' + id, data);
	})
	//$.post("")
// if user age = null, then display demographic survey and hide the interest survey

// else if user movies = null, then display interest survey and hide demographic survey

// else write out Check back in for additional surveys and see if your information has been purchased



});
