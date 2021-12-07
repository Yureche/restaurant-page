import "./header.js";
import "./menu.js";
import "./style.css";

// const MENU_NAVBAR = document.querySelector(".menu_navbar");
const MENU_NAVBAR = document.querySelector(".navbar_menu");
const MENU = document.querySelector("select");

MENU_NAVBAR.addEventListener("click", () => {
  MENU.style.display = "block";
});
