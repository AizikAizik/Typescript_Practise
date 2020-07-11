const btn = document.querySelector(".btn");
let num1 = document.getElementById("num1")! as HTMLInputElement;
let num2 = document.getElementById("num2")! as HTMLInputElement;
let answer = document.getElementById("answer");

function AddUp(num1:number, num2:number){
    return num1 + num2;
}

btn.addEventListener("click", function(event){
    let first = Number(num1.value);
    let second = Number(num2.value);
    let sum = AddUp(first, +second);
    answer.innerText = sum.toString();
})