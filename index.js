const text = document.getElementById("text");
const tofe = document.getElementById("tofa");
const toce = document.getElementById("toce");
const result = document.getElementById("result");
let temp;

function call(){

    if(tofa.checked){
        temp = Number(text.value) ;
        temp = temp * 9/5+32;
        result.textContent = temp.toFixed(1) + " Degree F";
    }
    else if (toce.checked){
        temp = Number(text.value) ;
        temp = (temp - 32)*(5/9);
        result.textContent = temp.toFixed(1)+ " Degree C";
    }
    else{
        result.textContent = "Select a unit !!"
    }
}