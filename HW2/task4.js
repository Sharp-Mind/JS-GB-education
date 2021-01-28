// 4. Присвоить переменной ​ а значение в промежутке [0..15]. С помощью оператора ​ switch
// организовать вывод чисел от ​a ​ до 15.

var a = 5;
var out = '';

switch (a) {
    case 0:
        out += '0, ';
    case 1:
        out += '1, ';
    case 2:
        out += '2, ';
    case 3:
        out += '3, ';
    case 4:
        out += '4, ';
    case 5:
        out += '5, ';
    case 6:
        out += '6, ';
    case 7:
        out += '7, ';
    case 8:
        out += '8, ';
    case 9:
        out += '9, ';
    case 10:
        out += '10, ';
    case 11:
        out += '11, ';
    case 12:
        out += '12, ';
    case 13:
        out += '13, ';
    case 14:
        out += '14, ';
    case 15:
        out += '15, ';
};

if (out != '') {
    alert(out);
} else {
    alert('Нет такого значения');
};
