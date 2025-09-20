
function testar() {
    let text = document.querySelector("#texto").value;
    let h1 = document.querySelector("#h1");
    h1.textContent = text;
}


function changeColor(color) {
    let h1 = document.querySelector("#h1");
    h1.style.color = color;
}

function changeBackgroundColor(){
    let color = document.getElementById("colorInput").value.toLowerCase();
    let body = document.body;
    body.style.backgroundColor = color;
}