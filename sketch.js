function setup() 
{
  createCanvas(500, 500);
  background('gray');
}

function draw() 
{
//console.log(mouseIsPress);
rect(0, 0, 100, 100);
  fill("red")
  stroke("5");
  strokeWeight(5);
  
  if(mouseIsPressed){
  circle(mouseX,mouseY,50,80)
  }
} 
