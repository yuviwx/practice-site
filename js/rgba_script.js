let range = document.querySelectorAll("input[type=range]");
let value_box = document.getElementsByClassName("value_box");

let rgba_letters = document.querySelectorAll(".num");
let color = document.querySelector("#output_color");

let onchange = (element, value) => {
    console.log(value)
    element.value = value;
    color.style.backgroundColor = document.querySelector("#output_rgba").innerText;
}

for(let i=0; i<4; i++){
    range[i].addEventListener("input", function(){
        let element = value_box[i];
        let value = range[i].value;
        rgba_letters[i].innerHTML = value;
        onchange(element,value)
    });
    value_box[i].addEventListener("change", function(){
        let element = range[i];
        let value = value_box[i].value;
        rgba_letters[i].innerHTML = value;
        onchange(element,value)
    });
}

