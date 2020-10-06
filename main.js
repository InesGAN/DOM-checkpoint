
function showDiv(divarticles){
var x=document.getElementById(divarticles);
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}

}
var total=document.querySelector(".pricetotal");
// delete
var deleteButton =document.querySelectorAll(".fa-trash-o");
console.log(deleteButton);
 Array.from(deleteButton).map(el => {el.addEventListener("click",() => 
 {el.parentElement.parentElement.parentElement.remove();});} );

 //like/dislike
var heartButton=document.querySelectorAll(".fa-heart-o");
console.log(heartButton);
Array.from(heartButton).map(el => {
    el.addEventListener("click", ()=>{
        console.log( el.classList); 
        el.classList.toggle("red")
    });
});

//plus
var plusButton=document.querySelectorAll(".fa-plus");
console.log(plusButton);
Array.from(plusButton).map(el => {
    el.addEventListener("click", ()=>{
      el.nextElementSibling.innerHTML =
      parseInt(el.nextElementSibling.innerHTML)+1; 
      var price=el.parentElement.previousElementSibling.innerHTML.replace("$","");
      console.log(total);
      total.innerHTML=parseInt(total.innerHTML)+parseInt(price)+"$";

    });
});
//minus
var minusButton=document.querySelectorAll(".fa-minus");
console.log(minusButton);
Array.from(minusButton).map(el => {
    el.addEventListener("click", ()=>{
      
        if ( el.previousElementSibling.innerHTML> 1){ el.previousElementSibling.innerHTML =
      parseInt(el.previousElementSibling.innerHTML)-1; }
else el.previousElementSibling.innerHTML =1

    });
});

