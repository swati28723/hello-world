const background = document.createElement('div');
background.classList.add('background');

const heading = document.createElement('h1');
heading.classList.add('heading');
heading.innerText = 'Chat';

const whole = document.createElement('div');
whole.classList.add('whole');

const messages = ["Hello, how are you?", 
                "Hi Varakumar, I am good. How are you?", 
                "I'm fine. I am learning HTML and CSS", 
                "HTML and CSS?", 
                "Yes, by doing projects paralelly, I am learning", 
                "Awesome, can you tell how you are learning it", 
                "can I call you?"];

messages.forEach((message, index) => 
{
    const paragraph = document.createElement('p');

    if (index % 2 === 0) 
    {
        paragraph.classList.add('text-sent'); 
        paragraph.style.backgroundColor = '#47a3f3';
        paragraph.style.padding = '12px';
        paragraph.style.borderBottomRightRadius = '12px';
        paragraph.style.borderBottomLeftRadius = '12px';
        paragraph.style.textAlign = 'right';
    } 
    else 
    {
        paragraph.classList.add('text-rec');
        paragraph.style.backgroundColor = '#52606d';
        paragraph.style.padding = '12px';
        paragraph.style.borderBottomRightRadius = '12px';
        paragraph.style.borderBottomLeftRadius = '12px';
        paragraph.style.textAlign = 'left';
    }

    paragraph.textContent = message;
    whole.appendChild(paragraph);
});


// const whole = document.createElement('div');
// whole.classList.add('whole');

// const testsent = document.createElement('p')
// testsent.classList.add('test-sent')

// const testrec = document.createElement('p')
// testrec.classList.add('test-rec')


// const messages = [
//     { text: 'Hello, how are you?', class: 'text-sent' },
//     { text: 'Hi Varakumar, I am good. How are you?', class: 'text-rec' },
//     { text: "I'm fine. I am learning HTML and CSS", class: 'text-sent' },
//     { text: 'HTML and CSS?', class: 'text-rec' },
//     { text: 'Yes, by doing projects paralelly, I am learning', class: 'text-sent' },
//     { text: 'Awesome, can you tell how you are learning it', class: 'text-rec' },
//     { text: 'can I call you?', class: 'text-sent' }
// ];

// messages.forEach(message => {
//     const p = document.createElement('p');
//     p.classList.add(message.class);
//     p.innerText = message.text;
//     whole.appendChild(p);
// });

document.body.appendChild(background);
background.appendChild(heading);
background.appendChild(whole);

background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp6988787.png')";
background.style.backgroundSize = "cover"
background.style.height = "100vh"

heading.style.color = "white";
heading.style.backgroundColor = "#323f4b";
heading.style.fontSize = "20px";
heading.style.textAlign = "center";
heading.style.fontFamily = "Robato";
heading.style.fontWeight = "bold";
heading.style.padding = "14px";

whole.style.padding = '14px'
whole.style.color = '#ffffff'
whole.style.fontFamily = 'Robato'
whole.style.fontSize = '12px'

