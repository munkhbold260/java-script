const root = document.getElementById("root");

// header uusgeh
const header = document.createElement("div");
// haeder class="head"
header.setAttribute("class", "head");
// root ruu haeder hiij baina
root.appendChild(header);

//
const startBtn = document.createElement("button");
//
startBtn.setAttribute("class", "startgame");
//
startBtn.innerText = "start";
//
header.appendChild(startBtn);
// score
const score = document.createElement("div");
score.setAttribute("class", "score");
header.appendChild(score);
let scores = 0;
score.innerHTML = scores;
//
const chance = document.createElement("div");
chance.setAttribute("class", "chance");
header.appendChild(chance);
let chances = 3;
chance.innerHTML = chances;
//
const gamebody = document.createElement("div");
//
gamebody.setAttribute("class", "gamebody");
//
root.appendChild(gamebody);

// start button deer darahad startgame function duudna
startBtn.addEventListener("click", startgame);

// startgame function
function startgame() {
  //
  const box = document.createElement("div");
  //
  box.setAttribute("class", "box");

  // red-d sanamsargui utga ugch bn
  const red = Math.floor(Math.random() * 255); // 0-255
  //
  const green = Math.floor(Math.random() * 205) + 50;
  //
  const blue = Math.floor(Math.random() * 255);
  //
  const rand = Math.floor(Math.random() * 8); // 0 1 2 3 4 5 6 7 8
  for (let i = 0; i < 9; i++) {
    //
    const card = document.createElement("div");
    card.setAttribute("id", `qwer${i}`);
    //
    card.setAttribute("class", "card");
    if (i == rand) {
      // i index rand tentsej baiwal uur ungu ugch bn
      card.style.backgroundColor = `rgb(${red}, ${green - 50}, ${blue})`;
    } else {
      // i index rand tentsehgui baiwal ijil ungu ugch bn
      card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    // card box ruu nemj bn... niit 9 udaa card nemj ugnu
    box.appendChild(card);
  }
  //   gamebody hoosolj baina. / dotor n aguulj bui buh elemntuudiig hoosolj shinechilj bn
  gamebody.innerHTML = "";

  //
  gamebody.appendChild(box);
  const correctBox = document.getElementById(`qwer${rand}`);
  correctBox.addEventListener("click", startgame);
  correctBox.addEventListener("click", addScore);
}

function addScore() {
  scores = scores + 1;
  score.innerHTML = scores;
  console.log(scores);
}
