const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  if (input.value.trim() === "") {
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
<span>${input.value}</span>
<button class="delete">X</button>
`;
  li.querySelector(".delete").addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
}
