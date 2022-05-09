//переменная, в которой хранится выбранное математическое действие

// let op;

// //функция расчета
// function func() {
//     //переменная для результата
//     let result;
//     //получаем первое и второе число
// let num1=Number(document.getElementById('num1').value);
// let num2=Number(document.getElementById('num2').value);

// switch (op) {
//     case '+':
//         result=num1+num2;
//         break;
//     case '-':
//         result=num1-num2;
//         break;
//     case '*':
//         result=num1*num2;
//         break;
//     case '/':
//         result=num1/num2;
//         break;
       
// }
// document.getElementById("result").innerHTML=result;
// }


// function plus() {
//     let num1 = prompt("Введите первое число");
//     let num2 = prompt("Введите второе число");
//     alert(Number(num1) + Number(num2)); 
// }

// function minus() {
//     let num1 = prompt("Введите первое число");
//     let num2 = prompt("Введите второе число");
//     alert(Number(num1) - Number(num2)); 
// }

// function times() {
//     let num1 = prompt("Введите первое число");
//     let num2 = prompt("Введите второе число");
//     alert(Number(num1) * Number(num2)); 
// }

// function devide() {
//     let num1 = prompt("Введите первое число");
//     let num2 = prompt("Введите второе число");
//     alert(Number(num1) / Number(num2)); 
// }




function plus(){
    let num1 = document.getElementById('num1').value;
    num1 = Number(num1);

    let num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    let result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}
function minus(){
    let num1 = document.getElementById('num1').value;
    num1 = Number(num1);

    let num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    let result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}
function times(){
    let num1 = document.getElementById('num1').value;
    num1 = Number(num1);

    let num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    let result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}
function divide(){
    let num1 = document.getElementById('num1').value;
    num1 = Number(num1);

    let num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    let result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}


function changeColor (sender) {
sender.classList.add ('changecolor');
}


let offset = 0; // смещение от левого края
const sliderLine = document.querySelector ('.slider-line');

document.querySelector ('.slider-next').addEventListener ('click', function(){
offset = offset + 256; //offset += 256
if (offset > 512) {
    offset = 0;
}
sliderLine.style.left = -offset + 'px';
});

document.querySelector ('.slider-prev').addEventListener ('click', function(){
offset = offset - 256; //offset -= 256
if (offset < 0) {
    offset = 512;
}
sliderLine.style.left = -offset + 'px';
});
