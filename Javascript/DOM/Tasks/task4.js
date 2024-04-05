const bgimage = document.createElement('div');
bgimage.classList.add('bgimage');

const textdiv = document.createElement('div');
textdiv.classList.add('text');

const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'Happy Meals';

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Discover the best foods from over 1,000 restaurants';

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Book Now';

document.body.appendChild(bgimage);
bgimage.appendChild(textdiv);
textdiv.appendChild(heading);
textdiv.appendChild(paragraph);
textdiv.appendChild(button);

bgimage.style.backgroundImage = "url('https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st%3D1705607469%7Eexp%3D1705608069%7Ehmac%3D278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad')";
bgimage.style.backgroundSize = 'cover';
bgimage.style.height = '100vh';
bgimage.style.display = 'flex';
bgimage.style.flexDirection = 'column';
bgimage.style.justifyContent = 'flex-end'; // Corrected value for 'justifyContent'

textdiv.style.backgroundColor = '#f6c56e';
textdiv.style.height = '35vh';
textdiv.style.borderTopRightRadius = '25px';
textdiv.style.borderTopLeftRadius = '25px';
textdiv.style.paddingLeft = '20px';

heading.style.fontFamily = 'Bree Serif';
heading.style.fontSize = '40px'
heading.style.color = '#323f4b'

paragraph.style.fontFamily = 'Roboto'
paragraph.style.fontSize = '25px'
paragraph.style.color = '#323f4b'

button.style.backgroundColor = '#ffffff'
button.style.fontFamily = 'Roboto'
button.style.paddingLeft = '30px'
button.style.paddingRight = '30px'
button.style.paddingBottom = '10px'
button.style.paddingTop = '10px'
button.style.borderRadius = '10px'


