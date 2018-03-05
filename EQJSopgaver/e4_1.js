//Kapitel 4.1 i eloquentJS
function range (x, y, step) {

    var numArray = [];

    if (!step) {
        step = 1;
    }

    if (step < 0) {

        for (var i = x; i >= y; i += step) {

            numArray.push(i);
        }
    } else {

        for (var j = x; j <= y; j += step) {

            numArray.push(j);
        }
    }

    return numArray;
}

function sum (arg) {

    var arraySum = 0;

    for (var i = 0; i < arg.length; i++) {

        arraySum += arg[i];
    }

    return arraySum;
}