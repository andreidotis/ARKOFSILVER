$(function() {
	$(window).load(function() {
		//$("#loading-center").click(function() {
		$("#loading").fadeToggle(6400);
				
	});
});

$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});