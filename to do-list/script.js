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
    addCardBtn.setAttribute("class", "addCard");
    addCardBtn.innerText = "+  Add card";
    board.appendChild(addCardBtn);

    addCardBtn.addEventListener("click", () => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      cards.appendChild(card);
    });
  });
}
boardmake();

// function createTask()
// function editTask()
// function deleteTask()
