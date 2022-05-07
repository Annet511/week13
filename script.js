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


function plus() {
    let num1 = prompt("Введите первое число");
    let num2 = prompt("Введите второе число");
    alert(Number(num1) + Number(num2)); 
}

function minus() {
    let num1 = prompt("Введите первое число");
    let num2 = prompt("Введите второе число");
    alert(Number(num1) - Number(num2)); 
}

function times() {
    let num1 = prompt("Введите первое число");
    let num2 = prompt("Введите второе число");
    alert(Number(num1) * Number(num2)); 
}

function devide() {
    let num1 = prompt("Введите первое число");
    let num2 = prompt("Введите второе число");
    alert(Number(num1) / Number(num2)); 
}
