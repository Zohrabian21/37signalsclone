$(document).ready(function() {
	$('.box1').hover(function() {
      $('.h1').html("<span>Basecamp</span>is the project management tool you wish you had on your last project.");
      $('.h2').html("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way."); 
   });
   $('.box1').hover(function() {
   	  $('.h1')toggleClass('.h1box1');
   	  $('.h2')toggleClass('.h2box2');
   });
   

});