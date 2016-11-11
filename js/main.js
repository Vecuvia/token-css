function hide (selector) {
  document.querySelector(selector).style.display = "none";
}

function show (selector) {
  document.querySelector(selector).style.display = "block";
}

function init_modal (selector) {
  document.querySelector(selector + "-close").addEventListener("click", function (event) {
    hide(selector);
  });
}