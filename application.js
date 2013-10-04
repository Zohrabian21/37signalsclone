$(document).ready(function() {
	$('.box:nth-child(1)').hover(function(){
	  $('h1:nth-child(2), h2:nth-child(4)').hide();
	  $('h1:nth-child(3), h2:nth-child(5), img:nth-child(6)').show();
	},function(){
	  $('h1:nth-child(2), h2:nth-child(4)').show();
	  $('h1:nth-child(3), h2:nth-child(5), img:nth-child(6)').hide();
	});
	
	$('.box:nth-child(2)').hover(function(){
	  $('h1:nth-child(2), h2:nth-child(4)').hide();
	  $('h1:nth-child(7), h2:nth-child(8), img:nth-child(9)').show();
	},function(){
	  $('h1:nth-child(2), h2:nth-child(4)').show();
	  $('h1:nth-child(7), h2:nth-child(8), img:nth-child(9)').hide();
	});
	
	$('.box:nth-child(3)').hover(function(){
	  $('h1:nth-child(2), h2:nth-child(4)').hide();
	  $('h1:nth-child(10), h2:nth-child(11), img:nth-child(12)').show();
	},function(){
	  $('h1:nth-child(2), h2:nth-child(4)').show();
	  $('h1:nth-child(10), h2:nth-child(11), img:nth-child(12)').hide();
	});
	
	$('img:nth-child(6)').hover(function(){
	  $('h1:nth-child(2), h2:nth-child(4)').hide();
	  $('h1:nth-child(3), h2:nth-child(5), img:nth-child(6)').show();
	  },function(){
	  $('h1:nth-child(2), h2:nth-child(4)').show();
	  $('h1:nth-child(3), h2:nth-child(5), img:nth-child(6)').hide();
	});
});