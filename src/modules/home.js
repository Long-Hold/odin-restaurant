import '../styles/pages/homeStyles.css';
import restaurantImage from '../images/forestRest.png';

const RESTAURANT_DESCRIPTION_ONE = `Nestled deep within an ancient forest where fireflies dance
    and old oak trees share their secrets,
    The Whispering Grove offers an enchanting dining experience unlike any other.
    Our rustic tavern, warmed by a crackling hearth and illuminated by golden candlelight,
    serves hearty content food crafted from the finest local ingredients.`;

const RESTAURANT_DESCRIPTION_TWO = `Whether you're seeking a romantic evening under our starlit canopy or a cozy meal after a long journey,
                our warm hospitality and magical ambiance will make your visit truly unforgettable.
                Listen closely, and you might just hear the forest itself welcoming you home.`;

export function createHomePage() {
    const homeDiv = document.createElement('div');

    const homeImage = document.createElement('img');
    homeImage.src = restaurantImage;
    homeImage.alt = "A fairytale restaurant in an enchanted forest";
    homeImage.width = "500";

    homeDiv.appendChild(homeImage);

    const infoSect = document.createElement('section');

    const header = document.createElement('h1');
    header.textContent = "Presenting The Whispering Grove";
    infoSect.appendChild(header);

    const paraOne = document.createElement('p');
    paraOne.textContent = RESTAURANT_DESCRIPTION_ONE;
    infoSect.appendChild(paraOne);

    const paraTwo = document.createElement('p');
    paraTwo.textContent = RESTAURANT_DESCRIPTION_TWO;
    infoSect.appendChild(paraTwo);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.type = 'button';
    menuBtn.textContent = 'Explore Our Menu';
    infoSect.appendChild(menuBtn);

    homeDiv.appendChild(infoSect);

    return homeDiv;
}