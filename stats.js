function openTab(evt, cityName) {
var i, tabcontent, tablink;
  tabcontent = document.querySelectorAll('.tabcontent');
  for(i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablink = document.querySelectorAll(".tablink");
  for(i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += " active";
};



const weapon = document.querySelector('.weapon');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const wp = document.querySelectorAll('.wp');
const wp1 = document.getElementById('wp1');
const wp2 = document.getElementById('wp2');
const wp3 = document.getElementById('wp3');
const wp4 = document.getElementById('wp4');
const wpcont = document.querySelectorAll('.weaponcontent')
let scrollIndex = 0;

function slide(n){
  wp.forEach(wp => {
    wp.style.display = 'none';
  });
  scrollIndex = (scrollIndex + n + wp.length) % wp.length;
  wp[scrollIndex].style.display = 'block';
  if (scrollIndex === 0) {
    wp1.style.display = 'block';
    wp2.style.display = 'none';
    wp3.style.display = 'none';
    wp4.style.display = 'none';
  } if (scrollIndex === 1) {
    wp1.style.display = 'none';
    wp2.style.display = 'block';
    wp3.style.display = 'none';
    wp4.style.display = 'none';
  } if (scrollIndex === 2) {
    wp1.style.display = 'none';
    wp2.style.display = 'none';
    wp3.style.display = 'block';
    wp4.style.display = 'none';
  } if (scrollIndex === 3) {
    wp1.style.display = 'none';
    wp2.style.display = 'none';
    wp3.style.display = 'none';
    wp4.style.display = 'block';
  }
  
};

slide(0);

left.addEventListener('click', () => {
  slide(-1);
});

right.addEventListener('click', () => {
  slide(1);
});



const gunMetal = getComputedStyle(root).getPropertyValue('--gunmetal').trim();

left.addEventListener('click', function() {
  var left = document.querySelector('.left');
  left.style.background = `rgba(255,255,255,0.0001)`;
  left.style.border = 'none'
  setTimeout(() => {
    left.style.background = `gunMetal`
    left.style.borderTop = '2px solid #515151'
    left.style.borderLeft = '2px solid #515151'
    left.style.borderBottom = '2px solid black'
    left.style.borderRight = '2px solid black'
  }, 80);
});

right.addEventListener('click', function() {
  var right = document.querySelector('.right');
  right.style.background = `rgba(255,255,255,0.0001)`;
  right.style.border = 'none'
  setTimeout(() => {
    right.style.background = `gunMetal`
    right.style.borderTop = '2px solid #515151'
    right.style.borderLeft = '2px solid #515151'
    right.style.borderBottom = '2px solid black'
    right.style.borderRight = '2px solid black'
  }, 80);
});