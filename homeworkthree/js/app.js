//UI
const togglebtn = document.querySelector('.toggle');
const nav = document.querySelector('nav');

const closebtn = document.querySelector('.close-btn');

togglebtn.addEventListener('click',()=>{
    
  nav.classList.add('shownav');

});

closebtn.addEventListener('click',function(){
    nav.classList.remove('shownav');
});

// form container 

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

function showerror(input,message){
  const formcontrol = input.parentElement;
  formcontrol.classList = "form-control error";

  const small = formcontrol.querySelector('small');
  small.innerText = message;
}

function showsuccess(input){
  const formcontrol = input.parentElement;

  formcontrol.classList = "form-control success";
}

// Check Required Function

function checkrequired(inputarrs){
  // console.log(inputarrs);

  inputarrs.forEach(function(inputarr){
      
      if(inputarr.value === ''){
          showerror(inputarr,`${getfieldname(inputarr)} is required`);
      }else{
          showsuccess(inputarr);
      }
  })
}

// Get Field Name 
function getfieldname(inputarr){
  // console.log('hay')
  return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}

// Check Input Length
function checklength(input,min,max){
  if(input.value.length < min){
      showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
  }else if(input.value.length > max){
      showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
  }else{
      showsuccess(input);
  }
}

// Check email is valid
function checkemail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if(re.test(input.value)){
      showsuccess(input);
  }else{
      showerror(input,'Email is not valid');
  }
}

// Check Password Match 
function checkpasswordsmatch(input1,input2){
  if(input1.value !== input2.value){
      showerror(input2,'Password do not match');
  }
}
// Event Listener (mehtod 2)
form.addEventListener('submit',function(e){
  e.preventDefault();
  // console.log('hay');
  checkrequired([username,email,password,cfmpassword]);

  checklength(username,3,15);
  checklength(password,6,25);

  checkemail(email);

  checkpasswordsmatch(password,cfmpassword);
});

const signbtn = document.getElementById('open');
const container = document.querySelector('.container')

const closeform = document.getElementById('closeone');

signbtn.addEventListener('click',function(){
  container.classList.add('show-container');
});

closeform.addEventListener('click',function(){
  container.classList.remove('show-container');
});

// Music function 
const prevbtn = document.getElementById('prev'),
      playbtn = document.getElementById('play'),
      nextbtn = document.getElementById('next');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const musicbox = document.getElementById('musicbox');

const smallbox = document.querySelectorAll('span');

let songindex = 0;
let imgn = 0;

let song = ['All I Ever Need','Dream It Possible','Blue Bird','Nico Touches The Walls'];
let img = ['sample1','sample2','sample3','M21'];
loadsong(song[songindex],img[imgn]);

function loadsong(music,img){
    title.innerText = music;
    audio.src=`songs/${music}.mp3`;
    cover.src=`img/${img}.png`;
}

// Event Listener for play of pause
playbtn.addEventListener('click',()=>{
  const isplaying = musicbox.classList.contains('play');

  if(isplaying){
      pausesong();
  }else{
      playsong();
  }
});

// Play Song 
function playsong(){
  musicbox.classList.add('play');
  cover.classList.add('play');
  smallbox.forEach(function(mm,idx){
 
    mm.classList.add('play');
  });



  

  playbtn.querySelector('i.fas').classList.remove('fa-play');
  playbtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song 
function pausesong(){
  musicbox.classList.remove('play');
  cover.classList.remove('play');
  smallbox.forEach(function(mm,idx){
 
    mm.classList.remove('play');
  });
  

  playbtn.querySelector('i.fas').classList.add('fa-play');
  playbtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}



// Change Song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);


// Previous Song
function previoussong(){
  // console.log('pev');

  songindex--;
  imgn--;

  if(songindex < 0){
      songindex = song.length - 1;
      imgn = imgn.length - 1;
  }

  loadsong(song[songindex],img[imgn]);
  
  playsong();

}


// Next Song
function nextsong(){
  // console.log('pev');

  songindex++;
  imgn++;

  if(songindex > song.length -1){
      songindex = 0;
      imgn = 0;
  }

  loadsong(song[songindex],img[imgn]);
  
  playsong();

}