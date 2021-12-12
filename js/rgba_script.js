let range = document.querySelectorAll("input[type=range]");
let value_box = document.getElementsByClassName("value_box");
console.log(range, value_box)

let onchange = (element, value) => {
    console.log(value)
    element.value = value;
}

for(let i=0; i<3; i++){
    range[i].addEventListener("change", function(){
        let element = value_box[i];
        let value = range[i].value;
        onchange(element,value)
    });
    value_box[i].addEventListener("change", function(){
        let element = range[i];
        let value = value_box[i].value;
        onchange(element,value)
    });
}

