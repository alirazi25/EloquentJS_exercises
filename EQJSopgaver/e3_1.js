//Kapitel 3.1 i eloquentJS
function min (x, y) {
    //I tilfældet af første statement er mindre end den sekundære, returneres første statement.
    if (x < y) {
        return x;
        //hermed returneres anden statement, hvis første test fejler.
    } else {
        return y;
    }
}