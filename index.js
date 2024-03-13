const textbox = document.getElementById("textbox");
const toFehrenheit = document.getElementById("toFehrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFehrenheit.checked){
       temp = Number(textbox.value);
       temp = temp * 9 / 5 +  32;
       result.textContent = temp + "℉";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp +  "℃";
    }
    else{
        result.textContent = "Select Unit"
    }
}
