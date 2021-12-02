import { showMenu } from "./menu";

export function showHeader() {
  const HEADER = document.createElement("header");
  document.body.appendChild(HEADER);

  const LOGO = document.createElement("h1");
  LOGO.textContent = "Restaurant";
  LOGO.classList.add("logo");
  HEADER.appendChild(LOGO);

  const NAVBAR = document.createElement("div");
  NAVBAR.classList.add("navbar");
  HEADER.appendChild(NAVBAR);
  const MENU = document.createElement("p"),
    ORDER = document.createElement("p"),
    ABOUT = document.createElement("p");

  MENU.textContent = "Menu";
  MENU.classList.add("navbar_item");
  ORDER.textContent = "Order";
  ORDER.classList.add("navbar_item");
  ABOUT.textContent = "About";
  ABOUT.classList.add("navbar_item");
  NAVBAR.append(MENU, ORDER, ABOUT);
  MENU.addEventListener("click", () => {
    showMenu();
  });
}
