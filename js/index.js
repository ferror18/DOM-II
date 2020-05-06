// Your code goes here
let pageLoadIndicator = document.body.querySelector('nav').lastElementChild;
// Mouse Over & mouse leave & error
let imgList = document.body.querySelectorAll('img');
Array.from(imgList).forEach(element => {
    element.addEventListener('mouseover', event => {element.style = "border: 1px solid black; border-radius: 50%;"});
    element.addEventListener('mouseleave', event => {element.style = "border: none; border-radius: 0;"});
    element.addEventListener('error', event => {pageLoadIndicator.setAttribute('src', 'img/noPhoto.png')});
})

// keydown

document.body.addEventListener('keydown', event => {
    if(event.keyCode === 39){
    event.target.style.width = '50%';
    event.target.style.margin = '0 0 0 50%';
    event.target.style.padding = '0';
    }else if(event.keyCode === 38){
    event.target.style.width = '100%';
    event.target.style.margin = '0';
    event.target.style.padding = '0';
    }else if(event.keyCode === 40){
        event.target.style.width = '100%';
        event.target.style.paddingTop = '30%';
        event.target.style.margin = '0';
    }else if(event.keyCode === 37){
        event.target.style.width = '50%';
        event.target.style.margin= '0 50% 0 0';
        event.target.style.padding = '0';
    }
});

//loadded

window.addEventListener('load', (event) => {pageLoadIndicator.setAttribute('src', 'img/ui.png');});

//click and dblclick
let plist = document.body.querySelectorAll('.container p');
Array.from(plist).forEach(element => {
    element.addEventListener('click', (event) => {event.target.style.backgroundColor = 'red'; event.target.style.border = '5rem dotted red'});
    element.addEventListener('dblclick', (event) => {event.target.style.backgroundColor = 'white'; event.target.style.border = 'none'});
});
//online
let footer = document.body.querySelector('footer');
window.addEventListener('online', element => {console.log('online');footer.querySelector('img').setAttribute('scr', 'img/ui.png'); footer.lastElementChild.innerHTML = 'Your browser is Online! :)'});
//scroll
let scrotext = document.body.querySelector('.scro');
window.addEventListener('scroll', event => {scrotext.style.display = 'block'})
// drag
scrotext.addEventListener('drag', event => {scrotext.style.display = 'none'})