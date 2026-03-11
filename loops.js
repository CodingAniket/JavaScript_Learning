for(let i=0;i<10;i++) console.log(i);

let num=256,reserved=0,modulo=null;
while(num!=0){
    modulo=num%10;
    reserved=reserved*10+modulo;
    num=num/10;
}
console.log(`The reversed number is ${reserved}`);