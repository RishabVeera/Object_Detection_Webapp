img="";

function preload() {
    img = loadImage("image3.png");
}

function setup() {
    canvas = createCanvas(640,450);
    canvas.center();
}

function draw() {
    image(img,0,0,640,450);
    fill("#FF0000");
    text("AC",230,34);
    stroke("#FF0000");
    noFill();
    rect(220,20,200,100);
    fill("#FF0000");
    text("Sofa",30,250);
    stroke("#FF0000");
    noFill();
    rect(20,220,550,200);
}