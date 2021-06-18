let number = prompt("Введите число:");
+number;

if (isNaN(number)) {
    console.log("Упс, кажется, вы ошиблись.");
}
else {
    if (number % 2 > 0) {
        console.log("Введено нечетное число.");
    }
    else {
        console.log("Введено четное число.");
    }
}