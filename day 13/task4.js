function main() {
    tleft();
}

function tleft() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
    tright();
}

function tright() {
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight(); 
    move();
    turnRight();
    tleft();
}
