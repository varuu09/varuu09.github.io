"use strict";

$(document).ready(function(){
		  $(".foot a, .navbar a, footer a[href='#myNav']").on('click', function(event) {
		  if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 900, function(){
			  window.location.hash = hash;
			  });
			}
		  });
		})


  $(window).on('load',function(){
	        $('#myModal').modal('show');
	    });