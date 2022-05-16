const memsArray = [
    {
        id: '8pm',
        text: 'FREEDOM!!!'
    },
    {
        id: 'circle',
        text: 'We just friends...'
    },
    {
        id: 'goat',
        text: "Stop, I didn't finish!"
    },
    {
        id: 'haircut',
        text: 'New haircut - new life.'
    },
    {
        id: 'mama',
        text: 'Hide and seek'
    },
    {
        id: 'pay',
        text: 'It also infuriates when they don’t bow to you at a meeting.'
    },
    {
        id: 'white',
        text: 'White moves first.'
    },
    {
        id: 'wine',
        text: "Respect for other people's work."
    }
];

const slider = document.querySelector('.slider');
const memImage = document.querySelector(".mem-img img");
const memText = document.querySelector(".mem-text");


// add slider-buttons
memsArray.forEach((el, index) =>{
    let sliderItem = document.createElement("div");
    sliderItem.classList.add("slider-element");
    if (index === 0) sliderItem.classList.add("active");
    sliderItem.dataset.memId = el.id;
    sliderItem.innerHTML = "<button></button>";
    sliderItem.addEventListener("click", function () {addMemData(el.id);});
    slider.appendChild(sliderItem);
});

// add first mem to page
addMemData('white');

// add image and text
function addMemData(id) {
    memImage.classList.add('show');
    memText.classList.add('show');
    memImage.src = `assets/${id}.jpg`;
    memImage.alt = `${id} mem`;
    memText.innerHTML = memsArray.find(mem => mem.id === id).text;
    setTimeout(function () {
        memImage.classList.remove('show');
        memText.classList.remove('show');
    }, 900);
    let activeSliderItem = document.querySelector('.slider-element.active');
    activeSliderItem.classList.remove("active");
    let nextActiveSliderItem = document.querySelector(`.slider-element[data-mem-id="${id}"]`);
    nextActiveSliderItem.classList.add("active");
}

