'use strict'

let wBlock = document.getElementsByClassName('w')[0];
let hBlock = document.getElementsByClassName('h')[0];
let sBlock = document.getElementsByClassName('s')[0];

function getData () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let s = 0;

    wBlock.innerHTML = 'width: ' + w + 'px';
    hBlock.innerHTML = 'height: ' + h + 'px';
    sBlock.innerHTML = 'scroll size: ' + s + 'px';
}

getData();
window.addEventListener("resize", getData);
