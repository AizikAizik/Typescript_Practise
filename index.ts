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

enum Roles{ DEVELOPER, TESTER, AI_ENGINEER, DEV_OPS, CYBER_TEAM }

console.log(Roles.AI_ENGINEER);
console.log(Roles.DEV_OPS);
console.log(Roles.DEVELOPER);

// BigO(n) Linear Algorithm
function split(word: String, delimeter: string){
    let buffer = "";
    let splitWord = [];

    if (!delimeter || !word.includes(delimeter)) {
        for(let i = 0; i < word.length; i++){
            splitWord.push(word[i]);
        }
    }else{
        for(let i = 0; i <= word.length; i++){
            if(word[i] === delimeter){
                splitWord.push(buffer);
                buffer = "";
            }else{
                if(i === word.length){
                    splitWord.push(buffer)
                }else{
                    buffer += word[i];
                }
            }
        }
    }

    return splitWord;
}

console.log(split("ab.cd.eff", "."))