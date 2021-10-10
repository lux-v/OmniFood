let lastKnownScrollPosition = 0;
let ticking = false;

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

