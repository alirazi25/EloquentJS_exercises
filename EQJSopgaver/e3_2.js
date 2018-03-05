//Kapitel 3.2 i eloquentJS
function ligMed (x) {

    if (x === 0) {
        return true;

    } else if (x === 1) {
        return false;

    } else if (x < 0) {
        return ligMed(-x);

    } else {
        return ligMed(x - 2);
    }
}