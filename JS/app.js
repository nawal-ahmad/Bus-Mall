'use strict';

//Gkobal Values
let leftImage = document.getElementById('left-image');
let middleImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');
let roundsCount = 0;
let roundsMax = 25;
let leftIndex;
let middleIndex;
let rightIndex;
let allImage = [];


// Constructor Function
function Products(name, source) {
  this.name = name;
  this.source = source;
  this.views = 0;
  this.votes = 0;
  allImage.push(this);
}


function objects() {
  new Products('bag', '..//img/bag.jpg');
  new Products('banana', '..//img/banana.jpg');
  new Products('bathroom', '..//img/bathroom.jpg');
  new Products('boots', '..//img/boots.jpg');
  new Products('breakfast', '..//img/breakfast.jpg');
  new Products('bubblegum', '..//img/bubblegum.jpg');
  new Products('chair', '..//img/chair.jpg');
  new Products('cthulhu', '..//img/cthulhu.jpg');
  new Products('dog-duck', '..//img/dog-duck.jpg');
  new Products('dragon', '..//img/dragon.jpg');
  new Products('pen', '..//img/pen.jpg');
  new Products('pet-sweep', '..//img/pet-sweep.jpg');
  new Products('scissors', '..//img/scissors.jpg');
  new Products('shark', '..//img/shark.jpg');
  new Products('sweep', '..//img/sweep.png');
  new Products('unicorn', '..//img/unicorn.jpg');
  new Products('usb', '..//img/usb.gif');
  new Products('water-can', '..//img/water-can.jpg');
  new Products('tauntaun', '..//img/tauntaun.jpg');
  new Products('wine-glass', '..//img/wine-glass.jpg');
}
objects();



// Random function
function generateIndex() {
  return Math.floor(Math.random() * allImage.length);
}


// Images
function renderImg() {
  leftIndex = generateIndex();
  middleIndex = generateIndex();
  rightIndex = generateIndex();

  while (leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex) {
    rightIndex = generateIndex();
    middleIndex = generateIndex();
  }
  allImage[leftIndex].views += 1;
  allImage[middleIndex].views += 1;
  allImage[rightIndex].views += 1;

  leftImage.setAttribute('src', allImage[leftIndex].source);
  middleImage.setAttribute('src', allImage[middleIndex].source);
  rightImage.setAttribute('src', allImage[rightIndex].source);

}
renderImg();


