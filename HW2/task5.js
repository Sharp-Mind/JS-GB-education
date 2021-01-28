// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами. Обязательно использовать оператор ​ return​ .

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