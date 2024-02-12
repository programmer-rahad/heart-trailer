
const $ = (selector, areAll) => {
  return areAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function HeartTrailer(container, total = 50) {

  this.number = 0;

  this.events = function () {
    container.addEventListener('mousemove', function (e) {
      this.number++;
      if (this.number % 4) return;
      var top = e.pageY;
      var left = e.pageX;
      var heart = document.createElement('div');
      heart.className = 'heart'
      heart.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
       </svg>
   `;
      heart.style.left = left + 'px';
      heart.style.top = top + 'px';

      var dimension = randomNumber(5, 60) + 'px';
      heart.firstElementChild.style.width = dimension;
      heart.firstElementChild.style.height = dimension;

      heart.firstElementChild.style.fill = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
      container.append(heart);

      setTimeout(function () {
        heart.remove();
      }, 4500)

    }.bind(this))
  }

  this.reset = function () {

    this.events();
  }
  this.init = function () {
    this.reset();
  }
  this.init();

}


function App() {
  // Heart Trailer
  var container = $('.viewport');
  new HeartTrailer(container, 45);

} 

document.addEventListener('DOMContentLoaded', function () {
  new App();
})

 