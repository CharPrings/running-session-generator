function displaySession(response) {
    new Typewriter('#session', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generateSession(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions")
    let apiKey = "ba30aa45f9d6647cd786f84aoc0t3a2d";
    let prompt = `User: Generate a ${instructionInput.value} minutes speedwork session`
    let context = "You are a running coach with a speciality in speedwork. Your mission is to generate a summarised speedwork session, including a warm up and cool down. Show the response in basic HTML but do not include the word HTML. The user will provide the length of the session in minutes."
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let sessionElement = document.querySelector("#session")
    sessionElement.classList.remove("hidden");
    sessionElement.innerHTML = `${instructionInput.value} minutes, ok! Running it for you... 🏃‍♀️🏃‍♂️`

    axios.get(apiUrl).then(displaySession);

    
}

let sessionFormElement = document.querySelector("#session-generator");
sessionFormElement.addEventListener("submit", generateSession);