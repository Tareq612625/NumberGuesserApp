submitBtn=document.getElementById("submitNumber");
outputResult=document.getElementById("outputText");
let max=10;
let min=0;
let lose=0
let win=0;
for(let i=0; i<=2; i++){
    let inputValue=parseInt(prompt("Enter the number 1 to 10 "))
    let randomValue =Math.floor(Math.random() * (max - min + 1)) + min;
    //  let randomValue =5
    if(inputValue===randomValue){
        result='Your are Win';
        alert(result);
        outputResult.innerHTML=` Your Win`
        break;
    }
    else if(inputValue>randomValue){
       result='Correct answer is smaller!.'
       alert(result)
       lose++;
       outputResult.innerHTML=` Your lose ${lose} times`
    }
    else if(randomValue>inputValue){
        result='Correct answer is greater!'
        alert(result)
        lose++;
        outputResult.innerHTML=` Your lose ${lose} times`
    }
    else{
        result='You are lose'
        alert(result)
        lose++;
        outputResult.innerHTML=` Your lose ${lose} times`
    }

}