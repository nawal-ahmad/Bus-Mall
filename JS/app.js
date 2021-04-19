
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
let arrOfNames=[];
let arrOfShown=[];
let arrOfVotes=[];


// Constructor Function
function Products(name, source) {
  this.name = name;
  this.source = source;
  this.views = 0;
  this.votes = 0;
  allImages.push(this);
  arrOfNames.push(this.name);
}

console.log(allImages);


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



// Random function
function generateIndex() {
  return Math.floor(Math.random() * allImages.length);
}


// Images and count the views
function renderImg() {
  leftIndex = generateIndex();
  middleIndex = generateIndex();
  rightIndex = generateIndex();
  let arrIndex=[];
  while (leftIndex === middleIndex || leftIndex === rightIndex || rightIndex === middleIndex || arrIndex.includes(leftIndex) || arrIndex.includes(middleIndex) || arrIndex.includes(rightIndex)) {
    leftIndex=generateIndex();
    rightIndex = generateIndex();
    middleIndex = generateIndex();
  }
  arrIndex[0](leftIndex);
  arrIndex[1]=middleIndex;
  arrIndex[2]=rightIndex;

  allImages[leftIndex].views += 1;
  allImages[middleIndex].views += 1;
  allImages[rightIndex].views += 1;

  leftImage.setAttribute('src', allImages[leftIndex].source);
  middleImage.setAttribute('src', allImages[middleIndex].source);
  rightImage.setAttribute('src', allImages[rightIndex].source);
}
renderImg();


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
    // renderList();
    chart();
    leftImage.removeEventListener('click', handleClicking);
    middleImage.removeEventListener('click', handleClicking);
    rightImage.removeEventListener('click', handleClicking);
  }
}


// Button to show image
// let button = document.getElementById('btn');
// button.addEventListener('click', showingList);
// function showingList() {
//   renderList();
//   button.removeEventListener('click', showingList);
// }


// List
function renderList() {
  let ul = document.getElementById('list');
  for (let i = 0; i < allImages.length; i++) {
    arrOfVotes.push(Products.allImages[i].votes);
    arrOfShown.push(Products.allImages[i].views);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${allImages[i].name} was seen ${allImages[i].views} times had ${allImages[i].votes} votes.`;
  }
}
renderList();


function chart() {
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrOfNames,
      datasets: [{
        label: 'Number Of votes',
        data: arrOfVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 1
      }, {
        label: 'Number of Shown',
        data: arrOfShown,
        backgroundColor: [
          'rgb(192,192,192)'
        ],
        borderWidth: 1
      }]
    }
  });
}
