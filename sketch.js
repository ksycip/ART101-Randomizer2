//boxdog names

let boxdog = [{
  name: "bailey",
  color: "boxdog toy color"
}, {
  name: "boom",
  color: "pink"
}, {
  name: "box",
  color: "blue"
}];

let randomIndex;
let animating = false;
//let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(40);


  text("click to randomize", 50, 50);
      //how to setTimeout w/ setBackground
  //setTimeout(changeBackground, 1000);
  //setInterval(changeBackground, 1000);


}

  // randomIndex = int(random(boxdog.length));
  // //console.log(boxdog[randomIndex].name);
  // text(boxdog[randomIndex].name, 50, 50);
  // boxdog.splice(randomIndex, 1);
  // //console.log(boxdog);

  //console.log(boxdog[2].color);

  // console.log("initial array is ");
  // console.log(boxdog);

  // boxdog.shift();
  // console.log("array after shift");
  // console.log(boxdog);

  // boxdog.unshift("kory");
  // console.log("array after unshift");
  // console.log(boxdog);

  //boxdog.splice(index, number);
  // boxdog.splice(2, 1);
  // console.log("array after splice");
  // console.log(boxdog);

function draw() {

if(animating == true){
  ellipse(random(width), random(height), random(50, 150));
}

}

function changeBackground(){
    //How to changeBackground colors repeatedly
//   if (counter <= 5){
//     counter++;
//     console.log(counter);
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
//
// }


}

function randomizer(){
  animating = false;

  if (boxdog[0]){

    background(random(200, 250));

    randomIndex = int(random(boxdog.length));
    text(`${boxdog[randomIndex].name}'s favorite color inspect ${boxdog[randomIndex].color}`, 50, 50);
    //text(boxdog[randomIndex].name + "'s favorite color is " + boxdog[randomIndex].color, 50, 50);
    boxdog.splice(randomIndex, 1);
  } else {
    background(random(200, 250));
    text("nothing left", 50, 50);
  }
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);


}
