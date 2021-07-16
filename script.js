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
function popupFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}

function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
const sent1 = [
  "Your device is not connected.",
  "Make sure '[—]' is turned on and in range.",
  "Connection unsuccessful.",
  "Your connection is unstable.",
  "Out of range.",
  "Unexpected device.",
  "Bad connection."
];

const buttonRetry = document.getElementById("button-1");

function changeResults() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResults);

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
