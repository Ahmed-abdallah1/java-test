let button =document.querySelectorAll(".acc-btn");
let accordion =document.querySelectorAll(".accordin");



for (let i = 0; i < accordion.length; i++) {
button[i].addEventListener('click',function (){
  for (let m = 0; m < accordion.length; m++) {
    
    if(i == m){
      accordion[m].style.height = accordion[i].scrollHeight + "px";

    }else{
      accordion[m].style.height =null;

    }
    // if (accordion[i].style.height == 0) {
    //   accordion[i].style.height = accordion[i].scrollHeight + "px";
  
    // }else{
    //   accordion[i].style.height =null;

    // }
  }
}  )
}

let smlimg = document.querySelectorAll(".imges .small-imges img");
let bigimg = document.querySelector(".imges .big-img img");
console.log(smlimg);
for (let q = 0; q < smlimg.length; q++) {
  smlimg[q].addEventListener('click',function () {
    let temp = bigimg.src
    bigimg.src=smlimg[q].src
    smlimg[q].src = temp
  })
  
}