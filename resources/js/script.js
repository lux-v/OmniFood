let lastKnownScrollPosition = 0;
let ticking = false;
const hamburger =  document.getElementById('hamburger');
const navUL = document.getElementById('navUL');
const hero = document.getElementById('hero-text-box');


hamburger.addEventListener('click', ()=>{
  navUL.classList.toggle('show');
  hero.classList.toggle('show');
  console.log("alo");
})

function loadScrollgBar(scrollPos,v1) {
    progress.style.width=scrollPos/v1*100+"%"
}

var element = document.documentElement;
let height = 0;

document.addEventListener('scroll', function(e) {
    
  lastKnownScrollPosition = window.scrollY;
  height= element.offsetHeight - element.clientHeight;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      loadScrollgBar(lastKnownScrollPosition, height);
      ticking = false;
    });

    ticking = true;
  }
})

