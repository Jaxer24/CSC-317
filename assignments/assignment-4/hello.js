// hello.js
const jsGreeting = "You're Learnin' JavaScript";

const createMessageWithDate = (name) => {
    let d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();
    let message1 = "";
    let message2 = "";
    
    if(h <= 6){
        message1 = "Good Morning, ";
        message2 = "It's early, get some breakfast!";
    }else if(h <= 12){
        message1 = "Good Morning, ";
        message2 = "Make sure to drink enough water!";
    }else if(h <= 18){
        message1 = "Good Afternoon, ";
        message2 = "Make sure to excersise!";
    }else if(h <= 22){
        message1 = "Good Afternoon, ";
        message2 = "Make sure to rest soon!";
    }else if(h <= 23){
        message1 = "WOAH WOAH WOAH, ";
        message2 = "It's late make sure to sleep soon!";
    }
    
    return message1+`${name}, it's ${h}:${m}! `+message2;
};

console.log(createMessageWithDate(jsGreeting));