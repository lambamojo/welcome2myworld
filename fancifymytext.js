// Function to show an alert and change the font size of the text area
function makeBigger() {
    alert("Hello, world!"); // Alert when button is clicked
    document.getElementById("text-area").style.fontSize = "24pt"; // Change the font size
}

// Event listener for the "Bigger" button
document.getElementById("bigger-btn").onclick = makeBigger;

// Function to apply styles based on the selected radio button
function applyStyles() {
    let textArea = document.getElementById("text-area");

    if (document.getElementById("fancy").checked) {
        // Apply styles for "FancyShmancy"
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Reset styles for "BoringBetty"
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Event listener for radio buttons
document.getElementById("fancy").onchange = applyStyles;
document.getElementById("boring").onchange = applyStyles;

// Function to convert text to uppercase and add "-Moo" suffix
function moo() {
    let textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    
    // Add "-Moo" to the last word of each sentence
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim()) { // Check if sentence is not just whitespace
            sentences[i] = sentences[i].trim() + "-Moo"; // Append "-Moo"
        }
    }
    
    // Join sentences back together with a period
    textArea.value = sentences.join(". ") + ".";
}

// Event listener for the "Moo" button
document.getElementById("moo-btn").onclick = moo;
