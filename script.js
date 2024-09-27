// Array of Harry Potter quotes
const quotes = [
    "It does not do to dwell on dreams and forget to live.",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    "You must be the change you wish to see in the world.",
    "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "The world had ended, so why had the part of him that was Harry Potter survived?",
    "I am what I am, an’ I’m not ashamed.",
    "To the well-organized mind, death is but the next great adventure.",
    "Fear of a name increases fear of the thing itself.",
    "You’re a wizard, Harry.",
    "We are only as strong as we are united, as weak as we are divided."
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}
