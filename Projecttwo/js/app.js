// UI 

const search = document.querySelector('.search'),
      searchinput = document.querySelector('.searchinput');


      search.addEventListener('click',()=>{
        searchinput.classList.toggle('showsearch');
        console.log('hay');
      });

const btn = document.querySelector('.btn'),
      notification = document.querySelector('.notification'),
      menu = document.querySelector('.menu');

      btn.addEventListener('click',()=>{
        notification.classList.toggle('shownoti');
        menu.classList.toggle('showmenu');

      });