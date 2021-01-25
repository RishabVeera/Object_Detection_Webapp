img="";

function preload() {
    img = loadImage("inm1.png");
}

function setup() {
    canvas = createCanvas(640,450);
    canvas.center();
}

function draw() {
    image(img,0,0,640,450);
    fill("#FF0000");
    text("TV",52,120);
    stroke("#FF0000");
    noFill();
    rect(30,80,300,250);
    fill("#FF0000");
    text("Fridge",450,50);
    stroke("#FF0000");
    noFill();
    rect(400,20,200,350);
}