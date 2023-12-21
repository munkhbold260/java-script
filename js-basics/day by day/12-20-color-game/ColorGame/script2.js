const root = document.getElementById("root");
const header = document.createElement("div");
header.setAttribute("class", "head");
root.appendChild(header);

const startBtn = document.createElement("button");
startBtn.setAttribute("class", "startgame");
startBtn.innerText = "start";
header.appendChild(startBtn);

const gamebody = document.createElement("div");
gamebody.setAttribute("class", "gamebody");
root.appendChild(gamebody);

startBtn.addEventListener("click", startgame);

function startgame() {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  const red = math.floor(math.random() * 255);
  const green = math.floor(math.random() * 205) + 50;
  const blue = math.floor(math.random() * 255);
  const rand = math.floor(math.random() * 8);
  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "box");
    if (i == rand) {
      card.style.backgroundColor = `rgb(${red},${green - 50},${blue})`;
    } else {
      card.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
    box.appendChild(card);
  }
  gamebody.innerHTML = "";
  gamebody.appendChild(box);
}
// const correctBox = document.getElementsByClassName(`box${rand}`);
// correctBox.addEventListener("click", startgame);
