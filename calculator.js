
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue= "";
for(items of buttons){
    items.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == "="){
            // screen.value = eval(screenValue);
            screen.value = (Math.round(eval(screenValue) * 100) / 100).toFixed(2);
        }
        else if(buttonText == "C"){
            screenValue="";
            screen.value=screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
