
function testar() {
    let text = document.querySelector("#texto").value;
    let h1 = document.querySelector("#h1");
    h1.textContent = text;
}


function changeColor(color) {
    let h1 = document.querySelector("#h1");
    h1.style.color = color;
}