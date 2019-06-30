var slider1;
var slider2;

function setup(){
    createCanvas(400,600)
    originwidth = width/2;
    originheight = height/2
    slider1 = createSlider(height/2 - 200, height/2);
    slider2 = createSlider(PI/2 + 0.01745329252, PI, 0, PI/360);
    slider1.position(10, 10);
    slider2.position(10, 40);
    slider1.style('width', '100px');
    slider2.style('width', '100px');
}

function draw(){
    background('white')
    fill('#ef6353')
    noStroke()
    circle(originwidth, originheight, 400)
    var hval = slider1.value();
    var angle = slider2.value();

    fill('white')
    arc(originwidth, hval, 401, 401, PI/2 + angle, PI/2 - angle);
    fill('black')     
    text(hval, slider1.x * 2 + slider1.width, 20);
    text(angle, slider2.x * 2 + slider2.width, 40);

}