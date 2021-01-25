// 1. С помощью цикла ​ while​ вывести все простые числа в промежутке от 0 до 100.

var i = 0;
var out = ''

while (i <= 100) {
    var c = 0;
    var j = 0;
    while (c < 3 && j <= 100) {
        if (i % j == 0) {
            c++
        };
        j++;
    };

    if (c == 2) {
        out += String(i) + ', ';
    };

    i++;
};
console.log(out);