//https://en.wikipedia.org/wiki/Fourier_series
let angle = 0;
let wave = [];

let slider;

function setup() {
  createCanvas(800, 400);
  slider = createSlider(1, 50, 1)
}

function draw() {
  background(5);
  translate(150, 200);
  let x = 0;
  let y = 0;

  for(let i = 0; i < slider.value(); i ++){
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 60 * (4/(n * PI));
    x += radius * cos(n * angle);
    y += radius * sin(n * angle);
  
    // circles
    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy , radius *2);

    // dots
    fill(255, 100)
    ellipse(x, y, 4);

    // line
    stroke(255);
    line(prevx, prevy, x, y);
}
  wave.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave[0])
  beginShape()
  noFill()
  for(let i = 0; i < wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape()

  angle -= 0.05;

  if(wave.length > 1000){
    wave.pop()
  }
}
