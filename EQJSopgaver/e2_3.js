//Kapitel 2.3 i eloquentJS
var str = 8;
var bræt = '';

for (var i = 1; i <= str; i++) {

    if (i % 2 === 0) {

        for (var j = 1; j <= str; j++) {
            if (j % 2 === 0) {
                bræt += '#';
            } else {
                bræt += ' ';
            }
        }

        bræt += '\n';

    } else {

        for (var k = 1; k <= str; k++) {
            if (k % 2 === 0) {
                bræt += ' ';
            } else {
                bræt += '#';
            }
        }

        bræt += '\n';
    }
}

console.log(bræt);