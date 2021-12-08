import "./header.js";
import "./menu.js";
import "./home.js";
import "./style.css";

const MENU_NAVBAR = document.querySelector(".navbar_menu");
const MENU = document.querySelector("select");

MENU_NAVBAR.addEventListener("click", () => {
  MENU.style.display = "block";
  HOME.style.display = "none";
});

const HOME_NAVBAR = document.querySelector(".navbar_home");
const HOME = document.querySelector(".home");
HOME_NAVBAR.addEventListener("click", () => {
  HOME.style.display = "flex";
  MENU.style.display = "none";
});
