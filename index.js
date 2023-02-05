// EGBAL: 1. SELECT THE ELEMENTS AND PUT THEM INTO BOXES
const bookmarkSvgTransparent = document.querySelector(
  '[data-js="bookmark-regular"]'
);
console.log(bookmarkSvgTransparent);

// EGBAL: 2. Add an event listener to the bookmark icon that listens for a click event.
bookmarkSvgTransparent.addEventListener("click", (eventOfTheClick) => {
  console.log("Bookmark clicked!");
  let sourceAttribute = bookmarkSvgTransparent.getAttribute("src");
  console.log(sourceAttribute);
  if (sourceAttribute === "assets/bookmark-regular.svg") {
    bookmarkSvgTransparent.setAttribute("src", "./assets/bookmark-solid.svg");
  } else {
    bookmarkSvgTransparent.setAttribute("src", "./assets/bookmark-regular.svg");
  }
});

// ANSWER BUTTON
// The following acceptance criteria should be met for the answer button:

// When the user clicks on the button the previously hidden answer should be displayed
// When the user clicks this button again the answer is hidden again
// The user can click on this button endlessly and the answer will either be displayed or hidden after each click
// The toggle functionality should be applied by using a class which is named "hidden"
// If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed.

const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
// console.log(showAnswerButton);

const answerOne = document.querySelector('[data-js="answer-one"]');
console.log(answerOne);

showAnswerButton.addEventListener("click", (eventAfterClickingShowAnswer) => {
  console.log(showAnswerButton.textContent);
  if (showAnswerButton.textContent === "Show Answer") {
    answerOne.style.display = "block";
    showAnswerButton.textContent = "Hide Answer";
    showAnswerButton.style.backgroundColor = "black";
  }
  //    if (showAnswerButton.textContent.trim() !== "Show Answer");
  else {
    answerOne.style.display = "none";
    showAnswerButton.textContent = "Show Answer";
    showAnswerButton.style.backgroundColor = "green";
  }
});

// 3. Create new Cards
// The data entered into the form by users should be used to create a new question, that will be displayed as a card like the other questions.

// Listen the form's submit event
// Prevent the default submit behavior to handle everything within JavaScript
// Read all entered data from the input fields (question, answer, tags)
// Generate all DOM element for a card with createElement()
// Insert the form's data as text into the DOM elements
// Append the card to the page, directly below the form

function handleInputChange(event, fieldName) {
  const maxLength = event.target.maxLength;
  const currentLength = event.target.value.length;
  const remaining = maxLength - currentLength;
  document.querySelector(`#${fieldName}-counter`).textContent = remaining;
}

function handleFormSubmit(event) {
  event.preventDefault();

  // Read the data from the form
  const question = event.target.question.value;
  const answer = event.target.answer.value;
  const tag = event.target.tag.value;

  // Generate all DOM elements for a card
  const cardContainer = document.createElement("div");
  // EGBAL: make the displayed reponse colored and centered
  cardContainer.style.backgroundColor = "lightgreen";
  cardContainer.style.textAlign = "center";

  const cardQuestion = document.createElement("p");
  const cardAnswer = document.createElement("p");
  const cardTag = document.createElement("p");

  // Insert the form's data as text into the DOM elements
  cardQuestion.textContent = question;
  cardAnswer.textContent = answer;
  cardTag.textContent = tag;

  // Append the card to the page, directly below the form
  cardContainer.appendChild(cardQuestion);
  cardContainer.appendChild(cardAnswer);
  cardContainer.appendChild(cardTag);
  document.querySelector("main").appendChild(cardContainer);
}
