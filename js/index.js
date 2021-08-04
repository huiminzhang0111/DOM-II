// Your code goes here
const try_mouseover = document.querySelector('.logo-heading');
try_mouseover.addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
});

//const welcome_line = document.querySelector('.intro');
document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key === 'p'){
        document.body.style.color = 'purple';
        document.body.style.backgroundColor = 'gray';
    }
});

//change header img while click
const busImg = document.querySelector('.intro img');
const imgChanger = function(event){
    //console.log(event.target.src);
    if(event.target.src === "file:///Users/huimin/Desktop/LambdaProjetcs/8.2-dom-ii/DOM-II/img/fun-bus.jpg"){
        //console.log('test 1');
        event.target.setAttribute("src", "img/destination.jpg")
    }
    else{
        event.target.setAttribute("src", "img/fun-bus.jpg")
    }
}
busImg.addEventListener('click', imgChanger);


const welcome = document.querySelector('.intro h2');
const title_shift = function(event){
    //console.log('title shift');
    event.target.classList.toggle('title-shift');
}
welcome.addEventListener('mouseover', title_shift);
welcome.addEventListener('mouseout', title_shift);


// const new_go_button = document.createElement('button');
// new_go_button.textContent = 'go';
// new_go_button.style.color = 'red';
// new_go_button.style.marginLeft = '2%';
// document.querySelector('.text-content h2').appendChild(new_go_button);


const x = document.createElement('input');
x.setAttribute('type', 'text');
x.setAttribute('value', 'I am very excited');
document.querySelector('.text-content h2').appendChild(x);
x.style.marginLeft = '2%';

x.onblur = inputBlur;
x.onfocus = inputFocus;
function inputBlur(){
    x.value = 'Focus has been lost';
}
function inputFocus(){
    x.value = 'Focus has been found';
}

const home = document.querySelector('nav a')
document.addEventListener('click', function(event){
    if(event.target === home){
        console.log('this is home')
    }
    else{
        console.log('this is NOT home')
    }
})

