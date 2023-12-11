import { navBar } from "./modules/navBar.js"
import { homePage } from "./modules/home.js"
import { menuPage } from "./modules/menu.js";
import "./style/style.css"
import "./style/navBarStyle.css"
import "./style/homeStyle.css"
import "./style/menuStyle.css"
let container = document.getElementById('container')
navBar()
homePage();


document.body.addEventListener('click', (event) => {
    const targetId = event.target.id;

    if (targetId === 'homeBtnNavBar') {
        container.textContent = '';
        navBar();
        homePage();
    } else if (targetId === 'menuBtnNavBar') {
        container.textContent = '';
        navBar();
        menuPage();
    }
});
