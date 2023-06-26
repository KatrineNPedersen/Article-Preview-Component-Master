"use strict";
const shareIcon = document.querySelectorAll(".icon-share");
const shareIconFirst = document.querySelector(".icon-share");
const shareLaptop = document.querySelector(".share-laptop");
let w = document.documentElement.clientWidth || window.innerWidth;

function mobile() {
  shareIcon.forEach((icon) => {
    icon.addEventListener("click", function () {
      shareIcon.forEach((icon) => {
        icon.parentElement.classList.remove("hidden");
      });
      icon.parentElement.classList.add("hidden");
    });
  });
}

function laptop() {
  shareIconFirst.addEventListener("click", function () {
    shareLaptop.classList.toggle("hidden");
    shareIconFirst.classList.toggle("icon-clicked");
  });
}

function sharePage(w) {
  if (w < 1440) {
    mobile();
  } else {
    laptop();
  }
}
sharePage(w);

window.onresize = function () {
  location.reload();
};
