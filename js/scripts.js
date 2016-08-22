//<!-- Back End -->
function Task(description, assignedTo){
  this.taskName = description;
  this.finished = false;
  this.assignedTo = assignedTo;
}

Task.prototype.toggleTask = function() {
  this.finished = !this.finished;
}
var tasks=[];
//<!-- Front End  -->
$(document).ready(function(){

  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var myTask = new Task($("#input").val(), $("#assignTo").val().toLowerCase());
    tasks.push(myTask);
    $("#result ul#"+myTask.assignedTo).append("<li>" + myTask.taskName + "</li>");
    $("li").last().dblclick(function() {
      myTask.toggleTask();
      if(myTask.finished) {
        $(this).addClass("done");
      } else {
        $(this).removeClass("done");
      }
    });
    $("form")[0].reset();
  });
  $( "#bob, #steve, #fred" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
  $( "#bob, #steve, #fred" ).on( "sortreceive", function( event, ui ) {
    var newAssignment = $(this).attr("id");
    var thisTask = ui.item.text();
    tasks.forEach(function(task){
      if(task.taskName === thisTask){
        task.assignedTo = newAssignment;
      }
    })
  } );
});
