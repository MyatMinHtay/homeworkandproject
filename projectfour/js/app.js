// Start Navbar

const navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

const navbar = document.querySelector('.navbar');
const catagory = document.querySelector('.catagorys');
const about = document.querySelector('.about');
const pricing = document.querySelector('.pricing');
const contact = document.querySelector('.contact');

window.addEventListener('scroll',()=>{
    // console.log('hay');
    const getscrolly = window.scrollY;
    console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }

    if(getscrolly >= 400){
        catagory.classList.add('showcata');
    }else{
        catagory.classList.remove('showcata');
    }

    if(getscrolly >= 1900){
        about.classList.add('showcata');
    }else{
        about.classList.remove('showcata');
    }

    if(getscrolly >= 2350){
        pricing.classList.add('showcata');
    }else{
        pricing.classList.remove('showcata');
    }

    if(getscrolly >= 3000){
        contact.classList.add('showcata');
    }else{
        contact.classList.remove('showcata');
    }


    
});

// End Navbar

// Start Gallery Selection 

const gallerylists = document.querySelectorAll('.gallerylists');
const knowledges = document.querySelectorAll('.knowledge'),
      cartoons = document.querySelectorAll('.cartoon'),
      motis = document.querySelectorAll('.moti'),
      shorts = document.querySelectorAll('.short');


      gallerylists.forEach((gallerylist)=>{
        //   console.log(gallerylist);
        gallerylist.addEventListener('click',(e)=>{
            let datafilter = gallerylist.getAttribute('data-filter');

            // console.log(datafilter);
            removeactiveitem();
            e.target.classList.add('activeitems');

            if(datafilter === "knowledge"){
       
                knowledges.forEach(knowledge=>{
                    knowledge.style.display = "flex";
                });

                cartoons.forEach(cartoon=>{
                    cartoon.style.display = "none";
                });

                motis.forEach(moti=>{
                    moti.style.display = "none";
                });

                shorts.forEach(short=>{
                    short.style.display = "none";
                });

            }else if(datafilter === "cartoon"){

               

                knowledges.forEach(knowledge=>{
                    knowledge.style.display = "none";
                });

                cartoons.forEach(cartoon=>{
                    cartoon.style.display = "flex";
                });

                motis.forEach(moti=>{
                    moti.style.display = "none";
                });

                shorts.forEach(short=>{
                    short.style.display = "none";
                });
               
            }else if(datafilter === "moti"){
               

                knowledges.forEach(knowledge=>{
                    knowledge.style.display = "none";
                });

                cartoons.forEach(cartoon=>{
                    cartoon.style.display = "none";
                });

                motis.forEach(moti=>{
                    moti.style.display = "flex";
                });

                shorts.forEach(short=>{
                    short.style.display = "none";
                });

            }else if(datafilter === "short"){
               

               knowledges.forEach(knowledge=>{
                    knowledge.style.display = "none";
                });

                cartoons.forEach(cartoon=>{
                    cartoon.style.display = "none";
                });

                motis.forEach(moti=>{
                    moti.style.display = "none";
                });

                shorts.forEach(short=>{
                    short.style.display = "flex";
                });
            }else if(datafilter === "all"){
                knowledges.forEach(knowledge=>{
                    knowledge.style.display = "flex";
                    
                });

                cartoons.forEach(cartoon=>{
                    cartoon.style.display = "flex";
                });

                motis.forEach(moti=>{
                    moti.style.display = "flex";
                });

                shorts.forEach(short=>{
                    short.style.display = "flex";
                });
            }
        });
      });

    //   remove current active item 

    function removeactiveitem(){
        gallerylists.forEach(gallerylist=>{
            gallerylist.classList.remove('activeitems');
        });
    }



// End Gallery Selection 

// Start About Section 

const textel = document.getElementById('text');
const pgh = "ဒီပရော်ဂျက်လေးကို movie stram website လေးတစ်ခုအဖြစ်ပုံဖော်ထားပါတယ် movie ဆိုလို့ channel myanmar တို့လို movie တွေတင်တာမျိုးမဟုတ်ပဲ ကိုယ့်ဘာသာ ဘာသာပြန်ပြီးတင်တာမျိုးလေးတွေ လုပ်ချင်လို့ ဖန်တီးထားတာပါ ပထမဆုံး ကတော့ navbar မှာ ပုံမှန်အနေအထားမှာတော့ background ကို transparent ပေးထားပြီး scroll ဆွဲလိုက်ရင်တော့ background လေးထည့်ပေးထားပါတယ် နောက် size ချုံလိုက်လို့ ပေါ်လာတဲ့ toggle button လေးမှာလည်း animation လေးထည့်ပေးထားပါတယ်။ နောက် catagory ပိုင်းမှာတော့ မတူညီတဲ့ video အမျိုးအစားလေးတွေပြထားပြီး နမူနာလေးတွေပြထားပါတယ် အဲ့ထပ်ပိုကြည့်ချင်ရင်တော့ navbar မှာရှိတဲ့ catagory ကနေတစ်ဆင့်သွားရမှာပါဗျvideo လေးတွေကို ifram နဲ့ယူသုံးထားလို့ တိုက်ရိုက်ကြည့်ချင်တာဖြစ်ဖြစ် download လုပ်ချင်တာဖြစ်ဖြစ် အလွယ်တကူလုပ်လို့ရမှာပါabout မှာကျတော့ autotext က လွယ်လို့ထည့်ထားတာပါဗျ 😁နောက်တစ်ခု pricing မှာလည်း chechbox လေးတစ်ခုပဲ ရိုးရိုးရှင်းရှင်းလုပ်ထားပါတယ် နောက်ဆုံး contact မှာလည်း ဘာမှထွေထွေထူးထူး ထည့်ထားတာတော့မရှိပါဘူး section အကုန်လုံးကိုတော့ scroll ဆွဲလိုက်တဲ့အခါ အောက်ကနေတက်လာတဲ့ပုံစံလေး animation လေးတစ်ခု ထည့်ထားပါတယ်ဗျာ။ကျေးဇူးတင်ပါတယ်ဗျာ။";

let idx = 1;

function autotext(){

    textel.innerHTML = pgh.slice(0,idx);

    idx++;

    setTimeout(autotext,30);

    // if(idx > pgh.length){
    //     idx = 1;
    // }
}

autotext();

// End About Section 


// Start Pricing Section 

const checkbox = document.getElementById('toggle');
const normal = document.querySelector('.normal'),
      premium = document.querySelector('.premium'),
      diamond = document.querySelector('.diamond');

checkbox.addEventListener('click',()=>{

    if(checkbox.checked){
        [normal.innerText,premium.innerText,diamond.innerText]  = ["33 $ per month","70 $ per month","110 $ per month"] ;
        console.log('hay');
    }else{
        [normal.innerText,premium.innerText,diamond.innerText] = ["3 $ per month","6 $ per month","12 $ per month"];
    }


});



// End Pricing Section 