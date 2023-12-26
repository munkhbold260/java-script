const root = document.getElementById("root");
const head = document.createElement("h1");
head.setAttribute("class", "head");
head.innerText = "ToDo-List";
root.appendChild(head);

const inputText = document.createElement("input");
inputText.setAttribute("class", "inputText");
inputText.setAttribute("placeholder", "Enter task here...");
root.appendChild(inputText);

const printedTasks = document.createElement("div");

const addTask = document.createElement("button");
addTask.setAttribute("class", "addTask");
addTask.innerHTML = "Add Task";
root.appendChild(addTask);
addTask.addEventListener("click", () => {
  printTask();
});

function printTask() {
  const printedTask = document.createElement("div");
  printedTask.setAttribute("class", "printedTask");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  printedTask.appendChild(deleteBtn);

  printedTasks.appendChild(printedTask);
}
