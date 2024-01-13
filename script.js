const closeBtn = document.querySelector(".close-btn");
const menuBar = document.querySelector(".header__mobile-menu-img");
const navbar = document.querySelector(".navbar");
const mainHeroImg = document.querySelector(".main__hero-img");

//function which change the collapse icons when navitem is hovered
const changingTheCollapseIcons = function (e, src) {
  const navItem = e.target.closest(".navbar__list-item");

  const iconCollapse = navItem.querySelector(".icon-collapse");

  //if the navItem doesn't contain the collapse icon return from the function
  if (!iconCollapse) return;

  const iconCollapseSrc = iconCollapse.src;

  if (iconCollapseSrc.includes("arrow-down")) {
    iconCollapse.src = `${src}`;
  }
};

["mouseover", "mouseout"].forEach((ev) => {
  navbar.addEventListener(ev, function (e) {
    changingTheCollapseIcons.call(
      null,
      e,
      ev === "mouseover"
        ? `./images/icon-arrow-down-black.svg`
        : `./images/icon-arrow-down.svg`
    );
  });
});

//function
//a function which hides and expand the navbar
const hidingAndDisplayTheNavbar = function () {
  navbar.classList.toggle("move-to-right");
};

[closeBtn, menuBar].forEach((el) => {
  el.addEventListener("click", hidingAndDisplayTheNavbar);
});

//handling the dropdown in the mobile view
navbar.addEventListener("click", function (e) {
  const collapseIcon = e.target.closest(".icon-collapse");

  if (!collapseIcon) return;

  const iconSrc = collapseIcon.src;
  const paragraphBeforeTheIcon = collapseIcon.previousElementSibling;

  const navCollapseItems = collapseIcon.nextElementSibling;

  if (iconSrc.includes("icon-arrow-down")) {
    collapseIcon.src = `./images/icon-arrow-up-black.svg`;
    collapseIcon.alt = "icon which shows the drop down menu below is expanded";

    paragraphBeforeTheIcon.style.color = `var(--almost-black)`;
    navCollapseItems.classList.add("expand-drop-down");
    navCollapseItems.classList.remove("not-open");
  } else {
    collapseIcon.src = `./images/icon-arrow-down.svg`;
    collapseIcon.alt =
      "icon which shows the drop down menu below is collpassed";
    paragraphBeforeTheIcon.style.color = `var(--medium-gray)`;
    navCollapseItems.classList.remove("expand-drop-down");
    navCollapseItems.classList.add("collapse");

    setTimeout(function () {
      navCollapseItems.classList.remove("collapse");
      navCollapseItems.classList.add("not-open");
    }, 500);
  }
});

const addEvent = function (eventName, callback) {
  window.addEventListener(eventName, callback);
};

const changeHeroImgSrc = function () {
  const windowSize = window.innerWidth;

  if (windowSize >= 1200) {
    mainHeroImg.src = `./images/image-hero-desktop.png`;
  } else if (windowSize < 1200) {
    mainHeroImg.src = `./images/image-hero-mobile.png`;
  }
};

addEvent("load", changeHeroImgSrc);
addEvent("resize", changeHeroImgSrc);
