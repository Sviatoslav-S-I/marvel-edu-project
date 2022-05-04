// Events page
// button to open specific topic
function openTopic (link) {
  location.href = link
}

// Main page
// slide show
const images = ['images/widow-topic.jpg', 'images/heroes-poster.jpg', 'images/movies-poster.jpg']
const links = ['Events.html', 'Heroes.html', 'Movies.html']
const slideTexts = ['Events', 'Heroes', 'Movies']
var i = 0
window.onload = function(){
  var slider = setInterval(() => {
    try {
      document.slide.src = images[this.i]
      document.querySelector('.slide-info').innerHTML = slideTexts[i]
    } catch (e) {
      clearInterval(slider)
    }
  }, 100);
  setInterval(() => {
    try {
        if (i < images.length - 1) {
        i++;
      } else {
        i = 0;
      }
      document.slide.src = images[i]
    } catch (e) {
      clearInterval(this)
    }
    
  }, 3000)
}

function openSlide () {
  document.querySelector('.link-of-slide').href = links[i]
}

// Heroes page
function show(text) {
  if (document.querySelector(text).classList.contains("hidden")) {
    document.querySelector(text).classList.toggle("hidden")
  } else {
    document.querySelector(text).classList.toggle("hidden")
  }
}