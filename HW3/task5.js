// 5*
// ​
// Нарисовать пирамиду с 20 рядами с помощью ​ console.log​ , как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx

var i = 1;

while (i <= 20) {
    var s = '';
    while (s.length != i) {
        s += 'x';
    };
    console.log(s);
    i++;
};
