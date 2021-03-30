

let img;

function preload() {
  // load the original image
  img = loadImage("color.jpg");  
}

function setup() {
  createCanvas(img.height,img.width);
  pixelDensity(1);
  frameRate(40);
}

function draw() {
    image(img,0,0);
    
    loadPixels();
   
    img.loadPixels();
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++ ) {
        // Calculate the 1D location from a 2D grid
        let loc = (x + y*img.width)*4;
        // Get the R,G,B values from image
        let r,g,b;
        r = img.pixels[loc];
        g = img.pixels[loc+1];
        b = img.pixels[loc+2];
        // Calculate an amount to change brightness based on proximity to the mouse
        // The closer the pixel is to the mouse, the lower the value of "distance"
        let maxdist = 80;//dist(0,0,width,height);
        let d = dist(x, y, mouseX, mouseY);
        let bright = 255*(maxdist-d)/maxdist;
        r += bright;
         g += bright;
         b += bright;
        // Constrain RGB to make sure they are within 0-255 color range
        r = constrain(r, 0, 255);
         g = constrain(g, 0, 255);
         b = constrain(b, 0, 255);
        // Make a new color and set pixel in the window
        let pixloc = (y*width + x)*4;
        pixels[pixloc] = r;
        pixels[pixloc+1] = g;
        pixels[pixloc+2] = b;
        pixels[pixloc+3] = 255; 
        }
    }
    updatePixels();
}
