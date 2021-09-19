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