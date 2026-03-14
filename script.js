const buttons=document.querySelectorAll(".filters button");
const cards=document.querySelectorAll(".card");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");
button.classList.add("active");

let filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all" || card.classList.contains(filter)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

});

});