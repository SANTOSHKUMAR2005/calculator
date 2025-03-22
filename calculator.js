
let screen=document.querySelector(".screen");
let v="";


let icons=document.querySelector(".icons");

icons.addEventListener('click',makeString);

function makeString(e){
    let a=e.srcElement.innerText;
    if(a=='C'){
        v="";
   screen.innerText=`${v}`;
    }
    else if(a=="DEL"){
         v=v.substring(0,v.length-1);
   screen.innerText=`${v}`;
    }
    else if(a=='='){
        v=evaluatValue(v);
        screen.innerText=`${v}`;

    }
    else if(a=='%'){
        v=evaluatValue(v);
      if(v!=""){
        v=v/100;
        screen.innerText=`${v}`;
      }
        
    }
    else{
    v=v+a;
   screen.innerText=`${v}`;

   }
   
}

function evaluatValue(v){
    let op=[];
    let val=[];
    for (let i=0;i<v.length;) {
        let ch=v.charAt(i);
        if (i==0 && ch=='-') {
            if(v.length==1){
                screen.innerText='-';
                return v;
            }
            else{
                i++;
                 ch=v.charAt(i);
                if (ch!='/' && ch!='x' && ch!='+' && ch!='-') {
                    let a=0;
                    let d=0;
                    let p=0;
                    while (i<v.length && (v.charAt(i)!='/' && v.charAt(i)!='x' && v.charAt(i)!='+' && v.charAt(i)!='-')) {
                        ch=v.charAt(i);
                        if(ch=='.'){
                            d=1;
                       }
                        else if(d!=1){
                            a= a*10 +Number(ch);
                        }
                        else {
                            p++;
                            a= a+ Number(ch)/(10**p);
                        }
                        
                        i++;
                    }
                    val.push(-1*a);
                }
                else{
                    screen.innerText="syntax error";
                    return "";
                }
            }
        } 
         else if (ch=='/' || ch=='x'|| ch=='+' || ch=='-') {
            if (val.length==0) {
                screen.innerText="syntax error";
                return "";
            }
            else if(op.length==0){
                op.push(ch);
            }
            else{
                if (ch=='+' || ch=='-') {
                    let a=val.pop();
                    if (val.length==0) {
                        screen.innerText="syntax error";
                        return "";
                    }
                    let b=val.pop();
                    let opr=op.pop();
                    if (opr=='/') {
                        val.push(b/a);
                    }
                    else if (opr=='x') {
                        val.push(a*b);
                    }
                     else if(opr=='+'){
                        val.push(a+b);
                    }
                    else{
                        val.push(b-a);
                    }
                }
                else{

                    let opr=op.pop();
                    if (opr=='x' || opr=='/') {
                        let a=val.pop();
                        if (val.length==0) {
                            screen.innerText="syntax error";
                            return "";
                        }
                        let b=val.pop();
                        if (opr=='/') {
                            val.push(b/a);
                        }
                        else if (opr=='x') {
                            val.push(a*b);
                        }
                    }
                    else{
                        op.push(opr);
                    }
                }
                op.push(ch);
            }
            i++;
            
        }
        else{
            let a=0;
            let d=0;
            let p=0;
            while (i<v.length && (v.charAt(i)!='/' && v.charAt(i)!='x' && v.charAt(i)!='+' && v.charAt(i)!='-')) {
                ch=v.charAt(i);
                if(ch=='.'){
                    d=1;
               }
                else if(d!=1){
                    a= a*10 +Number(ch);
                }
                else {
                    p++;
                    a= a+ Number(ch)/(10**p);
                }
                
                i++;
            }
            val.push(a);
        }
    }

    while (val.length>1) {
        let a=val.pop();
        let b=val.pop();
        let opr=op.pop();
        if (opr=='/') {
            val.push(b/a);
        }
        else if (opr=='x') {
            val.push(a*b);
        }
         else if(opr=='+'){
            val.push(a+b);
        }
        else{
            val.push(b-a);
        }
    }

    if(op.length!=0){
        screen.innerText="syntax error";
        return "";
    }
    else{
        let a=val.pop();
        return a;
    }

}

 

 