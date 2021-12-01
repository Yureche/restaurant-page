export default function showHeader() {
  const CONTENT = document.getElementById("content");
  const HEADER = document.createElement("header");
  CONTENT.appendChild(HEADER);

  const LOGO = document.createElement("h1");
  LOGO.textContent = "Restaurant";
  LOGO.classList.add("logo");
  HEADER.appendChild(LOGO);

  const NAVBAR = document.createElement("div");
  NAVBAR.classList.add("navbar");
  HEADER.appendChild(NAVBAR);
  const HOME = document.createElement("p"),
    MENU = document.createElement("p"),
    ORDER = document.createElement("p");
  HOME.textContent = "Home";
  HOME.classList.add("navbar_item");
  MENU.textContent = "Menu";
  MENU.classList.add("navbar_item");
  ORDER.textContent = "Order";
  ORDER.classList.add("navbar_item");
  NAVBAR.append(HOME, MENU, ORDER);
}
