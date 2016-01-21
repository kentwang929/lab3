'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Yamete!")
		$(".jumbotron p").toggleClass("active");
		if($(".jumbotron p").hasClass("active"))
		{
			$(this).append("! IYA");
		}
	});

	$("a.thumbnail").click(projectClick);

 	$("#submitBtn").click(updateProject);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
	// debugging message
	// console.log("Project clicked");
	// prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to
    // the object that triggered the event   
    $(this).css("background-color", "#7fff00");

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$(".project .project-description").fadeOut(3500);
    	description.html("<p>Leave me... I have much to ponder...</p>")
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }

}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}