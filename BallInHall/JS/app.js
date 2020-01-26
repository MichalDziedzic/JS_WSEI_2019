var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');



var maxX = playGround.clientWidth  - ball.clientWidth ;
var maxY = playGround.clientHeight - ball.clientHeight ;



function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma;
  
 
   console.log(event);
   console.log(x)
   console.log(y)
   

//   // Because we don't want to have the device upside down
//   // We constrain the x value to the range [-90,90]
if (x >  90) { x =  90};
if (x < -90) { x = -90};

// To make computation easier we shift the range of 
// x and y to [0,180]
x += 90;
y += 90;

//   // 10 is half the size of the ball
//   // It center the positioning point to the center of the ball
   ball.style.top  = (maxY*y/180 - 20) + "px";
   ball.style.left = (maxX*x/180 - 20) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);