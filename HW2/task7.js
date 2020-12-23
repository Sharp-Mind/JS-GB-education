// 7. * Сравнить ​ null​ и ​ 0 ​ . Объяснить результат.

alert(null == 0); // false
alert(null > 0);  // false
alert(null < 0);  // false
alert(null >= 0); // true
alert(null <= 0); // true

// Согласно абстрактному алгоритму сравнения равенств из спецификации JS,
// выражение null == 0 всегда возвращает false по умолчанию.

// Для выражений null < 0 и null > 0, согласно абстрактному алгоритму 
// сравнения для отношений, null следует преобразовать к типу Number,
// после чего null будет равен +0, это значение не больше
// и не меньше нуля, следовательно результат сравнения будет false.

// Выражение null >= 0 и null <= 0 принимает значение true, согласно
// спецификации оператора больше-или-равно и оператора меньше-или-равно.