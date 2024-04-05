const bgimage = document.createElement('div'); 
bgimage.classList.add('bgimage');

const headingtop = document.createElement('h1')
headingtop.classList.add('top');
headingtop.textContent = 'Code is more than some bytes in a file'

document.body.appendChild(bgimage);
bgimage.appendChild(headingtop);


bgimage.style.backgroundImage = "url('https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?w=1380&t=st=1705491730~exp=1705492330~hmac=8f331dd23ea552867ce586cfa0edf9f82b6c98229fb8f861aa174b122bc0e491')";
bgimage.style.backgroundSize = 'cover';
bgimage.style.height = '100vh';
bgimage.style.padding = '30px';
bgimage.style.borderColor = '#48ee59';
bgimage.style.borderWidth = '5px';
bgimage.style.borderStyle = 'solid';
bgimage.style.display = 'flex';
bgimage.style.flexDirection = 'column';
bgimage.style.justifyContent = 'center';


headingtop.style.color = 'white';
headingtop.style.fontFamily = 'Bree Serief';
headingtop.style.backgroundColor = '#00000080';
headingtop.style.padding = '15px';
headingtop.style.fontSize = '30px';
headingtop.style.textAlign = 'center';
// headingtop.style.width = '200px';
// headingtop.style.marginLeft = '40%';
