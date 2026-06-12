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

function type(element, text) {
    var i = 0;
    while(i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function f(){return;}, 50) // Wait a few ms between letters
    }
}

console.log("testest");

const terminalWindow = document.getElementById("terminal-window");
var currentElement = terminalWindow.getElementById("cat");

type(currentElement, commands[0]);

