//Kapitel 3.3 i eloquentJS
function countBs(str) {
    var xCount = 0;

    for (var i = 0; i < str.length; i++) {

        if (str.charAt(i) === 'B') {
            xCount += 1;
        }
    }

    return xCount;
}

function countChar(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count += 1;
        }
    }

    return count;
}

function countBs (a) {
    return countChar(a, 'B');
}