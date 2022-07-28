const hamburger = document.getElementById("hamburger");
const list = document.querySelector(".list_item");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  list.classList.toggle("showHide");
});
