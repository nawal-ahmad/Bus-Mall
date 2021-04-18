'use strict';

//Global Values
let leftImage = document.getElementById('left-image');
let middleImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');
let roundsCount = 0;
let roundsMax = 25;
let leftIndex;
let middleIndex;
let rightIndex;
let allImages = [];


// Constructor Function
function Products(name, source) {
  this.name = name;
  this.source = source;
  this.views = 0;
  this.votes = 0;
  allImages.push(this);
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
  return Math.floor(Math.random() * allImages.length);
}


// Images and count the views
function renderImg() {
  leftIndex = generateIndex();
  middleIndex = generateIndex();
  rightIndex = generateIndex();

  while (leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex) {
    rightIndex = generateIndex();
    middleIndex = generateIndex();
  }
  allImages[leftIndex].views += 1;
  allImages[middleIndex].views += 1;
  allImages[rightIndex].views += 1;

  leftImage.setAttribute('src', allImages[leftIndex].source);
  middleImage.setAttribute('src', allImages[middleIndex].source);
  rightImage.setAttribute('src', allImages[rightIndex].source);

}
renderImg();


// function openList1() {
//   let list = document.getElementById('list');

//   if (list.style.display == 'none'){
//     list.style.display = 'block';
//   }else{
//     list.style.display = 'none';
//   }
// }


// Votes counting and remove event
leftImage.addEventListener('click', handleClicking);
middleImage.addEventListener('click', handleClicking);
rightImage.addEventListener('click', handleClicking);

function handleClicking(event) {
  roundsCount++;

  if (roundsMax > roundsCount) {
    if (event.target.id === 'left-image') {
      allImages[leftIndex].votes++;
    } else if (event.target.id === 'middle-image') {
      allImages[middleIndex].votes++;
    } else {
      allImages[rightIndex].votes++;
    }
    renderImg();

  } else {
    let ul = document.getElementById('list');
    for (let i = 0; i < allImages.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${allImages[i].name} was seen ${allImages[i].views} times had ${allImages[i].votes} votes.`;
    }
    leftImage.removeEventListener('click', handleClicking);
    middleImage.removeEventListener('click', handleClicking);
    rightImage.removeEventListener('click', handleClicking);
  }
}



