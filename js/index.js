// Your code goes here

// Mouse Over
let imgList = document.body.querySelectorAll('img');
Array.from(imgList).forEach(element => {
    element.addEventListener('mouseover', event => {element.style = "border: 1px solid black; border-radius: 50%;"});
    element.addEventListener('mouseleave', event => {element.style = "border: none; border-radius: 0;"});
})

// keydown

document.body.addEventListener('keydown', event => {
    
    if(event.keyCode === 38){
    // event.target.style.width = '50%';
    event.target.style.margin= '0 50% 0 0';
    }else if(event.keyCode === 39){
    event.target.style.width = '100%';
    event.target.style.margin = '0';
    }else if(event.keyCode === 40){
        event.target.style.width = '50%';
        event.target.style.margin= '0 0 0 50%';
    }else if(event.keyCode === 37){
        event.target.style.width = '50%';
        event.target.style.margin= '0 0 0 50%';
    }
})
//loadded
//drag and drop
let plist = document.body.querySelectorAll('p');
// debugger
Array.from(plist).forEach(element => {
    element.addEventListener('click', event => {event.preventDefault(); event.target.style.backgroundColor = 'red'; event.target.style.border = '5rem dotted red'});
    // debugger
});
// debugger