const bb=document.querySelector('.numbut');
for(let i=0;i<16;i++){
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
    else{
        b.textContent='.';
    }
    d.appendChild(b);
    bb.appendChild(d);
}