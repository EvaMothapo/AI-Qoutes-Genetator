function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "When life gives you Lemons🍋, just make Lemonade juice🥤",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
