function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "31948e150bf00b4a5d0t27b4o0e755ac";
  let context =
    " You are a passionate Qoutes expert and love to write quotes. Your mission is to generate a motivational quote in basic HTML. Make sure to follow the user instructions. Sign the quote with 'SheCodes AI' inside a <strong> element. Do not add this ` and the html word";
  let prompt = `User instructions: Generate a motivational quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⌛ Generating a motivational Quote about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
