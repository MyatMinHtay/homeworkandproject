// UI 


//========== Start About Section ==========

const buttons = document.querySelector('.btnripple');

const shows = document.querySelectorAll('.showabout');

const aboutbtn = document.querySelector('.aboutbtn');


   

    buttons.addEventListener('click',function(e){
      

    
        const cx = e.clientX;
        const cy = e.clientY;
      

        
        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;

        

        const xinside = cx-btnleft;
        const yinside = cy-btntop;

    
    
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top= yinside+"px";
        circle.style.left= xinside+"px";
        

      
        this.appendChild(circle);

        
        setTimeout(()=>{
            circle.remove();
        },600);

        shows.forEach(show=>show.classList.add('visible'));
        
});


aboutbtn.addEventListener('click',()=>{

    shows.forEach((show)=>{
        show.classList.remove('visible');
    });

    // console.log('hay');

});


const times = document.getElementById('times');
const loveme = document.querySelector('.loveme');


loveme.addEventListener('click',(e)=>{
    

    createheart(e);
    
   
});


const createheart = (e)=>{
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // console.log(heart);
    const cx = e.clientX;
    const cy = e.clientY;

    const offsettop = e.target.offsetTop;
    const offsetleft = e.target.offsetLeft;

    const xinside = cx - offsetleft;
    const yinside = cy - offsettop;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    setTimeout(()=>heart.remove(),1000);
}




//========== End About Section ==========


// ==========   Start Splid Landing Page =============
const container = document.querySelector('.container');

const left = document.querySelector('.left'),
      right = document.querySelector('.right');

// Event Listener 

left.addEventListener('mouseenter',()=>{
    
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter',()=>{
    
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave',()=>{
    
    container.classList.remove('hover-right');
})

// ============ End Splid Landing Page =============




//========== Start pricing Section ==========

const checkbox = document.getElementById('toggle'),
      slider = document.getElementById('changetime');
const changecurrency = document.getElementById('changecurrency');

const basic = document.querySelector('.standard');
const prof = document.querySelector('.personal');
const master = document.querySelector('.business');

// Event Listener 

// changecurrency.addEventListener('click',()=>{
//     console.log('hay');
// });

changecurrency.addEventListener,checkbox.addEventListener('click',()=>{
    // console.log('hay');
 
    if(checkbox.checked && changecurrency.checked){
        basic.innerText = 64800 + "Per Year" ;
        prof.innerText = 129600 + "Per Year";
        master.innerText = 216000 + "Per Year";
    }else if(checkbox.checked && !changecurrency.checked){
        basic.innerText = 32.4+"$" + "Per Year" ;
        prof.innerText = 64.8 +"$"+ "Per Year";
        master.innerText = 108+"$" + "Per Year";
    }else if(changecurrency.checked && !checkbox.checked ){
          [basic.textContent,prof.textContent,master.textContent] = [6000 + "Per Month",12000 + "Per Month",20000 +"Per Month"];
    }else if(!checkbox.checked && !changecurrency.checked){
        [basic.textContent,prof.textContent,master.textContent] = [3 + " $ Per Month",6 + " $ Per Month",10 +" $ Per Month"];
    }else{

    }
});

checkbox.addEventListener,changecurrency.addEventListener('click',()=>{
    // console.log('hay');
 
    if(checkbox.checked && changecurrency.checked){
        basic.innerText = 64800 + "Per Year" ;
        prof.innerText = 129600 + "Per Year";
        master.innerText = 216000 + "Per Year";
    }else if(checkbox.checked && !changecurrency.checked){
        basic.innerText = 32.4+"$" + "Per Year" ;
        prof.innerText = 64.8 +"$"+ "Per Year";
        master.innerText = 108+"$" + "Per Year";
    }else if(changecurrency.checked && !checkbox.checked ){
          [basic.textContent,prof.textContent,master.textContent] = [6000 + "Per Month",12000 + "Per Month",20000 +"Per Month"];
    }else if(!checkbox.checked && !changecurrency.checked){
        [basic.textContent,prof.textContent,master.textContent] = [3 + " $ Per Month",6 + " $ Per Month",10 +" $ Per Month"];
    }else{

    }
});



//========== End Pricing Section ==========

//========== Start Contact Section ==========

const labels = document.querySelectorAll('.form-group label');



labels.forEach(label=>{
 

    label.innerHTML = label.innerText
                    .split('')
                    .map((letter,index)=>
                        `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
                        .join('');
});


const button = document.querySelector('.toastbtn');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
];

// Event Listener 

button.addEventListener('click',()=>createnotification('Can\'t access!','danger'));

function createnotification(message,type){
   

    const notify = document.createElement('div');
    notify.classList.add('toastoo');
    notify.classList.add(type ? type : 'info');
    notify.innerText = message ? message : getrandommessage();
    

    toasts.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },3000)
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}


//========== End Contact Section ==========















