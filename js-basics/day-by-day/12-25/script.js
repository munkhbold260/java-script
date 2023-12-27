const queButton = document.querySelector("[name=Q]");
queButton.addEventListener("click", function () {
  document.getElementById("Q").play();
});

queButton.addEventListener("keydown", function (e) {
  if (e.key == 81) {
    document.getElementById("Q").play();
  }
});
