const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

const boardTitle = [
  { title: "Todo", id: "todo" },
  { title: "In Progress", id: "inprogress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];

function boardmake() {
  boardTitle.map((title) => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    boards.appendChild(board);

    const head = document.createElement("div");
    head.setAttribute("class", "head");
    head.innerText = title.title;
    board.appendChild(head);

    const cardCount = document.createElement("p");
    cardCount.innerText = 0;
    head.appendChild(cardCount);

    const cards = document.createElement("div");
    cards.setAttribute("class", "cards");
    board.appendChild(cards);

    const addCardBtn = document.createElement("button");
    addCardBtn.setAttribute("class", "addCardBtn");
    addCardBtn.innerText = "+  Add card";
    board.appendChild(addCardBtn);

    addCardBtn.addEventListener("click", () => {
      const addCardDiv = document.createElement("div");
      addCardDiv.setAttribute("class", "addCardDiv");
      root.appendChild(addCardDiv);

      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      addCardDiv.appendChild(modal);

      const modalHEader = document.createElement("h1");
      modalHEader.innerText = "Add Task";
      modal.appendChild(modalHEader);

      const title = document.createElement("input");
      title.setAttribute("class", "title");
      modal.appendChild(title);

      const description = document.createElement("input");
      description.setAttribute("class", "description");
      description.setAttribute("id", "description");
      modal.appendChild(description);

      const status = document.createElement("select");
      const statusTodo = document.createElement("option");
      statusTodo.innerText = "To do";
      status.appendChild(statusTodo);
      const statusInprogress = document.createElement("option");
      statusInprogress.innerText = "In progress";
      status.appendChild(statusInprogress);
      const statusStuck = document.createElement("option");
      statusStuck.innerText = "Stuck";
      status.appendChild(statusStuck);
      const statusDone = document.createElement("option");
      statusDone.innerText = "Done";
      status.appendChild(statusDone);
      modal.appendChild(status);

      const qqqq = document.createElement("select");
      qqqq.innerText = "choose";
      const qq1 = document.createElement("option");
      qq1.setAttribute("value", "qq1");
      qq1.innerText = "qq1";
      qqqq.appendChild(qq1);
      const qq3 = document.createElement("option");
      qq3.setAttribute("value", "qq3");
      qq3.innerText = "qq3";
      qqqq.appendChild(qq3);
      const qq2 = document.createElement("option");
      qq2.setAttribute("value", "qq2");
      qq2.innerText = "qq2";
      qqqq.appendChild(qq2);
      modal.appendChild(qqqq);

      const priority = document.createElement("select");
      const priorityLow = document.createElement("option");
      priorityLow.innerText = "Low";
      priority.appendChild(priorityLow);

      const priorityMedium = document.createElement("option");
      priorityMedium.innerText = "Medium";
      priority.appendChild(priorityMedium);

      const priorityHigh = document.createElement("option");
      priorityHigh.innerText = "High";
      priority.appendChild(priorityHigh);
      modal.appendChild(priority);

      const addTaskBtn = document.createElement("button");
      addTaskBtn.setAttribute("class", "addTaskBtn");
      addTaskBtn.innerText = "Add Task";
      modal.appendChild(addTaskBtn);

      addTaskBtn.addEventListener("click", () => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        cards.appendChild(card);

        const cardTitle = document.createElement("h2");
        cardTitle.innerText = title.value;
        card.appendChild(cardTitle);

        const cardDescription = document.createElement("p");
        cardDescription.innerText = description.value;
        card.appendChild(cardDescription);
      });
    });
  });
}
boardmake();

// function createTask()
// function editTask()
// function deleteTask()
