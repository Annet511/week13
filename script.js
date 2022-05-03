//переменная, в которой хранится выбранное математическое действие

let op;

//функция расчета
function func() {
    //переменная для результата
    let result;
    //получаем первое и второе число
let num1=Number(document.getElementById('num1').value);
let num2=Number(document.getElementById('num2').value);

switch (op) {
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '*':
        result=num1*num2;
        break;
    case '/':
        result=num1/num2;
        break;
       
}
document.getElementById("result").innerHTML=result;
}
