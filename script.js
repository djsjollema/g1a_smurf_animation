const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let image = new Image();
image.src = "smurf.png";
let sx,sy,sw,sh,x,y,w,h;
let counter = 0;

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

image.addEventListener('load',()=>{
  // begin hier jouw script
    fps = 2;
    sw = image.width/4;
    sh = image.height/4;
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
});

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved

function animate() {

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        context.clearRect(0,0,canvas.width,canvas.height)
          sx = counter%4*sw;
          sy = Math.floor(counter/4)*sh;
          x = 0;
          y = 0;
          w = sw;
          h = sh;
          console.log(counter);
          context.drawImage(image,sx,sy,sw,sh,x,y,w,h);
          if(counter>14){
            counter=0;
          }
          counter++;

        }
    }
