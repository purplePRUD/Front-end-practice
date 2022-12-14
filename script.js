const menu = document.getElementById('menu')
const btns = menu.getElementsByTagName('button')

for (let el of btns) {
    el.addEventListener('click', () => {
        const block = 
            document.getElementById(el.innerHTML.toLowerCase());
        block.style.boxShadow = '0px 0px 100px 10px #af7171'
        block.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'

        })
        setTimeout(() => {
            block.style.boxShadow = 'none'
        }, 2000)
    })
}

function backToTop() {
    let button = $('.back-to-top');
    
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 20) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    })
    
    button.on('click', () => {
        e.preventDefault();
        $('body,html').animate({scrollTop:0}, 800);
    })
}

backToTop();