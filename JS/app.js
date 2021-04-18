'use strict';

let rightImg =document.getElementById('right-image');
let middleImg =document.getElementById('middle-image');
let leftImg =document.getElementById('left-image');

let clickedTimes=0;
let allProducts=[];
let roundsNumber=25;
let rightIndex;
let middleIndex;
let leftIndex;

function Product(name,source,shownTimes,clickedTimes){
this.name=name;
this.source=source;
this.shownTimes=shownTimes;
this.clickedTimes=clickedTimes;
allProducts.push(this);
}

new Product = ('bag','../Images/bag.jpg');
new Product = ('banana','../Images/banana.jpg');
new Product = ('bathroom','../Images/bathroom.jpg');
new Product = ('boots','../Images/boots.jpg');
new Product = ('breakfast','../Images/breakfast.jpg');
new Product = ('bubblegum','../Images/bubblegum.jpg');
new Product = ('chair','../Images/chair.jpg');
new Product = ('cthulhu','../Images/cthulhu.jpg');
new Product = ('dog-duck','../Images/dog-duck.jpg');
new Product = ('dragon','../Images/dragon.jpg');
new Product = ('pen','../Images/pen.jpg');
new Product = ('pet-sweep','../Images/pet-sweep.jpg');
new Product = ('scissors','../Images/scissors.jpg');
new Product = ('shark','../Images/shark.jpg');
new Product = ('sweep','../Images/sweep.png');
new Product = ('tauntaun','../Images/tauntaun.jpg');
new Product = ('unicorn','../Images/unicorn.jpg');
new Product = ('usb','../Images/usb.gif');
new Product = ('water-can','../Images/water-can.jpg');
new Product = ('wine-glass','../Images/wine-glass.jpg');


function genrateRandomIndex(){
  return Math.floor(Math.random() * Product.allProducts.length); 
}

function renderThreeImages(){
  rightIndex = genrateRandomIndex();
  middleIndex = genrateRandomIndex();
  leftIndex = genrateRandomIndex();
  while ((rightIndex===middleIndex) || (rightIndex===leftIndex) || (middleIndex===leftIndex)){
    rightIndex=genrateRandomIndex();
    middleIndex=genrateRandomIndex();
  }
  rightImg.setAttribute.src=Product.allProducts[rightIndex].source;
  middleImg.src=Product.allProducts[middleImg];
  leftImg.src=Product.allProducts[rightIndex];
}
renderThreeImages();


