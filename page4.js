img="";

function preload() {
    img = loadImage("image4.jpg");
}

function setup() {
    canvas = createCanvas(640,450);
    canvas.center();
}

function draw() {
    image(img,0,0,640,450);
    fill("#FF0000");
    text("basket",52,120);
    stroke("#FF0000");
    noFill();
    rect(30,80,200,180);
    fill("#FF0000");
    text("Desk",20,50);
    stroke("#FF0000");
    noFill();
    rect(15,20,610,400);
}