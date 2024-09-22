const container2 = document.querySelector('.container2');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const card = document.querySelectorAll('.card');
const bg1 = document.getElementById('bag1');
const bg2 = document.getElementById('bag2');
const bg3 = document.getElementById('bag3');
const bg4 = document.getElementById('bag4');
const bg5 = document.getElementById('bag5');
let scrollIndex = 1;

function showSlide(n) {
  card.forEach(item => {
    item.style.display = 'none';
  });
  scrollIndex = (scrollIndex + n + card.length) % card.length;
  card[scrollIndex].style.display = 'block';

  if (scrollIndex === 0) {
    bg1.style.display = 'block';
    bg2.style.display = 'none';
    bg3.style.display = 'none';
    bg4.style.display = 'none';
    bg5.style.display = 'none';
  }   if (scrollIndex === 1) {
    bg1.style.display = 'none';
    bg2.style.display = 'block';
    bg3.style.display = 'none';
    bg4.style.display = 'none';
    bg5.style.display = 'none';
  }   if (scrollIndex === 2) {
    bg1.style.display = 'none';
    bg2.style.display = 'none';
    bg3.style.display = 'block';
    bg4.style.display = 'none';
    bg5.style.display = 'none';
  }   if (scrollIndex === 3) {
    bg1.style.display = 'none';
    bg2.style.display = 'none';
    bg3.style.display = 'none';
    bg4.style.display = 'block';
    bg5.style.display = 'none';
  }  if (scrollIndex === 4) {
    bg1.style.display = 'none';
    bg2.style.display = 'none';
    bg3.style.display = 'none';
    bg4.style.display = 'none';
    bg5.style.display = 'block';
  }
}

showSlide(4);

scrollLeft.addEventListener('click', () => {
  showSlide(-1);
  bg1.style.opacity = '0';
  bg2.style.opacity = '0';
  bg3.style.opacity = '0';
  bg4.style.opacity = '0';
  bg5.style.opacity = '0';
  setTimeout(() => {
    bg1.style.opacity = '1';
    bg2.style.opacity = '1';
    bg3.style.opacity = '1';
    bg4.style.opacity = '1';
    bg5.style.opacity = '1';
  }, 100);
});

scrollRight.addEventListener('click', () => {
  showSlide(1);
  bg1.style.opacity = '0';
  bg2.style.opacity = '0';
  bg3.style.opacity = '0';
  bg4.style.opacity = '0';
  bg5.style.opacity = '0';
  setTimeout(() => {
    bg1.style.opacity = '1';
    bg2.style.opacity = '1';
    bg3.style.opacity = '1';
    bg4.style.opacity = '1';
    bg5.style.opacity = '1';
  }, 100);
});


document.getElementById('furina').addEventListener('click', function() {
  var furinaCard = document.getElementById("furina");
  var img1 = document.getElementById("pneumafurina");
  var img2 = document.getElementById("ousiafurina");
  var h1 = document.getElementById("pneumafurinatitle");
  var h2 = document.getElementById("ousiafurinatitle");

  img1.style.display = img1.style.display === 'none' || img1.style.display === '' ? 'block' : 'none';
  img2.style.display = img2.style.display === 'block' || img2.style.display === '' ? 'none' : 'block';
  h1.style.display = h1.style.display === 'none' || h1.style.display === '' ? 'block' : 'none';
  h2.style.display = h2.style.display === 'block' || h2.style.display === '' ? 'none' : 'block';
});

scrollLeft.addEventListener('click', () => {
  scrollLeft.style.background = '#888';

  setTimeout(() => {
    scrollLeft.style.background = `rgba(0,0,0,0.05)`;
  }, 150);
});

scrollRight.addEventListener('click', () => {
  scrollRight.style.background = '#888';

  setTimeout(() => {
    scrollRight.style.background = `rgba(0,0,0,0.05)`
  }, 150);
});