// When the user clicks on <div>, open the popup
function popupFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function popupFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function popupFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
function popupFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}


const sent2 = [
  "👅" + "  " + "🍑",
  "miss u" + "  " + "😈",
  "wat u doin",
  "😈" + "  " + "🍆" + "  " + "💦"
];

const buttonOk = document.getElementById("button-2");

function changeOkResults() {
  const paragraph = document.getElementById("clientError");
  paragraph.innerText = getRandomFromList(sent2);
}
buttonOk.addEventListener("click", changeOkResults);
