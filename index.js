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
