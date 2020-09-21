/* global createCanvas, background, loadImage, colorMode, HSB, ellipse, tint, image, width, height, mouseX, rect, fill, mouseIsPressed */

let ballImage, x, xVelocity, y, yVelocity, logoWidth, logoHeight, paddleImage,i;

function setup() {
  createCanvas(500, 500);
  //We only want to load the logo once.
  ballImage = loadImage(
    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Table_tennis_ball.png"
  );
  x = 25;
  xVelocity = 3;
  y = 25;
  yVelocity = 3;
  logoWidth = 50;
  logoHeight = 50;
  colorMode(HSB, i, 100, 100);
  i = 20;
  // image(ballImage, 0, 0);
  // tint(0, 153, 204); // Tint blue
  // image(ballImage, 50, 0);
  
}

function draw() {
  background(i);
  if (mouseIsPressed) {
    i = (i += 1) % 360;
  }
  fill(79,79,36);
  rect(x, 480, 80, 20);
  

  
  // if it hits a canvas border, switch direction
  if (x > width - logoWidth || x <= 0) {
    xVelocity = xVelocity * -0.8;
  }

  // if it hits a canvas border, switch direction
  if (y > height - 1.5 * logoHeight || y <= 0) {
    yVelocity = yVelocity * -1.1;
  }

  x = x + xVelocity;
  y = y + yVelocity;
  
  if (y > 500) {
    yVelocity = yVelocity * -1.0;
  }
  // Draw the logo at the new position.
  image(ballImage, x, y, logoWidth, logoHeight);
  
  
//     //image(ballImage, 0, 0);
//     // tint(0, 153, 204); 
//     // image(ballImage, 50, 0);
//   }
}



  
