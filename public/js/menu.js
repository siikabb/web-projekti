'use strict';

const openButton = document.querySelector('.rm-button-open');
const container = document.querySelector('#rm-container');
const closeButton = document.querySelector('.rm-button-open2');
const signbutton = document.querySelector('.signbutton');
const loginbutton = document.querySelector('.loginbutton');
const closeButton1 = document.querySelector('.rm-button-close1');
const menuBack = document.querySelector('.rm-button-close2');

const openMenu = () => {
  container.classList.add('rm-open');
};

const closeMenu = () => {
  container.classList.add('rm-open2');
};

const closeMenu2 = () => {
  container.classList.remove('rm-open');
};

const menuToBack = () => {
  container.classList.remove('rm-open2');
};

openButton.addEventListener('click', () => {
  openMenu();
});

closeButton.addEventListener('click', () => {
  closeMenu();
});

closeButton1.addEventListener('click', () => {
  closeMenu2();
});

menuBack.addEventListener('click', () => {
  menuToBack();
});

// 3D mousemove rotate

let constrain = 2000;
let mouseOverContainer = document.getElementById('ex1');
let ex1Layer = document.getElementById('ex1-layer');

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const transforms = (x, y, el) => {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  calcX = lerp(parseFloat(el.dataset.lastX) || calcX, calcX, 0.2);
  calcY = lerp(parseFloat(el.dataset.lastY) || calcY, calcY, 0.2);

  el.dataset.lastX = calcX;
  el.dataset.lastY = calcY;

  return (
    'perspective(100px) ' +
    '   rotateX(' +
    calcX +
    'deg) ' +
    '   rotateY(' +
    calcY +
    'deg) '
  );
};

const transformElement = (el, xyEl) => {
  el.style.transform = transforms.apply(null, xyEl);
};

// Remove 3D mousemove from Firefox and Safari (doesn't work properly / breaks)

const isFirefox = typeof InstallTrigger !== 'undefined';
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isFirefox) {
  // Code for Firefox
} else if (isSafari) {
  // Code for Safari
} else {
  // Code for other browsers (Chrome)
  if (window.innerWidth > 500) {
    mouseOverContainer.onmousemove = (e) => {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([ex1Layer]);
      window.requestAnimationFrame(() => {
        transformElement(ex1Layer, position);
      });
    };
    // console.log('big');
  } else {
    // console.log('small');
  }
}
