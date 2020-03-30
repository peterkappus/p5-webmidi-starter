"use strict";

//this example makes random spots which shrink over time.

var discs = []; //an array to hold our disks

function setup() {

  //create a new canvas to draw on.
  // use the whole window
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  
}

WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  
    WebMidi.inputs[0].addListener('noteon', "all",
        function (e) {
          //do something...
          // you can use parameters like e.note.number to get the note number or e.velocity for the velocity (from 0-127)
          
          //push a new disc onto our array of discs
          //pass the velocity to determine how big to make it
//          for(var i=0; i < 3; i ++){
            discs.push(new Disc(e.velocity));
 //         }
        }
      );
      
  }
  
});

  
  
function draw() {
  //FUN-> turn this off to "paint"
  
  //white=255
  background(255);
    
  //first draw & move 'em
  for(var i in discs){
    discs[i].draw();
    discs[i].step();
  }
  
  //in a separate loop, delete the ones which have shrunk too be nearly invisible.
  for(var i in discs){
    var d = discs[i];
    
    // if radius < 0.1
    if(d.rad < 0.1) {

      //free up the memory (not sure this is totally necessary)
      delete discs[i];

      //delete it from the array
      discs.splice(i,1);    
    }
  }
  
}


//class to define our discs and how to draw and iterate them
class Disc{
  //construct a new disc
  constructor(vel){
    this.x = width/8 + random(width*6/8);
    this.y = height/8 + random(height*6/8);
    //random grayscale up to 200 (of 255) so not too pale
    this.color = random(200);
    
    //map the velocity (from 0,127) to a starting radius (width/100 to width/20)
    this.rad = map(vel,0,127,width/20,width/2);
  }
  
  //a draw method for each disc
  draw() {
    fill(this.color);
    //fill(this.r, this.g, this.b, this.alpha);
    noStroke();
    ellipse(this.x,this.y,this.rad * 2,this.rad * 2);
    
  }

  //call this for every disc, each time we pass through the "draw" loop in the main sketch
  step(){
    //gradually shrink
    this.rad *= 0.992;      
  }
}
