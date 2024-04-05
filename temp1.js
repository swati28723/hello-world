var startTime; 
var endTime;   
var typingStarted = false; // Check if typing has started
var paragraph = document.getElementById("inputBox").value.trim();

document.getElementById("inputBox").addEventListener("keypress", function(){
    if (!typingStarted) {
        startTime = new Date(); // Start recording time 
        typingStarted = true; 
        document.querySelector(".result").style.display = "block"; 
        // Update the elapsed time every second
        setInterval(updateElapsedTime, 1000);
    }
});

document.getElementById("submitButton").addEventListener("click", function(){
    if (typingStarted) { // Check if typing has started
        endTime = new Date(); // Record end time
        var elapsedTime = (endTime - startTime) / 1000; // Calculate elapsed time in seconds
        if (paragraph.trim() === "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.") {
            document.querySelector(".result").textContent = "You took " + elapsedTime.toFixed(2) + " seconds to complete the paragraph."; // Display elapsed time
        } else {
            document.querySelector(".result").textContent = "Wrong"; // if para don't match
        }
    } 
});

document.getElementById("resetButton").addEventListener("click", function(){
    document.getElementById("inputBox").value = "";
    document.querySelector(".result").textContent = "";
    typingStarted = false;
    clearInterval(updateElapsedTime);
});

function updateElapsedTime() {
    var currentTime = new Date();
    var elapsedTime = (currentTime - startTime) / 1000;
    document.getElementById("time").textContent = elapsedTime.toFixed(0) + " Seconds";
}