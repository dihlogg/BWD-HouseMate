var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-img img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;
function updateImageByIndex(index) {

    document.querySelectorAll('.list-img div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement, index) => {

    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0'
        updateImageByIndex(index)
        setTimeout(() => {
            imgFeature.style.opacity = '1'
        }, 400)
    })
})

prevBtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--
    }
    updateImageByIndex(currentIndex)
})

nextBtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    updateImageByIndex(currentIndex)
})
// Dropdown 
const dropdowns = document.querySelectorAll('.dropdown');
// loop
dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {

        // add click select 
        select.classList.toggle('select-clicked');
        // add rotate 
        select.classList.toggle('caret-rotate');
        // add open menu 
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {

        // add click events 
        option.addEventListener('click', () => {

            // change slected 
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        })
    })
})

