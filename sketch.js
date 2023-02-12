

function preload(){
font = loadFont("Cirqua.ttf");

}



function setup() {
  createCanvas(600, 600);
  frameRate(1);
  textFont(font);
 
 
  }



function draw() {
  background(0);
  
  background(0);
  
    
  textAlign(CENTER);
  textSize(random(20,48))
  fill(random(255),random(255),random(255));
  
  updateWord();
  for (let x=1;x<width;x+=60){
    for (let y=1;y<height;y+=60){
  text(word,x,y);
}
}
}

function updateWord(){
  word = "";
  let len = floor(random(3,5));
 
  for(let i =0;i <len ; i++){
  let c =char(floor(random(30,122)));
 
  word = word + c;
 }
 
 }


function mousePressed(){

}

 function keyPressed(){
 if(key == 's'){
  // save strings to text file
  saveCanvas("words.jpg");
 }
}