import Menu from "./menu.js";
import MenuJSON from "./menu-json.js";

window.onload = () => {
    new Menu(MenuJSON).init();
};