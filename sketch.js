var ball;



function setup() {
  createCanvas(1200, 1000);
  ball=createSprite(200, 200, 50, 50)
  ball.shapeColor='green'
}

function draw() 
{
  background('red');
  if(keyDown(LEFT_ARROW))
  {ball.x=ball.x -5;
  }
  if(keyDown(RIGHT_ARROW))
  {ball.x=ball.x +5;
  }
  if(keyDown(UP_ARROW))
  {ball.y=ball.y -5;
  }
  if(keyIsDown(DOWN_ARROW))
  {ball.y=ball.y +5;
  }
drawSprites();
}




