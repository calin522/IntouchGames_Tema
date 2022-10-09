import "./styles/main.css";

const btnData = document.getElementById("btnData1");
const btnNewList = document.getElementById("newlist-btn");

function changeToNewlist() {
  window.history.pushState("", "", "http://localhost:3000/?modules=newlist");
}

(async () => {
  const pathName = window.location.search;
  const showNewList = pathName === "?modules=newlist";
  const showChangeSidebar = pathName === "?modules=changesidebar";
  const showChangeSidebarAndNewList =
    pathName === "?modules=changesidebar,newlist";
  const menuHamburgerBtn = document.getElementById("menuButtonStyle");
  const menuHamburger = document.getElementById("mySidenav");
  const { retrieveData1 } = await import("./api1-module");
  const { retrieveData2 } = await import("./api2-module");

  if (showNewList) {
    btnData.addEventListener("click", retrieveData2);
  } else if (showChangeSidebar) {
    btnData.addEventListener("click", retrieveData1);
    menuHamburgerBtn.classList.add("right-menu-btn");
    menuHamburger.classList.add("right-menu");
  } else if (showChangeSidebarAndNewList) {
    btnData.addEventListener("click", retrieveData2);
    menuHamburgerBtn.classList.add("right-menu-btn");
    menuHamburger.classList.add("right-menu");
  } else {
    btnData.addEventListener("click", retrieveData1);
  }
})();
