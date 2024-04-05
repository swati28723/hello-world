// document.addEventListener('DOMContentLoaded', function() {
//     var buttons = document.querySelectorAll('.btnn');

//     buttons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             var color = button.textContent;

//             document.body.style.backgroundColor = color;

//             document.getElementById('bgtext').innerHTML = 'Background Color: <span class="blue">' + color + '</span>';

//         });
//     });
// });


function changeBackgroundColor(button) {
    var color = button.textContent;

    document.body.style.backgroundColor = color;

    document.getElementById('bgtext').innerHTML = 'Background Color: <span class="blue">' + color + '</span>';
}