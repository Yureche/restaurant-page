const CONTENT = document.querySelector("#content");
const MENU_SELECT = document.createElement("select");
MENU_SELECT.classList.add("select");
const OPTION1 = document.createElement("option");
OPTION1.disabled = true;
OPTION1.selected = true;
OPTION1.text = "Choose meal";
MENU_SELECT.appendChild(OPTION1);
const MEALS = ["Pizza", "Hamburger", "Coke", "Ice Cream"];
for (let i = 0; i <= 3; ++i) {
  const OPTION = document.createElement("option");
  OPTION.text = MEALS[i];
  MENU_SELECT.appendChild(OPTION);
}
CONTENT.appendChild(MENU_SELECT);
