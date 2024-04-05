function turnOnRed() {
    resetColors();
    const stoplight = document.getElementById('stopLight');
    stoplight.style.backgroundColor = 'red';
    const stopbutton = document.getElementById('stopButton');
    stopbutton.style.backgroundColor = 'red';
}

function turnOnYellow() {
    resetColors();
    const readylight = document.getElementById('readyLight');
    readylight.style.backgroundColor = 'yellow';
    const readybutton = document.getElementById('readyButton');
    readybutton.style.backgroundColor = 'yellow';
}

function turnOnGreen() {
    resetColors();
    const golight = document.getElementById('goLight');
    golight.style.backgroundColor = 'green';
    const gobutton = document.getElementById('goButton');
    gobutton.style.backgroundColor = 'green';
}

function resetColors() {
    const lights = document.querySelectorAll('.bulb');
    const buttons = document.querySelectorAll('.button');

    lights.forEach(light => {
        light.style.backgroundColor = '#4b5069';
    });

    buttons.forEach(button => {
        button.style.backgroundColor = '#1f1d41'; 
    });
}
