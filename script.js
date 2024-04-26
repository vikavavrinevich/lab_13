//#1 
let x = 1;
let y = 2;
let res1 = String(x) + y;
console.log(res1); 
console.log(typeof res1); 
let res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2); 
let res3 = Boolean(x + y);
console.log(res3); 
console.log(typeof res3); 
let res4 = x / 0;
console.log(res4); 
console.log(typeof res4); 

//#2
let input = prompt("Введіть число");
if (!isNaN(input)) {
    let number = parseFloat(input);

    //умова а)
    if (number > 0 && number % 2 == 0) {
        console.log("Введене число є парним");
    }
    else {
        console.log("Введене число не є парним");
    }
    //умова b
    if (number % 7 == 0) {
        console.log("Дане число кратне 7");
    }
    else {
        console.log("Дане число не є кратне 7");
    }

}
else {
    console.log("Ви ввели не число");
}

//# 3
let age = prompt("Введіть свій вік");
if (age >= 18) {
    console.log("Ви досягли повнолітнього віку");
}
else {
    console.log("Ви ще надто молоді");
}


//#4
let sideA = parseFloat(prompt("Enter side A:"));
let sideB = parseFloat(prompt("Enter side B:"));
let sideC = parseFloat(prompt("Enter side C:"));

//перевірка чи сторони не відʼємні і чи є числами
if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Неправильні дані');
} else {
    let square = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(square * (square - sideA) * (square - sideB) * (square - sideC));

    //перевірка чи трикутник правильний за теоремою Піфагора
    let isRightAngled = Math.pow(sideA, 2) + Math.pow(sideB, 2) === Math.pow(sideC, 2) ||
        Math.pow(sideA, 2) + Math.pow(sideC, 2) === Math.pow(sideB, 2) ||
        Math.pow(sideB, 2) + Math.pow(sideC, 2) === Math.pow(sideA, 2);

    console.log(`Площа: ${area.toFixed(3)}`);
    console.log(`Трикутник правильний?: ${isRightAngled}`);
}


//# 5
let time = new Date().getHours();
if (time >= 23 && time <= 5) {
    console.log("Добронї ночі!");
}
else if (time >= 5 && time <= 11) {
    console.log("Добргого ранку!");
}
else if (time >= 11 && time <= 17) {
    console.log("Доброго дня!");
}
else {
    console.log("Доброго вечора!");
}
