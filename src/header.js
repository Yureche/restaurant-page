const HEADER = document.createElement("header");
document.body.appendChild(HEADER);

const LOGO = document.createElement("h1");
LOGO.textContent = "Restaurant";
LOGO.classList.add("logo");
HEADER.appendChild(LOGO);

const NAVBAR = document.createElement("div");
NAVBAR.classList.add("navbar");
HEADER.appendChild(NAVBAR);
const HOME = document.createElement("p"),
  MENU = document.createElement("p");

HOME.textContent = "Home";
HOME.classList.add("navbar_item", "navbar_home");
MENU.textContent = "Menu";
MENU.classList.add("navbar_item", "navbar_menu");
NAVBAR.append(HOME, MENU);
