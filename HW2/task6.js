// Реализовать функцию с тремя параметрами: ​ function mathOperation(arg1, arg2, operation),
// где ​arg1​ , ​ arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить ​ switch​ ).

var q = 4;
var w = 3;

function summ(a, b) {
    return a + b;
};

function subt(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function divs(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return 'Division by zero!';
    };
};

function mathOperation(arg1, arg2, operation) {
    return operation(arg1, arg2);
};

alert(mathOperation(q, w, summ));