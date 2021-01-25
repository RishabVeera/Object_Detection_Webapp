img="";

function preload() {
    img = loadImage("image2.png");
}

function setup() {
    canvas = createCanvas(640,450);
    canvas.center();
}

function draw() {
    image(img,0,0,640,450);
    fill("#FF0000");
    text("Fruit",70,110);
    stroke("#FF0000");
    noFill();
    rect(60,80,250,320);
    fill("#FF0000");
    text("Bottle",430,70);
    stroke("#FF0000");
    noFill();
    rect(350,50,200,350);
}