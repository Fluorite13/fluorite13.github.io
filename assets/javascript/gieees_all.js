function counter() {
     var count = setInterval(function () {
          var c = parseInt($('.counter').text());
          $('.counter').text((++c).toString());
          if (c == 100) {
               clearInterval(count);
               $('.counter').addClass('hide')
               $('.preloader').addClass('active')
          }
     }, 24)
}
counter()
document.addEventListener("mousemove", parallax);
function parallax(e) {
     this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')

          const x = (window.innerWidth - e.pageX * speed) / 40
          const y = (window.innerHeight - e.pageY * speed) / 40

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
     })
}
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
document.onclick = function (e) {
     if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
          toggle.classList.remove('active');
          navbar.classList.remove('active');
     }
}
toggle.onclick = function () {
     toggle.classList.toggle('active');
     navbar.classList.toggle('active');
}
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
     let progressHeight = (window.pageYOffset / totalHeight) * 80;
     progress.style.height = progressHeight + "%";
}



