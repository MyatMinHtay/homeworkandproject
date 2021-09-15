// Ui 

const textel = document.getElementById('text'),
      speedel = document.getElementById('speed');

const pgh = "Hello your system is weak so plz update your system we are anonymous.If you need help you can contact jerrym2mmh@protonmail.com Have a great Day!"

let idx = 1;
let speed = 1000;

function autotext(){

    textel.innerHTML = pgh.slice(0,idx);

    idx++;

    if(idx > pgh.length){
        idx= 1;
    }

    setTimeout(autotext,speed);
}

autotext();

speedel.addEventListener('input',()=>{
    // console.log('hay');
    // console.log(speedel.value);

    speed = 100 / speedel.value;
});

const searchbox = document.querySelector('.searchbox'),
      icon = document.querySelector('.fas');


      icon.addEventListener('click',()=>{
        searchbox.classList.toggle('showsearch');
      });

// UI 

const counters = document.querySelectorAll('.counter');
// const iconone = document.getElementById('one');
// console.log(counters);

counters.forEach((counter)=>{
    
    counter.innerText = "0";

    
    const updatecounter = ()=>{
        const target = Number(counter.getAttribute('data-target'));
       

        const ctr = +counter.innerText;
        

        const increment = target/100;

        

        if(ctr < target){
            counter.innerText = `${Math.ceil(ctr + increment)}`;
            setTimeout(updatecounter,50);
        }

      
    }

    
   
       
            updatecounter();
      
   
    
});



// 23AC WDF4077