const timerElement = document.getElementById('timer');
const inputText = document.getElementById('input-text');
const resultMessage = document.getElementById('result');
const errorMessage = document.getElementById('error-message');
const originalParagraph = document.getElementById('original-paragraph')
let startTime;
let timerInterval; 

function checkTypedText() 
{
    const typedText = inputText.value.trim();
    if ((typedText === "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.") || (typedText === "The difference between friends cannot but reinforce their friendship."))
    {
        clearInterval(timerInterval); 
        const passTime = (Date.now() - startTime) / 1000;
        resultMessage.textContent = `You typed in ${passTime.toFixed(0)} seconds`;
        errorMessage.textContent = '';
    } 
    else 
    {
        resultMessage.textContent = '';
        errorMessage.textContent = 'You typed an incorrect sentence';
    }
}

function resetTest() 
{
    inputText.value = '';
    startTime = undefined;
    resultMessage.textContent = '';
    errorMessage.textContent = '';
    timerElement.textContent = '0';
    document.querySelector('.original-paragraph p').textContent = "The difference between friends cannot but reinforce their friendship.";
    clearInterval(timerInterval); 
}

function updateTimer() 
{
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    timerElement.textContent = currentTime;
}

inputText.addEventListener('input', function() 
{
    if (!startTime) 
    {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000); 
    }
});

document.getElementById('submit-btn').onclick = checkTypedText;
document.getElementById('reset-btn').onclick = resetTest;


  