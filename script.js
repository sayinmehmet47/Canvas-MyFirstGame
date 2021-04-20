const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle="red"
// ctx.fillRect(20,20,150,150)
// ctx.fillStyle="blue"

// ctx.fillRect(200,20,150,150)

// ctx.lineWidth=5
// ctx.strokeStyle="green"
// ctx.strokeRect(100,200,150,100)

// ctx.clearRect(20,20,140,90)

// //fillText
// ctx.font="30px Arial"
// ctx.fillStyle="purple"
// ctx.fillText("Hello World",400,50)

// //strokeText
// ctx.lineWidth=1;
// ctx.strokeStyle="orange"
// ctx.strokeText("Hello",400,100)

//Paths
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100,200)
// //ctx.lineTo(50,50)
// ctx.closePath()
// ctx.fillStyle="coral"

// ctx.fill()
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(200,50)
// ctx.lineTo(150,200);
// ctx.lineTo(250,200)
// ctx.closePath()
// ctx.stroke();

// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle="teal"
// ctx.fill()

// //Arc
// ctx.beginPath();
// const centerX=canvas.width/2;
// const centerY=canvas.height/2

// ctx.arc(centerX,centerY, 150, 200,0,Math.PI*2);
// ctx.moveTo(centerX+100,centerY)
// ctx.arc(centerX,centerY,100,0,Math.PI,false)
// ctx.moveTo(centerX-60,centerY-80)
// ctx.arc(centerX-80,centerY-80,20,0,Math.PI*2)
// ctx.moveTo(centerX+100,centerY-80)
// ctx.arc(centerX+80,centerY-80,20,0,Math.PI*2)

// ctx.stroke();
//Animation
// const circle = {
//   x: 200,
//   y: 200,
//   size: 30,
//   dx: 5,
//   dy: 4,
// };

// drawCircle = () => {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = 'purple';
//   ctx.fill();
// };

// update = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle();

//   //change position
//   circle.x += circle.dx;
//   circle.y += circle.dy;

//   //yanlar
//   if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//     circle.dx *= -1;
//   }
//   //ust alt
//   if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
//     circle.dy *= -1;
//   }

//   requestAnimationFrame(update);
// };
// update();

//
//Animation 2
const image = document.getElementById('source');
const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 100,
  speed: 10,
  dx: 0,
  dy: 0,
};
drawPlayer = () => {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
};
clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

newPos = () => {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
};

detectWalls = () => {
  //Left wall
  if (player.x < 0) {
    player.x = 0;
  }
  //Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  //Top
  if (player.y < 0) {
    player.y = 0;
  }
  //Down
  if (player.y + player.h > canvas.height) {
    player.y = canvas.width - player.h;
  }
};

update = () => {
  clear();
  drawPlayer();
  newPos();
  requestAnimationFrame(update);
};
moveUp = () => {
  player.dy = -player.speed;
};
moveDown = () => {
  player.dy = player.speed;
};
moveRight = () => {
  player.dx = player.speed;
};

moveLeft = () => {
  player.dx = -player.speed;
};

keyDown = (e) => {
  console.log(e.key);
  if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowLeft') {
    moveLeft();
  } else if (e.key === 'ArrowUp') {
    moveUp();
  } else if (e.key === 'ArrowDown') {
    moveDown();
  }
};

keyUp = (e) => {
  if (
    e.key === 'Right' ||
    e.key === 'ArrowRight' ||
    e.key === 'Left' ||
    e.key === 'ArrowLeft' ||
    e.key === 'Up' ||
    e.key === 'ArrowUp' ||
    e.key === 'Down' ||
    e.key === 'ArrowDown'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
};

update();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
