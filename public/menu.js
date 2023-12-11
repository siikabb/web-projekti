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
  // container.classList.remove('rm-open');
  // container.classList.remove('rm-open');
  // console.log('closed');
};

const closeMenu2 = () => {
  container.classList.remove('rm-open');
  // signbutton.classList.remove('hidebutton');
  // loginbutton.classList.remove('hidebutton');
  // console.log('test2');
};

const menuToBack = () => {
  container.classList.remove('rm-open2');
};

// loginbutton.addEventListener('click', () => {
//   console.log('login');
// });

openButton.addEventListener('click', () => {
  openMenu();
  // hideButtons();
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

// const hideButtons = () => {
//   signbutton.classList.add('hidebutton');
//   loginbutton.classList.add('hidebutton');
// };

// const dt = document.querySelectorAll('dt');

// var modal = document.getElementById('myModal');

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName('close')[0];

// dt.forEach(function (dt) {
//   // Do something with each button, for example, add an event listener
//   dt.addEventListener('click', function () {
//     // console.log('teest');
//     modal.style.display = 'block';
//   });
// });

// span.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// rm-in class adding and removing is missing

// 3d rotate

// let constrain = 1000;
// let mouseOverContainer = document.getElementById('ex1');
// let ex1Layer = document.getElementById('ex1-layer');

// function transforms(x, y, el) {
//   let box = el.getBoundingClientRect();
//   let calcX = -(y - box.y - box.height / 2) / constrain;
//   let calcY = (x - box.x - box.width / 2) / constrain;

//   return (
//     'perspective(100px) ' +
//     '   rotateX(' +
//     calcX +
//     'deg) ' +
//     '   rotateY(' +
//     calcY +
//     'deg) '
//   );
// }

// function transformElement(el, xyEl) {
//   el.style.transform = transforms.apply(null, xyEl);
// }

// mouseOverContainer.onmousemove = function (e) {
//   let xy = [e.clientX, e.clientY];
//   let position = xy.concat([ex1Layer]);

//   window.requestAnimationFrame(function () {
//     transformElement(ex1Layer, position);
//   });
// };

// const darkButton = document.querySelector('#modebutton');

// darkButton.addEventListener('click', () => {
//   darkToggle();
// });

// const darkToggle = () => {
//   const element = document.body;
//   element.classList.toggle('dark-mode');
// };
