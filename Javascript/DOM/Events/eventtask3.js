function switchoff() {
    document.getElementById("bulbImage").src = "https://i.ibb.co/BGT8nNM/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://i.ibb.co/tXR1RNY/cat-eyes-img.png";
    document.getElementById("offswitch").style.backgroundColor = "#22c55e";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("switchstatus").innerText = "Switched Off";
}

function switchon() {
    document.getElementById("bulbImage").src = "https://i.ibb.co/BwHDN9W/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://i.ibb.co/4MWrYQV/cat-img.png";
    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("switchstatus").innerText = "Switched On";
}

document.querySelector('.dark-background').style.backgroundColor = '#0b0b0b';
document.querySelector('.dark-background').style.display = 'flex';
document.querySelector('.dark-background').style.flexDirection = 'column';
document.querySelector('.dark-background').style.justifyContent = 'start';
document.querySelector('.dark-background').style.alignItems = 'center';

document.querySelector('.bulb-image').style.width = '150px';
document.querySelector('.cat-image').style.width = '300px';

document.querySelector('.switch-board').style.width = '294px';
document.querySelector('.switch-board').style.height = '139px';
document.querySelector('.switch-board').style.backgroundColor = '#7b8794';
document.querySelector('.switch-board').style.borderRadius = '12px';
document.querySelector('.switch-board').style.paddingTop = '32px';
document.querySelector('.switch-board').style.paddingBottom = '32px';
document.querySelector('.switch-board').style.paddingLeft = '16px';
document.querySelector('.switch-board').style.paddingRight = '16px';
document.querySelector('.switch-board').style.margin = '16px';

document.querySelector('.switch-status').style.fontFamily = '"Roboto"';
document.querySelector('.switch-status').style.fontWeight = '500';
document.querySelector('.switch-status').style.fontSize = '24px';
document.querySelector('.switch-status').style.color = '#ffffff';
document.querySelector('.switch-status').style.marginBottom = '24px';

document.querySelector('.on-switch').style.fontFamily = '"Roboto"';
document.querySelector('.on-switch').style.fontWeight = 'bold';
document.querySelector('.on-switch').style.fontSize = '24px';
document.querySelector('.on-switch').style.color = '#ffffff';
document.querySelector('.on-switch').style.borderRadius = '8px';
document.querySelector('.on-switch').style.width = '99px';
document.querySelector('.on-switch').style.height = '44px';
document.querySelector('.on-switch').style.marginLeft = '16px';
document.querySelector('.on-switch').style.backgroundColor = '#cbd2d9';

document.querySelector('.off-switch').style.fontFamily = '"Roboto"';
document.querySelector('.off-switch').style.fontWeight = 'bold';
document.querySelector('.off-switch').style.fontSize = '24px';
document.querySelector('.off-switch').style.color = '#ffffff';
document.querySelector('.off-switch').style.borderRadius = '8px';
document.querySelector('.off-switch').style.width = '99px';
document.querySelector('.off-switch').style.height = '44px';
document.querySelector('.off-switch').style.backgroundColor = '#e12d39';

document.querySelector('.cneter-content').style.display = 'flex';
document.querySelector('.cneter-content').style.flexDirection = 'row';
document.querySelector('.cneter-content').style.justifyContent = 'center';



// const styles = {
//     '.dark-background': {
//       'background-color': '#0b0b0b',
//       'display': 'flex',
//       'flex-direction': 'column',
//       'justify-content': 'start',
//       'align-items': 'center'
//     },
//     '.bulb-image': {
//       'width': '150px'
//     },
//     '.cat-image': {
//       'width': '300px'
//     },
//     '.switch-board': {
//       'width': '294px',
//       'height': '139px',
//       'background-color': '#7b8794',
//       'border-radius': '12px',
//       'padding-top': '32px',
//       'padding-bottom': '32px',
//       'padding-left': '16px',
//       'padding-right': '16px',
//       'margin': '16px'
//     },
//     '.switch-status': {
//       'font-family': '"Roboto"',
//       'font-weight': '500',
//       'font-size': '24px',
//       'color': '#ffffff',
//       'margin-bottom': '24px'
//     },
//     '.on-switch': {
//       'font-family': '"Roboto"',
//       'font-weight': 'bold',
//       'font-size': '24px',
//       'color': '#ffffff',
//       'border-radius': '8px',
//       'width': '99px',
//       'height': '44px',
//       'margin-left': '16px',
//       'background-color': '#cbd2d9'
//     },
//     '.off-switch': {
//       'font-family': '"Roboto"',
//       'font-weight': 'bold',
//       'font-size': '24px',
//       'color': '#ffffff',
//       'border-radius': '8px',
//       'width': '99px',
//       'height': '44px',
//       'background-color': '#e12d39'
//     },
//     '.center-content': {
//       'display': 'flex',
//       'flex-direction': 'row',
//       'justify-content': 'center'
//     }
//   };
  