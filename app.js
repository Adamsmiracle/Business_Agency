// navbar

const menu = document.querySelector(".menu")
const navbar = document.querySelector(".navbar")

menu.addEventListener("click", () => {
    navbar.classList.toggle("change")
    menu.classList.toggle("change")
})

// End of navbar

// section 2 video
const video = document.querySelector(".video")
const btn = document.querySelector(".buttons i")
const bar = document.querySelector(".video-bar")

const playPause = () => {
    if (video.paused) {
         video.play()
        btn.className = 'far fa-pause-circle' 
        video.style.opacity = .7
    } else {
         video.pause()
        btn.className = 'far fa-play-circle' 
        video.style.opacity = .3 
    }
}

video.addEventListener("timeupdate", () => {
    const barwidth = video.currentTime / video.duration

    bar.style.width = `${barwidth * 100}%`
    if (video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = .3
    }
})

btn.addEventListener("click", () => {
    playPause()
})


// End of section 2 video


// section-3 pricing cards

const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
        slideShadows: true,
    }, 
})
// end of section-3 pricing cards