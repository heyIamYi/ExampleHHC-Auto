var hoverbox = document.querySelectorAll('.downlist');
var nav = document.getElementById('nav');
var subnav = document.querySelectorAll('.fons');
var whitelogo = document.getElementById('white-logo');
var minilogo = document.getElementById('minilogo');
var biglogo = document.getElementById('biglogo');
var entryblue = document.getElementById('entryblue');
var entrywhite = document.getElementById('entrywhite');
var stuffing = document.querySelectorAll('.stuffing');
var fons = document.querySelectorAll('.fons');

var bgli = document.getElementById('bglist');
var focuss = document.getElementById('focus');
var focusl = document.getElementById('focuslogo');
var focusm = document.getElementById('focusmain');
var xx = document.getElementById('XX');
var entry = document.getElementById('focus-button');
var focusbutton = document.getElementById('focus-button');
focusbutton.addEventListener('mousemove', function () {
    entryblue.classList.remove('none');
    entrywhite.classList.add('none');
})
focusbutton.addEventListener('mouseleave', function () {
    entryblue.classList.add('none');
    entrywhite.classList.remove('none');
})
bgli.addEventListener('click', function () {
    focuss.classList.remove('none')
    focusl.classList.remove('none')
    focusm.classList.remove('none')
})
function xxlist() {
    focuss.classList.add('none')
    focusl.classList.add('none')
    focusm.classList.add('none')
}
xx.addEventListener('click', xxlist);
entry.addEventListener('click', xxlist);

var el = document.querySelector('body');
var nav = document.getElementById('nav');
var subnav = document.getElementById('subnav');
var minilogo = document.getElementById('minilogo');
var biglogo = document.getElementById('biglogo');
var bgrlist = document.querySelectorAll('.stuffing');
var whitelogo = document.getElementById('white-logo');
var banner = document.querySelector('#banner');
el.addEventListener('touchmove', show, false);
el.addEventListener('mousewheel', show, false);
el.addEventListener('DOMMouseScroll', show, false);
show(), false;
function navin() {
    var windowtop = document.documentElement.scrollTop;
    // console.log(windowtop);
    if (window.innerWidth > 993) {
        if (windowtop > 100) {
            // console.log('111');
            subnav.classList.add("none")
            biglogo.classList.add('none')
        } else {
            subnav.classList.remove("none")
            biglogo.classList.remove('none')
        }
    } else {
        whitelogo.classList.remove('none')
        if (windowtop > banner.clientHeight) {
            whitelogo.classList.add('none')
            minilogo.style.display = 'block'
            bgrlist[1].style.backgroundColor = '#0146a8';
            bgrlist[0].style.backgroundColor = '#0146a8';
        } else {
            whitelogo.classList.remove('none');
            minilogo.style.display = 'none'
            bgrlist[1].style.backgroundColor = 'white';
            bgrlist[0].style.backgroundColor = 'white';
        }
    }
}

function show(event) {
    var wi = window.innerHeight //頁面高度
    navin();
    window.onscroll = () => {
        navin();
        let cH = document.documentElement.clientHeight;
        let sH = document.documentElement.scrollHeight;
        let sT = document.documentElement.scrollTop;
        // console.log(cH, sH, sT);
    }
}