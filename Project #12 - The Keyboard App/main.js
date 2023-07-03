const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");

keyContainers.forEach(function (key) {
  key.addEventListener("click", function (e) {
    if (!e.target.value) return;

    let keyClicked = e.target.value.toLowerCase();
    textArea.value += keyClicked;
  });
});
