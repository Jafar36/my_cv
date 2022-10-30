let scrollButton = document.getElementById('toTop');

// Коли сторінка проскролена вниз на 100 пікселів - кнопка "Вгору" стає видимою
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// Коли відбувається клік по кнопці - повертаємось в початок документу
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// _______________________________________________________________________________________________________________

