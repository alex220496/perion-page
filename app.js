const modal = document.querySelector('.modal')
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const lastImg = document.querySelector('.last-img')
const closed = document.querySelector('.closed')

closed.addEventListener('click', () => {
    modal.classList.add('hide')
    header.classList.remove("hide")
    main.classList.remove("hide")
})

// open modal and confetti
setTimeout(()=> {
    modal.classList.add('active')
    let duration = 4.5 * 1000;
    let animationEnd = Date.now() + duration;
    let colors = ['#fcc557', '#585858'];
    let defaults = { 
            startVelocity: 40,
            spread: 360, 
            ticks: 300, 
            zIndex: 0, 
            colors: colors
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();
      
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
      
        let particleCount = 300 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3),  y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9),  y: Math.random() - 0.2 } }));
    }, 300);
}, 2000)

setTimeout(() => {
    lastImg.classList.add("active")
}, 10000);

// add z-index for last-img
setTimeout(()=> {
    lastImg.classList.add("z-i")
}, 14000)

const tl = gsap.timeline();

    tl.from('.cup', 2, {
        y : '100%' 
    },2)
      .from('.por-img', 1.5, {
        x : '-100%'
      },7)
      .from('.dall-img', 1.5, {
          x : '100%'
      },7)
      .staggerFrom('.group', 0.5, {
          y : '300%',
          stagger: 0.5,
          opacity : 0
      },8.5)
      .from('.portland-img', 1, {
          opacity : 0,
          scale: 2
      },10)
      .from('.dallas-img', 1, {
          opacity : 0,
          scale: 2
      },10)
      .staggerTo('.group', 0.5, {
        y : '-300%',
        stagger: 0.5,
        opacity : 0
      }, 11)
      .to('.portland-img', 0.5, {
          opacity : 0,
          scale: 2
      },12.5)
      .to('.dallas-img', 0.5, {
          opacity : 0,
          scale: 2
      },12.5)
      .to('.por-img', 1, {
        x : '-100%'
      },13)
      .to('.dall-img', 1, {
          x : '100%'
      },13.5)
// btn open video & closedVideo 

const plus = document.querySelector('.video')
const movie = document.querySelector('.movie')
const openVideo = document.querySelector('.open-video')
const closedVideo = document.querySelector('.closed-movie')

plus.addEventListener('click', () => {
    movie.classList.remove('hide')
    openVideo.classList.add('hide')
})
closedVideo.addEventListener('click', () => {
    movie.classList.add('hide')
    openVideo.classList.remove('hide')
})