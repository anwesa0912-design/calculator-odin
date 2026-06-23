const bb=document.querySelector('.numbut');
const sc=document.createElement('div');
bb.appendChild(sc);
sc.classList.add('screen');
let f='';
let o='';
let t='';
for(let i=0;i<18;i++){
    const d=document.createElement('div');
    d.classList.add('nums-b');
    const b=document.createElement('button') 
    b.classList.add('buton')
    if(i<10){
    b.textContent=i;}
    else if (i==10){
        b.textContent='+';
    }
    else if(i==11){
        b.textContent='-';
    }
    else if(i==12){
        b.textContent='x';
    }
    else if(i==13){
        b.textContent='/';
    }
    else if(i==14){
        b.textContent='^';
    }
    else if(i==15){
        b.textContent='.';
    }
    else if(i==16){
        b.textContent='=';
    }
    else{
        b.textContent='C';
    }
    b.addEventListener('click',()=>{
        if(b.textContent ==='C'){
            sc.textContent='';
            f='';
            o=''
            t='';
        }
        else if(b.textContent ==='='){
            const n1=Number(f);
            const n2=Number(t);
            if(o==='+'){
                sc.textContent=n1+n2;
            }else if(o==='-'){
                sc.textContent=n1-n2;
            }else if(o==='x'){
                sc.textContent=n1*n2;
            }else if(o==='/'){
                sc.textContent=n1/n2;
            }else{
                sc.textContent=Math.pow(n1,n2);
            }
            f='';
            o='';
            t='';
        }
        else if(b.textContent==='+'|| b.textContent==='-'||b.textContent==='/'||b.textContent==='x'||b.textContent==='^'){
            o=b.textContent;
            sc.textContent='';
        }
        else{
            if(o ===''){
                f+=b.textContent;
                sc.textContent=f;
            }else{
                t+=b.textContent;
                sc.textContent=t;
            }
        }
    });
    d.appendChild(b);
    bb.appendChild(d);
}
window.addEventListener('keydown',(e)=>{
    if(e.key==='Shift'){
        return;
    }
     else if(e.key ==='C'){
            sc.textContent='';
            f='';
            o=''
            t='';
        }
        else if(e.key ==='='){
            const n1=Number(f);
            const n2=Number(t);
            if(o==='+'){
                sc.textContent=n1+n2;
            }else if(o==='-'){
                sc.textContent=n1-n2;
            }else if(o==='*'){
                sc.textContent=n1*n2;
            }else if(o==='/'){
                sc.textContent=n1/n2;
            }else{
                sc.textContent=Math.pow(n1,n2);
            }
            f='';
            o='';
            t='';
        }
        else if(e.key==='+'|| e.key==='-'||e.key==='/'||e.key==='*'||e.key==='^'){
            o=e.key;
            sc.textContent='';
        }
        else{
            if(o ===''){
                f+=e.key;
                sc.textContent=f;
            }else{
                t+=e.key;
                sc.textContent=t;
            }
        }
});