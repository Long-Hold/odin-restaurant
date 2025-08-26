import "./styles.css"
import createHomePage from "./modules/home";

const contentDiv = document.getElementById('content');
contentDiv.appendChild(createHomePage());

console.log('Welcome to the Restaurant!');