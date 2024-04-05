const container = document.createElement('div'); 
const button = document.getElementById('emotionButton');
const emoji = document.getElementById('emoji');
const happyImageURL = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png';
const unhappyImageURL = 'https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093';

button.style.backgroundColor = 'blue'; 
button.style.color = 'white'; 
button.style.padding = '10px 20px'; 
button.style.borderRadius = '10px'; 
button.style.fontSize = '25px'; 
button.style.fontFamily = 'Arial, sans-serif'; 
button.style.display = 'block'; 

emoji.style.width = '500px'; 
emoji.style.height = 'auto'; 
emoji.style.margin = '10px'; 

button.addEventListener('click', function() 
{
    if (button.textContent === 'Unhappy') 
    {
        button.textContent = 'Happy';
        emoji.src = happyImageURL;
    } 
    else 
    {
        button.textContent = 'Unhappy';
        emoji.src = unhappyImageURL;
    }
});
