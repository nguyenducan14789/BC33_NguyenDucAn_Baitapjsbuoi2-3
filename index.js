/**
 * Bài 1:
 */

function ex1(){
    var salary = + document.getElementById("salary").value;
    var days = + document.getElementById("days").value;

    var totalSalary = salary*days;
    console.log(salary, days, totalSalary);
    document.getElementById("salarys").innerHTML = totalSalary;
}

/**
 * Bài 2
 */

function ex2(){
    var number1 = + document.getElementById("number1").value;
    var number2 = + document.getElementById("number2").value;
    var number3 = + document.getElementById("number3").value;
    var number4 = + document.getElementById("number4").value;
    var number5 = + document.getElementById("number5").value;

    var average = (number1 + number2 + number3 + number4 + number5)/5;

    document.getElementById("averageValue").innerHTML = average;
}

/**
 * Bài 3
 */

function ex3(){
    var usd = + document.getElementById("usd").value;
    var vnd = usd*23500;

    document.getElementById("vnd").innerHTML = vnd;


}

/**
 * Bài 4
 */

function ex4(){
    var long = + document.getElementById("long").value;
    var width = + document.getElementById("width").value;

    var perimeter = (long + width)*2;
    var area = long*width

    document.getElementById("perimeter").innerHTML = perimeter;
    document.getElementById("area").innerHTML = area;
}


/**
 * Bài 5
 */

function ex5(){
    var number = + document.getElementById("number").value;
    var number1 = number%10;
    var number2 = Math.floor(number/10);
    var total = number1 + number2;

    document.getElementById("a").innerHTML = total;
}