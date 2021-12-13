// all the range input and the number input in two lists
let range = document.querySelectorAll("input[type=range]");
let value_box = document.getElementsByClassName("value_box");

//the output text and the color box element's
let rgba_letters = document.querySelectorAll(".num");
let color = document.querySelector("#output_color");

//adjustment function for all the elements(when one changes the others will change as well)
let onchange = (element, value) => {
    element.value = value;
    color.style.backgroundColor = document.querySelector("#output_rgba").innerText;
}

//event listener for the colors input elements
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

//copy to clipboard function with the rgba product
function copy() {
    /* Get the text field*/
    const text = document.getElementById("output_rgba").innerText;
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(text);
  
    /* Alert the copied text */
    alert("Copied the text: " + text);
  }

//copy button event listener
const copy_button = document.querySelector("#copy");
copy_button.addEventListener('click', copy);
