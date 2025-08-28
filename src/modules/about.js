import '../styles/pages/aboutStyles.css';

function createStorySection() {
    const firstParagraph = `The Whispering Grove began as a dream shared between travelers who discovered this sacred clearing generations ago. 
                                Legend speaks of an ancient pact between the first innkeepers and the forest guardians, 
                                ensuring that all who enter our doors find warmth, nourishment, and respite from their journeys.`;

    const secondParagraph = `Our kitchen honors time-tested recipes passed down through generations of forest dwellers, 
                                using herbs gathered from moonlit glades and produce cultivated in harmony with the woodland spirits. 
                                Each dish tells a story of the seasons, 
                                from spring's tender wild greens to winter's hearty root vegetables that have slumbered beneath the forest floor.`;

    const storySection = document.createElement('section');

    const storyHeader = document.createElement('h2');
    storyHeader.textContent = 'Our Story';

    const storyPOne = document.createElement('p');
    storyPOne.textContent = firstParagraph;

    const storyPTwo = document.createElement('p');
    storyPTwo.textContent = secondParagraph;

    storySection.appendChild(storyHeader);
    storySection.appendChild(storyPOne);
    storySection.appendChild(storyPTwo);

    return storySection;
}

function createPhilosophySection() {
    const firstParagraph = `We believe that dining should nourish both body and soul. 
    Our chefs work closely with local foragers and farmers who share our reverence for the natural world, 
    ensuring that every ingredient arrives at your table with its story intact. 
    The gentle crackle of our hearth fire and the soft whispers of wind through ancient boughs create an 
    atmosphere where time moves differently, allowing you to truly savor each moment`;

    const secondParagrap = `Whether you seek solitude for quiet contemplation or wish to share tales with fellow travelers, 
    The Whispering Grove welcomes you as family. Here, beneath our canopy of stars and surrounded by the gentle wisdom of the forest, 
    every meal becomes a celebration of the magic that exists when we pause to truly experience the world around us.`;

    const philoSection = document.createElement('section');

    const philoHeader = document.createElement('h2');
    philoHeader.textContent = 'Our Philosophy';

    const philoPOne = document.createElement('p');
    philoPOne.textContent = firstParagraph;

    const philoPTwo = document.createElement('p');
    philoPTwo.textContent = secondParagrap;

    philoSection.appendChild(philoHeader);
    philoSection.appendChild(philoPOne);
    philoSection.appendChild(philoPTwo);

    return philoSection;
}

export function createAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-container');

    aboutDiv.appendChild(createStorySection());
    aboutDiv.appendChild(createPhilosophySection());

    return aboutDiv;
}