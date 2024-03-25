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

    //roof window
    circle(500, 230, 60);
    stroke("black")
    line(500, 200, 500, 260);
    line(470, 230, 530, 230);

    //sun
    stroke("black")
    fill("yellow");
    circle(100, 100, 80);

    fill("yellow");
    for (let i = 0; i < 360; i += 45) {
        push();
        translate(100, 100);
        rotate(radians(i));
        triangle(-10, -50, 0, -90, 10, -50);
        pop();
    }

}