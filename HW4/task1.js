// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,‘десятки’: 4, ‘сотни’: 2}​. 
// Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью ​ console.log​ и вернуть пустой объект.



function NumberObj(num) {
    this.num = String(num);
    this.hundreds = this.tens = this.ones = 0;

    switch (this.num.length) {
        case 3:
            this.hundreds = Number(this.num[0]);
            this.tens = Number(this.num[1]);
            this.ones = Number(this.num[2]);
            break;
        case 2:
            this.tens = Number(this.num[0]);
            this.ones = Number(this.num[1]);
            break;
        case 1:
            this.ones = Number(this.num[0]);
            break;
    }
    return { 'единицы: ': this.ones, 'десятки: ': this.tens, 'сотни: ': this.hundreds };
};

function createNumObject(num) {
    if (String(num).length <= 3) {
        console.log(new NumberObj(num));
    } else {
        console.log('Задайте число от 0 до 999.');
    };
};

createNumObject(245);
