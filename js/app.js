//Problem: no user interaction working on form
//Solution: write some code for user interaction!
var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completeTaskHolder=document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString) {
  var listItem=document.createElement("li");
  var checkBox=document.createElement("input");
  var label=document.createElement("label");
  var editInput=document.createElement("input");
  var editButton=document.createElement("button");
  var deleteButton=document.createElement("button");
  // Modify elements with appropriate attibutes
  checkBox.type="checkbox";
  editInput.type="text";
  editButton.innerText="Edit";
  editButton.className="edit";
  deleteButton.innerText="Delete";
  deleteButton.className="delete";
  label.innerText=taskString;
  // Add task to list with checkbox, label, edit/delete links
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add task
var addTask=function() {
    // When button is pressed
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
  taskInput.value="";
}

// Edit task
var editTask=function() {
  var listItem = this.parentNode;
  var editButton = listItem.querySelector("button.edit");
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  // When edit clicked, change to edit mode (input?)
  if(listItem.classList.contains("editMode")) {
    label.innerText = editInput.value;
    editButton.innerTtext="Edit";
  } else {
    editInput.value=label.innerText;
    editButton.innerText="Save";
  }
listItem.classList.toggle("editMode");
}

// Delete task
var deleteTask=function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}

// Mark task as complete
var taskComplete=function() {
  var listItem = this.parentNode;
  completeTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete)
}

// Mark task as incomplete
var taskIncomplete=function() {
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete)
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type='checkbox']");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick=editTask;
  deleteButton.onclick=deleteTask;
  checkBox.onchange=checkboxEventHandler;
}

//addButton.onclick=addTask;
addButton.addEventListener("click", addTask);

for(var i=0;i<completeTaskHolder.children.length;i++) {
  bindTaskEvents(completeTaskHolder.children[i],taskIncomplete);
}

for(var i=0;i<incompleteTaskHolder.children.length;i++) {
  bindTaskEvents(incompleteTaskHolder.children[i],taskComplete);
}
