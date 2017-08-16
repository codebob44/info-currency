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
// if user age = null, then display demographic survey and hide the interest survey

// else if user movies = null, then display interest survey and hide demographic survey

// else write out Check back in for additional surveys and see if your information has been purchased



});
