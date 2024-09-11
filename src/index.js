function generateSession(event) {
    event.preventDefault();

    new Typewriter('#session', {
        strings: ['Answer here'],
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let sessionFormElement = document.querySelector("#session-generator");
sessionFormElement.addEventListener("submit", generateSession);