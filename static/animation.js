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
const responsesHTML = [
    ["  ┓   ┓     ┓         ┓    \n", "┏┓┣┓┓┏┣┓┏┓┏┓┣┓ ┏┓┏┓┏┓┏┫┏┓┏┓\n", "┛ ┛┗┗┻┗┛┗┻┛ ┗┛•┗┫┗┻┛ ┗┻┗ ┛┗\n", "                ┛          \n"],
    ['<a class="result-link" href="/">.</a><br>', '<a class="result-link" href="https://en.wikipedia.org/wiki/Rhubarb">..</a><br>', ],
    []
]
const blinkingCursor = '<span class="cursor blink">█</span>'

function typeText(element, text, i) {
    // Not finished with text
    if(i < text.length) {
        var blinkingCursor = '<span class="cursor blink">█</span>'
        element.innerHTML += text.charAt(i);
        setTimeout(typeText, 50, element, text, i+1);
    }
    return; // Finished
}

function typeCommand(colors, element, text) {
    var prompt = `<span style="color:${colors["prompt-user"]}">roots@rhubarb.garden</span><span style="color:${colors["hot-pink"]}"> $ </span>`;
    element.innerHTML = prompt + "█";
    setTimeout(typeText(element, text, 0), 500);
}

// Main

var currentElement = document.getElementById("cat");
typeCommand(colors, currentElement, commands[0]);

