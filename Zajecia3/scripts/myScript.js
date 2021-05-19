function dataValidation() {
    var x = document.forms["firstForm"]["name"].value;
    var y = document.forms["firstForm"]["surname"].value;
    var z = document.forms["firstForm"]["mail"].value;
    const reg = /^[A-Za-ząĄćĆęĘłŁńŃóÓśŚżŻźŹ]{3,}$/;

    if (x == "") {
        alert("Imię nie może być puste.");
        return false;
    } else if (x[0] == x[0].toLowerCase()) {
        alert("Imię musi zaczynać się z wielkiej litery.");
        return false;
    } else if (!reg.test(x)) {
        alert("Imię zawiera niepoprawne znaki.");
        return false;        
    } else if (y == "") {
        alert("Naziwsko nie może być puste.");
        return false;
    } else if (y[0] == y[0].toLowerCase()) {
        alert("Naziwsko musi zaczynać się z wielkiej litery.");
        return false;
    } else if (!reg.test(y)) {
        alert("Nazwisko zawiera niepoprawne znaki.");
        return false;
    } else if (!z.includes("@") || !z.includes(".")) {
        alert("Mail posiada zły format.");
        return false;
    } else {
        alert("Poprawnie wprowadzono dane \r\n \r\n Imię: "+ x + "\r\n Naziwsko: "+ y + "\r\n E-mail: " + z);
        return true;
    }
}

function maxElementArray() {
    var element = document.getElementById("maxElement").value;
    const allElements = Object.assign([], element);

    if (allElements.some(isNaN)) {
        alert("Należy wpisać liczby.");
    } else if (allElements.length !== 7){
        alert("Należy podać 7 liczb.");
    } else {
        var maxElemenInArray = Math.max.apply(null, allElements);
    }
    

    document.getElementById("maxElem").innerHTML = "Największą z podanych cyfr jest cyfra: "+maxElemenInArray;
}

function numberFiboCalculate() {
    var fiboNumber = document.getElementById("numberFibo").value;
    var fiboNumberCalculation = fiboNumber;

    let n1 = 0, n2 = 1, i = 2, nextFibo;

    if (fiboNumberCalculation == 0) {
        alert("Podaj liczbę większą od 0");
    } else if (fiboNumberCalculation == 1) {
        nextFibo = 1;
    } else {
        while (i <= fiboNumberCalculation) {
            nextFibo = n1 + n2;
            n1 = n2;
            n2 = nextFibo;
            i+=1;
        }
    }

    document.getElementById("fiboNumber").innerHTML = fiboNumber+" wyraz ciągu Fibonacciego wynosi "+nextFibo;
}

function nwdLiczb() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;

    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }

    document.getElementById("nwdWynik").innerHTML = x;
}