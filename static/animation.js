const colors = {
    "hot-pink": "#ef8eb0",
    "light-pink": "#f1c3de",
    "prompt-user": "#796472"
}
const prompt = `<span style="color:${colors["prompt-user"]}">roots@rhubarb.garden</span><span style="color:${colors["hot-pink"]}"> $ </span>`;
const commands = [
    "neofetch",
    "ls -a",
    "./hello.sh"
];
// separate line-by-line case I want to put in whole lines at once, do a typing animation, etc.
const responsesHTML = [
    ["  ┓   ┓     ┓         ┓    \n", "┏┓┣┓┓┏┣┓┏┓┏┓┣┓ ┏┓┏┓┏┓┏┫┏┓┏┓\n", "┛ ┛┗┗┻┗┛┗┻┛ ┗┛•┗┫┗┻┛ ┗┻┗ ┛┗\n", "                ┛          \n"],
    ['<a class="result-link" href="/">.</a><br>', '<a class="result-link" href="https://en.wikipedia.org/wiki/Rhubarb">..</a><br>', ],
    []
]
const blinkingCursor = '<span class="cursor blink">█</span>'

function typeText(parent, element, cursor, text, i, delayBeforeExecute) {
    // Not finished with text
    if(i < text.length) {
        element.innerText += text.charAt(i);
        setTimeout(typeText, 50, parent, element, cursor, text, i+1);
    } 
    else {
        setTimeout(() => parent.removeChild(cursor), 500);
    }
}

function typeCommand(colors, element, text, delayBeforeStart) {
    // Set up separate spans within <p> for host/prompt, command, and blinking cursor
    const promptSpan = `<span style="color:${colors["prompt-user"]}">roots@rhubarb.garden</span><span style="color:${colors["hot-pink"]}"> $ </span>`;
    const commandSpan = document.createElement('span');
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor blink';
    cursorSpan.textContent = '█';
    element.innerHTML = promptSpan;
    element.appendChild(commandSpan);
    element.appendChild(cursorSpan);
    setTimeout(typeText, delayBeforeStart, element, commandSpan, cursorSpan, text, 0, 1000);
}

function printLines(colors, element, responseHTML, lineno) {
    // assert that it is a array
    if(!(Array.isArray(responseHTML))) {
        console.log("Need to give multiple lines to printLines");
        return;
    }
    
    // Print lines
    if(lineno < responseHTML.length) {
        element.innerText += responseHTML[lineno];
        setTimeout(printLines(colors, element, responseHTML, lineno + 1), 500);
    }
}

// Main

var currentElement = document.getElementById("cat");
typeCommand(colors, currentElement, commands[0], 400);

currentElement = document.getElementById("pretty-title");
//printLines(colors, currentElement, responsesHTML[0], 0);
