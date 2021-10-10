let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos,v1) {
    progress.style.width=scrollPos/v1*100+"%"
}

var height1 =document.documentElement.scrollHeight


document.addEventListener('scroll', function(e) {
    
  lastKnownScrollPosition = window.scrollY;
  

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition,height1);
      ticking = false;
    });

    ticking = true;
  }
})