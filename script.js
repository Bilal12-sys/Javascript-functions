function showDate(){
  let d = new Date();
  document.getElementById("out1").innerHTML = d;
}
function greetUser(){
  let f = prompt("Enter First Name");
  let l = prompt("Enter Last Name");
  document.getElementById("out2").innerHTML =
  "Hello " + f + " " + l;
}
function addNumbers(){
  let a = +prompt("Enter first number");
  let b = +prompt("Enter second number");
  document.getElementById("out3").innerHTML =
  "Sum = " + (a + b);
}
function calculator(){
  let n1 = +prompt("Enter num1");
  let n2 = +prompt("Enter num2");
  let op = prompt("Enter operator + - * /");
  let result;
  if(op==="+") result = n1+n2;
  else if(op==="-") result = n1-n2;
  else if(op==="*") result = n1*n2;
  else if(op==="/") result = n1/n2;
  document.getElementById("out4").innerHTML =
  "Result = " + result;
}
function squareNum(){
  let n = +prompt("Enter number");
  document.getElementById("out5").innerHTML =
  "Square = " + (n*n);
}
function factorial(){
  let n = +prompt("Enter number");
  let f = 1;
  for(let i=1;i<=n;i++) f*=i;
  document.getElementById("out6").innerHTML =
  "Factorial = " + f;
}
function counting(){
  let s = +prompt("Start");
  let e = +prompt("End");
  let txt="";
  for(let i=s;i<=e;i++) txt+=i+" ";
  document.getElementById("out7").innerHTML = txt;
}
function calculateHypotenuse(){
  let b = +prompt("Base");
  let p = +prompt("Perpendicular");

  function calculateSquare(x){
    return x*x;
  }
  let h = Math.sqrt(
    calculateSquare(b)+calculateSquare(p)
  );
  document.getElementById("out8").innerHTML =
  "Hypotenuse = " + h;
}
function rectangleArea(){
  let w = 10, h = 5;
  document.getElementById("out9").innerHTML =
  "Area = " + (w*h);
}
function checkPalindrome(){
  let s = prompt("Enter word");
  let rev = s.split("").reverse().join("");
  document.getElementById("out10").innerHTML =
  (s===rev) ? "Palindrome" : "Not Palindrome";
}
function capitalizeWords(){
  let s = prompt("Enter string");
  let r = s.split(" ")
  .map(w=>w[0].toUpperCase()+w.slice(1))
  .join(" ");
  document.getElementById("out11").innerHTML = r;
}
function longestWord(){
  let s = prompt("Enter string");
  let words = s.split(" ");
  let long = "";
  for(let w of words){
    if(w.length>long.length) long=w;
  }
  document.getElementById("out12").innerHTML = long;
}
function countLetter(){
  let s = prompt("Enter string");
  let l = prompt("Enter letter");
  let c = 0;
  for(let ch of s){
    if(ch===l) c++;
  }
  document.getElementById("out13").innerHTML =
  "Count = " + c;
}
function circle(){
  let r = +prompt("Enter radius");
  let c = 2*Math.PI*r;
  let a = Math.PI*r*r;
  document.getElementById("out14").innerHTML =
  "Circumference = " + c.toFixed(2) +
  "<br>Area = " + a.toFixed(2);
}
