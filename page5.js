img="";

function preload() {
    img = loadImage("image5.png");
}

function setup() {
    canvas = createCanvas(640,450);
    canvas.center();
}

function draw() {
    image(img,0,0,640,450);
    fill("#FF0000");
    text("Gas Stove",15,30);
    stroke("#FF0000");
    noFill();
    rect(3,10,630,430);
}