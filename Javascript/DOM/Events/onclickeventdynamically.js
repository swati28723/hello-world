let btnElement = document.createElement('button');
btnElement.textContent = "Change Heading";
btnElement.onclick = function(){
    console.log("cick event triggered");
};

document.getElementById('myContainer').appendChild(btnElement);