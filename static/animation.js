const colors = {
    "hot-pink": "#ef8eb0",
    "light-pink": "#f1c3de",
    "prompt-user": "#796472"
}
const prompt = `<span style="color:${colors["prompt-user"]}">roots@rhubarb.garden</span><span style="color:${colors["hot-pink"]}"> $ </span>`;
const commands = [
    "cat headline.txt",
    "ls -a",
    "./hello.sh"
];
// separate line-by-line case I want to put in whole lines at once, do a typing animation, etc.
const responses = [
    ["  ┓   ┓     ┓         ┓    \n", "┏┓┣┓┓┏┣┓┏┓┏┓┣┓ ┏┓┏┓┏┓┏┫┏┓┏┓\n", "┛ ┛┗┗┻┗┛┗┻┛ ┗┛•┗┫┗┻┛ ┗┻┗ ┛┗\n", "                ┛          \n"],
    ['<a class="result-link" href="/">.</a><br>', '<a class="result-link" href="https://en.wikipedia.org/wiki/Rhubarb">..</a><br>', ],
    []
]
const blinkingCursor = '<span class="cursor blink">█</span>'

function typeText(element, text, i) {
    if(i < text.length) {
        element.textContent += text.charAt(i);
    }


    
    while(i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function f(){return;}, 500) // Wait a few ms between letters
    }
}

function typeCommand(colors, element, text) {
    // Create prompt
    var host = document.createElement(span);
    host.textContent = "roots@rhubarb.garden";
    host.style.color = colors["prompt-user"];
    var dollar = document.createElement(span);
    dollar.textContent = " $ ";
    dollar.style.color = colors["hot-pink"];

    // Prepend and type out command
    element.prepend(dollar);
    dollar.prepend(host);
    typeText(element, text, 0);
}

// Main

var currentElement = document.getElementById("cat");
typeText(currentElement, commands[0]);

