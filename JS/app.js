/* eslint-disable no-unused-vars */

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

// console.log(allImages);
Products.allImages=[];

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


let arrIndex=[];
// Images and count the views / avoid repeating images in the same time and next
function renderImg() {
  // console.log('before '+arrIndex);
  leftIndex = generateIndex();
  middleIndex = generateIndex();
  rightIndex = generateIndex();
  while (leftIndex === middleIndex || leftIndex === rightIndex || rightIndex === middleIndex || arrIndex.includes(leftIndex) || arrIndex.includes(middleIndex) || arrIndex.includes(rightIndex)) {
    leftIndex=generateIndex();
    middleIndex=generateIndex();
    rightIndex = generateIndex();
  }
  arrIndex=[leftIndex,middleIndex,rightIndex];

  // console.log('after '+arrIndex);

  // leftImage.src=Products.allImages[leftIndex].source;
  leftImage.setAttribute('src', allImages[leftIndex].source);
  allImages[leftIndex].views += 1;
  middleImage.setAttribute('src', allImages[middleIndex].source);
  allImages[middleIndex].views += 1;
  rightImage.setAttribute('src', allImages[rightIndex].source);
  allImages[rightIndex].views += 1;
}


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
    } else if((event.target.id === 'right-image')){
      allImages[rightIndex].votes++;
    }
    else {
      alert('Please click on one of the products!');
      roundsCount--;
    }
    renderImg();
  }
  else {
    renderList();
    chart();
    chartA();
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
    arrOfVotes.push(allImages[i].votes);
    arrOfShown.push(allImages[i].views);
    // console.log(arrOfShown);
    // console.log(arrOfVotes);
    let li = document.createElement('li');
    ul.appendChild(li);
    // li.textContent = `${allImages[i].name} was seen ${allImages[i].views} times had ${allImages[i].votes} votes.`;
  }
}



function chart() {
  let ctx = document.getElementById('myChart');
  // eslint-disable-next-line no-undef
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
renderImg();

// function chartA() {
//   let ctx = document.getElementById('myChart');
//   // eslint-disable-next-line no-undef
//   let myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: arrOfNames,
//       datasets: [{
//         label: 'Number Of votes',
//         data: arrOfVotes,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//         ],
//         borderWidth: 1
//       }, {
//         label: 'Number of Shown',
//         data: arrOfShown,
//         backgroundColor: [
//           'rgb(192,192,192)'
//         ],
//         borderWidth: 1
//       }]
//     }
//   });
// }

