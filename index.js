// console.log("Hello Welcome FSD")


// const sum=function (a,b){
//     return Math.sqrt(a) + Math.sqrt(b);
    
// }
// console.log(sum(3,4));


// const sum=(a,b)=>{return a+b};
// console.log(sum(3,4));


//IIFE
// (()=>{
//     console.log("Heyyy...using IIFE")
// })();


// let a=23;
// if(a<40){
//     let a=40;
//     console.log("value of a inside block = "+a)
// }
// console.log("value of a outside block "+a)


//Callback
// function sum(a,b){
//     return a+b;
// }

// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("Hiii,"+msg+" and your result is = "+result)
// }
// msgWithSum(sum,"Rahul")


function login(error,msg){
    if(error){
        console.log("Error is:" +error)
    }
    else{
        console.log(msg)
    }
}

function loginHanler(username,password,clbk){
     if(username=="ptomer30" && password=="12345"){
        clbk(null,"Login Success")
     }else{
        clbk("username or password is incorrect",null)
     }
}

loginHanler("ptomer40","12345",login);