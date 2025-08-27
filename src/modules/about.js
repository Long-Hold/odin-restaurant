const STORY_FIRST_PARA = `The Whispering Grove began as a dream shared between travelers who discovered this sacred clearing generations ago. 
Legend speaks of an ancient pact between the first innkeepers and the forest guardians, 
ensuring that all who enter our doors find warmth, nourishment, and respite from their journeys.`;

const STORY_SECOND_PARA = `Our kitchen honors time-tested recipes passed down through generations of forest dwellers, 
using herbs gathered from moonlit glades and produce cultivated in harmony with the woodland spirits. 
Each dish tells a story of the seasons, 
from spring's tender wild greens to winter's hearty root vegetables that have slumbered beneath the forest floor.`;

export function createAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-container');

    const storySection = document.createElement('section');

    const storyHeader = document.createElement('h2');
    storyHeader.textContent = 'Our Story';

    const storyPOne = document.createElement('p');
    storyPOne.textContent = STORY_FIRST_PARA;

    const storyPTwo = document.createElement('p');
    storyPTwo.textContent = STORY_SECOND_PARA;

    storySection.appendChild(storyHeader);
    storySection.appendChild(storyPOne);
    storySection.appendChild(storyPTwo);

    aboutDiv.appendChild(storySection);
    return aboutDiv;
}