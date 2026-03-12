let value=document.getElementById("display").innerText;
value=Number.parseInt(value);
let decrement=document.getElementById("decrement");
let increment=document.getElementById("increment");
let reset=document.getElementById("reset");
let Updatedisplay=(val)=>{
val<0?display.style.backgroundColor="lightcoral":val>0?display.style.backgroundColor="lightgreen":display.style.backgroundColor="aqua";
}
decrement.addEventListener("click",()=>{
    value=value-1;
    document.getElementById("display").innerText=value;
        Updatedisplay(value);
})
increment.addEventListener("click",()=>{
    value=value+1;
    document.getElementById("display").innerText=value;
    Updatedisplay(value);
})
reset.addEventListener("click",()=>{
    document.getElementById("display").innerText=0;
    value=0;
    Updatedisplay(value);
})