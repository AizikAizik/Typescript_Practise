var btn = document.querySelector(".btn");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var answer = document.getElementById("answer");
function AddUp(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function (event) {
    var first = Number(num1.value);
    var second = Number(num2.value);
    var sum = AddUp(first, +second);
    answer.innerText = sum.toString();
});
var Roles;
(function (Roles) {
    Roles[Roles["DEVELOPER"] = 0] = "DEVELOPER";
    Roles[Roles["TESTER"] = 1] = "TESTER";
    Roles[Roles["AI_ENGINEER"] = 2] = "AI_ENGINEER";
    Roles[Roles["DEV_OPS"] = 3] = "DEV_OPS";
    Roles[Roles["CYBER_TEAM"] = 4] = "CYBER_TEAM";
})(Roles || (Roles = {}));
console.log(Roles.AI_ENGINEER);
console.log(Roles.DEV_OPS);
console.log(Roles.DEVELOPER);
// BigO(n) Linear Algorithm
function split(word, delimeter) {
    var buffer = "";
    var splitWord = [];
    if (!delimeter || !word.includes(delimeter)) {
        for (var i = 0; i < word.length; i++) {
            splitWord.push(word[i]);
        }
    }
    else {
        for (var i = 0; i <= word.length; i++) {
            if (word[i] === delimeter) {
                splitWord.push(buffer);
                buffer = "";
            }
            else {
                if (i === word.length) {
                    splitWord.push(buffer);
                }
                else {
                    buffer += word[i];
                }
            }
        }
    }
    return splitWord;
}
console.log(split("ab.cd.eff", "."));
