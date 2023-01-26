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
  }
});

// ANSWER BUTTON
// The following acceptance criteria should be met for the answer button:

// When the user clicks on the button the previously hidden answer should be displayed
// When the user clicks this button again the answer is hidden again
// The user can click on this button endlessly and the answer will either be displayed or hidden after each click
// The toggle functionality should be applied by using a class which is named "hidden"
// If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed.

// const answerOne = document.querySelector('[data-js="answer-one"]');
// console.log();
