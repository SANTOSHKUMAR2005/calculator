let c=document.querySelectorAll(".child");           
console.log(c);
let screen=document.querySelector(".screen");
let v="";
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let Dzero=document.getElementById("Dzero");
let zero=document.getElementById("zero");
let dot=document.getElementById("dot");
let equal=document.getElementById("equal");
let plus=document.getElementById("plus");
let devide=document.getElementById("devide");
let substract=document.getElementById("substract");
let multiply=document.getElementById("multiply");
let clear=document.getElementById("clear");
let cut=document.getElementById("cut");
let sin=document.getElementById("sin");
let cos=document.getElementById("cos");
let tan=document.getElementById("tan");
let cot=document.getElementById("cot");
let sec=document.getElementById("sec");
let persentage=document.getElementById("persentage");


one.onclick=function(){
     v=v+1;
     screen.innerText=`${v}`;
};
two.onclick=function(){
    v= v+2;
     screen.innerText=`${v}`;
    };
three.onclick=function(){
        v=v+3;
     screen.innerText=`${v}`;
        };
four.onclick=function(){
            v= v+4;
     screen.innerText=`${v}`;
            };
five.onclick=function(){
                v= v+5; 
     screen.innerText=`${v}`;
 };
six.onclick=function(){
    v= v+6;
     screen.innerText=`${v}`;
};
seven.onclick=function(){
    v= v+7;
     screen.innerText=`${v}`;
};
eight.onclick=function(){
    v= v+8;
     screen.innerText=`${v}`;
};
nine.onclick=function(){
    v= v+9;
     screen.innerText=`${v}`;
}; 
Dzero.onclick=function(){
    v= v+0+0;
     screen.innerText=`${v}`;
}; 
zero.onclick=function(){
    v= v+0;
     screen.innerText=`${v}`;
}; 
dot.onclick=function(){
    v= v+`.`;
     screen.innerText=`${v}`;
};    
plus.onclick=function(){
    v= v+`+`;
     screen.innerText=`${v}`;
};    
substract.onclick=function(){
    v= v+`-`;
     screen.innerText=`${v}`;
};
multiply.onclick=function(){
    v= v+`*`;
     screen.innerText=`${v}`;
};    
devide.onclick=function(){
    v= v+`/`;
     screen.innerText=`${v}`;
};    
clear.onclick=function (){
    v='';
     screen.innerText=`${v}`;
 };
 cut.onclick=function(){
    v=v.substring(0,v.length-1);
    screen.innerText=`${v}`;
 };
 persentage.onclick=function(){
    v=v/100;
    screen.innerText=`${v}`;
 };
equal.onclick=function (){
    v=eval(v);
         screen.innerText=`${v}`;
     };
 