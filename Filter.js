var imgFile;
var image = null;
var imageGray = null;
var imageRed = null;
var imageRainbow = null;
var canvas = null;

function loadImage(){
  canvas = document.getElementById("can");
  imgFile = document.getElementById("file");
  image = new SimpleImage(imgFile);
  imageGray = new SimpleImage(imgFile);
  imageRed = new SimpleImage(imgFile);
  imageRainbow = new SimpleImage(imgFile);
  image.drawTo(canvas);
}

function imageIsLoaded(img) {
  if (img==null || !img.complete()) {
    alert("Image not loaded");
    return false;
  }
  else {
    return true;
  }
}

function doGray(){ 
  if (imageIsLoaded(image)) {
    for (var pixel of imageGray.values()) {
      var arg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      pixel.setRed(arg);
      pixel.setGreen(arg);
      pixel.setBlue(arg);
    }                  
    imageGray.drawTo(canvas);	         
  }
}

function doRed(){
  if (imageIsLoaded(image)) {
    for (var pixel of imageRed.values()) {
      var arg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      if (arg < 128) {
        pixel.setRed(arg*2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(arg*2-255);
        pixel.setBlue(arg*2-255);
      }
    }                      
    imageRed.drawTo(canvas);	         
  }
}

function doRainbow(){
  if (imageIsLoaded(image)) {     
                          
    imageRainbow.drawTo(canvas);	         
  }
}

function Reset(){
  image = new SimpleImage(imgFile);
  imageGray = new SimpleImage(imgFile);
  imageRed = new SimpleImage(imgFile);
  imageRainbow = new SimpleImage(imgFile);
  image.drawTo(canvas);
}