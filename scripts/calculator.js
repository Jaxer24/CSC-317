//initialize global variables
const opperations = ["+", "-", "*", "/"];
const buttonSafePattern = /[0-9]/;
const opSafePattern = /[+*/-]/;
const safePattern = /^[0-9+*/%.() -]+$/;
let userInput = false;

//AC logic handler
function clear(){
        let text = document.getElementById("display_input").textContent;
        console.log(text);
        if(text != "0"){
                document.getElementById("display_input").textContent = "0";
        }else{
                document.getElementById("display_output").textContent = "";
        }
}

//sign change logic handler
function sign() {
        let textIn = document.getElementById("display_input").textContent;
        let firstCh = textIn.charAt(0);
        if(firstCh == "-"){
                document.getElementById("display_input").textContent = textIn.slice(1,textIn.length);
        }else{
                document.getElementById("display_input").textContent = "-"+textIn;
        }
}

//peercentage logic handler
function percent(){
        let textIn = document.getElementById("display_input").textContent;
        let textOut = document.getElementById("display_output").textContent;
        let lastOutCh = textOut.charAt(textOut.length-1);
        if(lastOutCh == "+"){
                let a = secureEval(textOut.slice(0, -1)); 
                document.getElementById("display_input").textContent = a + a * textIn/100;
                document.getElementById("display_output").textContent = textOut + a * textIn /100;
        }else if(lastOutCh == "-"){
                let a = secureEval(textOut.slice(0, -1)); 
                document.getElementById("display_input").textContent = a - a * textIn/100;
                document.getElementById("display_output").textContent = textOut + a * textIn /100;
        }else if(lastOutCh == "*"){
                let a = secureEval(textOut.slice(0, -1)); 
                document.getElementById("display_input").textContent = a * (textIn/100);
                document.getElementById("display_output").textContent = textOut + textIn /100;
        }else if(lastOutCh == "/"){
                let a = secureEval(textOut.slice(0, -1)); 
                document.getElementById("display_input").textContent = a / (textIn/100);
                document.getElementById("display_output").textContent = textOut + textIn /100;
        }else{
                document.getElementById("display_input").textContent = textIn /100;
                document.getElementById("display_output").textContent = textIn /100;
        }
}

//decimal logic handler
function decimal(){
        let textIn = document.getElementById("display_input").textContent;
        let lastInCh = textIn.charAt(textIn.length-1);
        if(!textIn.includes(".")){
                document.getElementById("display_input").textContent = textIn+".";
        }
}

//equal button logic handler
function equals(){
        let textIn = document.getElementById("display_input").textContent;
        let textOut = document.getElementById("display_output").textContent;
        let lastOutCh = textOut.charAt(textOut.length-1);
        let x = "";
        
        if(textOut.length==0){
                return;
        }else if(opperations.includes(lastOutCh)){
                document.getElementById("display_input").textContent = secureEval(textOut+textIn);
                document.getElementById("display_output").textContent = textOut+textIn;
        }else {
                for(let i=textOut.length-1 ; i>0 ; i--){
                        if(!opperations.includes(textOut.charAt(i))){
                                x += textOut.charAt(i);
                        }else{
                                x += textOut.charAt(i);
                                x = reverseString(x);
                                break;
                        }
                }
                document.getElementById("display_input").textContent = secureEval(textIn+x);
                document.getElementById("display_output").textContent = textIn+x;
        }
        
}

//operator button logic handler
function opButton(symbol){
        let textIn = document.getElementById("display_input").textContent;
        let textOut = document.getElementById("display_output").textContent;
        let lastOutCh = textOut.charAt(textOut.length - 1);
        
        if(userInput == true){
                if(opperations.includes(lastOutCh)){
                        document.getElementById("display_input").textContent = secureEval(textOut+textIn);
                        document.getElementById("display_output").textContent = textOut+textIn+symbol;
                }else{
                        if(textOut == ""){
                                document.getElementById("display_output").textContent = textIn+symbol;
                        }else{
                                document.getElementById("display_output").textContent = textOut+symbol;
                        }
                        
                }
        }else{
                if (opperations.includes(lastOutCh)){
                        document.getElementById("display_output").textContent = textOut.slice(0,-1)+symbol;
                } else {
                        document.getElementById("display_output").textContent = secureEval(textOut+textIn)+symbol;
                } 
        }
        userInput = false;
        
}
//operator button click handler
function opButtonPress(id, symbol){
        document.getElementById(id).addEventListener("click", function() {
                opButton(symbol);
        });
        
}

//number button logic handler
function numButton(symbol){
        let textIn = document.getElementById("display_input").textContent;
        let textOut = document.getElementById("display_output").textContent;
        
        if(userInput == false || textIn.includes("Error")){
                document.getElementById("display_input").textContent = symbol;
                if(textIn.includes("Error")){
                document.getElementById("display_output").textContent = "";
                }
        } else{
                let lastOutCh = textOut.charAt(textOut.length-1);
                if (textIn==0){
                        document.getElementById("display_input").textContent = symbol;
                }else{
                        document.getElementById("display_input").textContent = textIn+symbol;
                }
        }
        userInput = true;
        
}
//number button click handler
function numButtonPress(id, symbol){
        document.getElementById(id).addEventListener("click", function() {
                numButton(symbol);
        });
        
} 

//run all click handlers
opButtonPress("plus", "+");
opButtonPress("minus", "-");
opButtonPress("multiply", "*");
opButtonPress("divide", "/");
numButtonPress("zero", "0");
numButtonPress("one", "1");
numButtonPress("two", "2");
numButtonPress("three", "3");
numButtonPress("four", "4");
numButtonPress("five", "5");
numButtonPress("six", "6");
numButtonPress("seven", "7");
numButtonPress("eight", "8");
numButtonPress("nine", "9");
//special button click handlers
document.getElementById("equals").addEventListener("click", function() {
        equals();
});
document.getElementById("decimal").addEventListener("click", function() {
        decimal();
});
document.getElementById("percent").addEventListener("click", function() {
        percent();
});
document.getElementById("sign").addEventListener("click", function() {
        sign();
});
document.getElementById("clear").addEventListener("click", function() {
        clear();
});

//run all keyboard handlers
document.addEventListener('keydown', function(event) {
        if(buttonSafePattern.test(event.key) && event.key.charAt(0)!="F"){
                numButton(event.key);
        }
        if(opSafePattern.test(event.key)){
                opButton(event.key);
        }
        if(event.key == "Enter" || event.key == "=") {
                equals();
        }
        if(event.key == ".") {
                decimal();
        }
        if(event.key == "%") {
                percent();
        }
        if(event.key == "s" || event.key == "S" || event.key =="_") {
                sign();
        }
        if(event.key == "Backspace") {
                clear();
        }
});



//function that reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//securly execute eval function from discord
function secureEval(expression) {
        // Only allow numbers, operators, parentheses, and decimal points
        
        if (!safePattern.test(expression)) {
                return "Eval Error";
        }

        if (expression.charAt(expression.length-1)=="0" && expression.charAt(expression.length-2)=="/") {
               return "/0 Error";
        }else {
                try {
                        // eslint-disable-next-line no-new-func
                        return Function('"use strict"; return (' + expression + ')')();
                } catch (e) {
                        throw new Error("Error evaluating expression.");
                }
        }
}