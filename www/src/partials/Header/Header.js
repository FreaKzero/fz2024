

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function headerPara() {
    const listen = screen.height - 100;
    var scrolled = window.pageYOffset;

    if (scrolled < listen) {
        var parallax = document.querySelector(".header-section");
        var parallax2 = document.querySelector(".header-section h2");
        const blur = scrolled / 70;
        const h = scrolled * 1.5;
        parallax.style.filter = `blur(${blur}px)`;
        parallax2.style.marginTop = `${scrolled}px`;
    }
}

window.addEventListener('scroll', headerPara)
//window.addEventListener('scroll', throttle(headerPara, 14));
// // Parallax effect
// // Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// // Update : added throttle to increase performance
// window.addEventListener('scroll', throttle(parallax, 14));

// function throttle(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//     }
//   }
// };

// function parallax() {
//   var scrolled = window.pageYOffset;
//   var parallax = document.querySelector(".parallax");
//   // You can adjust the 0.4 to change the speed
// 	var coords = (scrolled * .4) + 'px'
//   parallax.style.transform = 'translateY(' + coords + ')';
// };