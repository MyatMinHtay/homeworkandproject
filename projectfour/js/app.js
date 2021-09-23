// Start Navbar

const navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    // console.log('hay');
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
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