//<!-- Back End -->
function Task(description){
  this.taskName = description;
  this.finished = false;
  this.assignedTo = "";
}

Task.prototype.toggleTask = function() {
  this.finished = !this.finished;
}

//<!-- Front End  -->
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var myTask = new Task($("#input").val());
    $("#result ul").append("<li>" + myTask.taskName + "</li>");
    $("li").last().click(function() {
      myTask.toggleTask();
      if(myTask.finished) {
        $(this).addClass("done");
      } else {
        $(this).removeClass("done");
      }
    });
    $("form")[0].reset();
  });
});
