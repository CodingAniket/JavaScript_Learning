function add(a,b){  //function declearation + parameterized function
return a+b;  //return type of the function  
}

let val=add(5,5); //returned value recieved by a variable + argumengts
console.log(val); //print function type


// function expression
let val2=function(a,b){
    return a+b;
}

let z= val2(5,5) //arguments
console.log(z);


let val3=(a,b)=>{  //arrow function for shorter syntax
    return a+b;
}
let y=val3(5,5); // arguments
console.log(y); 