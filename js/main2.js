let title =document.querySelector(".title input");
let coustinputs =document.querySelectorAll(".calc input");
let count = document.querySelector(".count input");
let department = document.querySelector(".department select");
let creatbtn = document.querySelector(".sentdata button");
let tbody = document.querySelector(".contant .trbody");
let removebtn = document.querySelector(".clear-btn")
let spanbtn =document.querySelector(".spanbtn")
let globelid;
let alldata = [];
let mood = "create";

let getTotalprice = () => {

    let price = coustinputs[0].value;
    let tax = coustinputs[1].value;
    let delivery = coustinputs[2].value;
    let discount = coustinputs[3].value;
    
    let taxcost = +price * +tax / 100;
    let priceaftertax = +taxcost + +price;
    let priceaftertaxanddelivery = +priceaftertax + +delivery;
    let total = +priceaftertaxanddelivery - +discount;
     coustinputs[4].value = Math.ceil(total);

}
for (let i = 0; i < coustinputs.length; i++) {
    coustinputs[i].addEventListener("keyup" , getTotalprice)
}

let createobject = () => {
let prouducts = {
    title : title.value,
    price : coustinputs[0].value,
    tax : coustinputs[1].value,
    delivery : coustinputs[2].value,
    discount : coustinputs[3].value,
    total : coustinputs[4].value,
    department : department.value,
    count : count.value,
}

if (mood == 'create') {
    if( prouducts.count > 1){
        for (let k = 1; k < prouducts.count; k++) {  
            alldata.push(prouducts);
        }
    }else{
        alldata.push(prouducts);
    }
    console.log(mood);
}else{
    alldata[globelid]=prouducts;
    mood = 'create'
    creatbtn.innerHTML = `Create new product `
    creatbtn.classList.remove("yellowbutton")
    count.classList.remove("none"); 

}
alldata.push(prouducts);
localStorage.setItem('product', JSON.stringify(alldata));
ClearAllInputs();
ShowData()
}
creatbtn.addEventListener('click', createobject)
if (localStorage.product == null) {
    alldata = [];
    
}else{
    alldata = JSON.parse(localStorage.product);
}

let ShowData = ()=>{
    trs = "";
    for (let i = 0; i < alldata.length; i++) {
        spanbtn.innerHTML= i +1;
        trs +=
        ` 
        <tr>
        <td>${i + 1}</td>
        <td>${alldata[i].title}</td>
        <td>${alldata[i].price}</td>
        <td>${alldata[i].tax}</td>
        <td>${alldata[i].delivery}</td>
        <td>${alldata[i].discount}</td>
        <td>${alldata[i].total}</td>
        <td>${alldata[i].department}</td>
        <td><i onclick="Editoneitem(${i})" class="fa-solid fa-pen-to-square"></i></td>
        <td><i  onclick="removeoneitem(${i})" class="fa-solid fa-trash"></i></td>
        </tr>
        `
    }
    console.log(alldata);

    tbody.innerHTML=  trs ;
    if( alldata.length > 0 ){
        removebtn.classList.remove("none")
    }else{
        removebtn.classList.add("none")
    }
}
ShowData()


let clearall = ()=>{
    if (confirm("Are you sure") ) {
        alldata = []
        localStorage.setItem('product', JSON.stringify(alldata));
        // localStorage.clear(); 
        ShowData()
    }
}

removebtn.addEventListener('click', clearall)

let removeoneitem =(i)=>{
alldata.splice(i,1);
localStorage.product = JSON.stringify(alldata)
ShowData()
}
let ClearAllInputs = ()=>{
     title.value =
     coustinputs[0].value = "";
     coustinputs[1].value = "";
     coustinputs[2].value = "";
     coustinputs[3].value = "";
     coustinputs[4].value = "";
     department.value = "";
     count.value = "";
}
let Editoneitem = (i)=>{
    mood = "update";
     title.value = alldata[i].title
    coustinputs[0].value = alldata[i].price
     coustinputs[1].value = alldata[i].tax
    coustinputs[2].value = alldata[i].delivery
    coustinputs[3].value = alldata[i].discount
    coustinputs[4].value= alldata[i].total
    count.value = alldata[i].count
    department.value = alldata[i].department
    globelid = i;
   count.classList.add("none"); 
   creatbtn.innerHTML = `Update product (${i +1})`;
   creatbtn.classList.add("yellowbutton");
   console.log(mood);
}
