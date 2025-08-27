import "./styles.css"
import {createHomePage} from "./modules/home";
import {createMenu} from "./modules/menu";
import { createAbout } from "./modules/about";

const contentDiv = document.getElementById('content');
contentDiv.appendChild(createHomePage());

const tabHandler = (function() {
    const contentDiv = document.getElementById('content');
    const navContainer = document.getElementById('nav-buttons');

    const clearContent = () => contentDiv.innerHTML = '';

    // Render homepage upon website initial load
    clearContent();
    contentDiv.appendChild(createHomePage());

    navContainer.addEventListener('click', (event) => {
        const selectedBtn = event.target;

        switch(selectedBtn.id) {
            case 'home-btn':
                displayHomePage();
                break;
                
            case 'menu-btn':
                displayMenu();
                break;

            case 'about-btn':
                displayAbout();
                break;

            default:
                break;
        }
    })

    const displayHomePage = () => {
        clearContent();
        contentDiv.appendChild(createHomePage());
    }

    const displayMenu = () => {
        clearContent();
        contentDiv.appendChild(createMenu());
    }

    const displayAbout = () => {
        clearContent();
        contentDiv.appendChild(createAbout());
    }

    return {displayHomePage, displayMenu, displayAbout};
})();