function setup() {
    createCanvas(900, 600);
}

function draw() {
    background("lightblue");
    stroke("black");

    //house
    fill("orange");
    rect(300, 300, 400, 250);
    fill("brown")
    triangle(280, 300, 500, 130, 720, 300);

    //door
    fill("brown");
    rect(380, 420, 75, 130);

    //horn
    fill("brown")
    rect(600, 160, 50, 100);

    
    //window
    fill("lightblue")
    rect(600, 350, 60, 85);
    rect(540, 350, 60, 85);




}