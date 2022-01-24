
let slider = document.querySelector('.slider')
let slideBtnRight = document.querySelector('.slider__btn-right')
let slideBtnLeft = document.querySelector('.slider__btn-left')
let slider__dote = document.querySelector('.slider__dote')
let sliderItem = document.querySelectorAll('.slider__card')
let sliderDotes = document.querySelectorAll('.slider__dote')
let activeItem = 0
let margin = 0

sliderItem = Array.from(sliderItem)
sliderDotes = Array.from(sliderDotes)

function showSlide(num) {
    sliderItem.map((slide, index) => num === index ? slide.className = 'slider__card slider__card_active' : slide.className = 'slider__card ')
    sliderDotes.map((dote, index) => num === index ? dote.className = 'slider__dote slider__dote_active' : dote.className = 'slider__dote ')
}
showSlide(activeItem)

slideBtnLeft.addEventListener('click', () => {
    if (activeItem > sliderItem.length - 2) {
        activeItem = 0
    } else {
        activeItem++
    }

    showSlide(activeItem)

    if (margin !== -900) {
        margin += -300
        slider.style.marginLeft = margin + 'px'
    } else {
        margin = 0
        slider.style.marginLeft = margin + 'px'
    }
})



slideBtnRight.addEventListener('click', () => {
    if (activeItem <= 0) {
        activeItem = sliderItem.length - 1
    } else {
        activeItem--
    }

    showSlide(activeItem)

    if (margin !== 0) {
        margin += 300
        slider.style.marginLeft = margin + 'px'
    } else {
        margin = -900
        slider.style.marginLeft = margin + 'px'
    }

})















