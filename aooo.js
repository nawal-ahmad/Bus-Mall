



let index1st;
let index2ed;
let index3th;

let arrayOFIndex=[0,0,0];


function randerThreeImag(){


  arrayOFIndex=[];
  arrayOFIndex.push(index1st,index2ed,index3th);

  index1st=genrateRandomIndex();
  index2ed=genrateRandomIndex();
  index3th=genrateRandomIndex();



  while(index1st===index2ed || index1st===index3th ||index2ed===index3th ||arrayOFIndex.includes(index1st) ||arrayOFIndex.includes(index2ed) || arrayOFIndex.includes(index3th)){

    index1st=genrateRandomIndex();
    index2ed=genrateRandomIndex();
    index3th=genrateRandomIndex();

  }

  firstImag.src= Products.arryOFproduct[index1st].sourc;
  Products.arryOFproduct[index1st].numShown++;

  secendImag.src=Products.arryOFproduct[index2ed].sourc;
  Products.arryOFproduct[index2ed].numShown++;

  thirdImag.src=Products.arryOFproduct[index3th].sourc;
  Products.arryOFproduct[index3th].numShown++;


}



randerThreeImag();




let counts = 0;
let maxAttempts = 10;



container.addEventListener('click',trace);



function trace (event){


  console.log(event.target.id);

  counts++;

  if (maxAttempts>=counts){

    if (event.target.id==='the-1st') {
      Products.arryOFproduct[index1st].numClicks++;
    }

    if (event.target.id==='the-2nd') {
      Products.arryOFproduct[index2ed].numClicks++;
    }

    if (event.target.id==='the-3ed') {
      Products.arryOFproduct[index3th].numClicks++;
    }
    randerThreeImag();

  }
}


function listing (){


  let list=document.getElementById('unList');

  let x;
  for (let i = 0; i < Products.arryOFproduct.length; i++) {

    x=Products.arryOFproduct[i];

    let item=document.createElement('li');
    list.appendChild(item);
    item.textContent=`The Product name : ${x.name} is Shown ${x.numShown} and it picked ${x.numClicks}  `;
    clickArray.push(x.numClicks);
    shownArray.push(x.numShown);

  }

}


let butten=document.getElementById('btn');
butten.addEventListener('click', showlish);





