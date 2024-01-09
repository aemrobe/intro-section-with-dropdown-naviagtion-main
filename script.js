const closeBtn = document.querySelector(".close-btn");
const menuBar = document.querySelector(".header__mobile-menu-img");
const navbar = document.querySelector(".navbar");
const collapseItems = document.querySelector(".navbar__collapsed-items");
const iconCollapse = document.querySelector(".icon-collapse");

iconCollapse.addEventListener("click", function () {
  collapseItems.classList.remove("hide-the-item");
  collapseItems.classList.add("showtheItem");
  iconCollapse.src = `./images/icon-arrow-up.svg`;
  iconCollapse.alt = "icon which shows the lists are expanded";

  //changing the icon collapse to the icon expanded
  iconCollapse.setAttribute("class", "icon-expanded");

  const iconExpanded = document.querySelector(".icon-expanded");

  iconExpanded.addEventListener("click", function () {
    console.log("icon expanded");
    collapseItems.classList.add("hide-the-item");

    iconCollapse.src = `./images/icon-arrow-down.svg`;
    iconCollapse.alt = "icon which shows the lists are collapsed";

    //changing the icon collapse to the icon expanded
    iconExpanded.setAttribute("class", "icon-collapse");

    collapseItems.addEventListener(
      "animationend",
      function () {
        collapseItems.classList.remove("showtheItem");
      },
      {
        once: true,
      }
    );
  });
});

const hidingAndDisplayTheNavbar = function () {
  navbar.classList.toggle("move-to-right");
};
closeBtn.addEventListener("click", hidingAndDisplayTheNavbar);

menuBar.addEventListener("click", hidingAndDisplayTheNavbar);
