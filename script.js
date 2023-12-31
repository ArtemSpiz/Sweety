const images = document.querySelectorAll('.bg1');
const controlls = document.querySelectorAll('.controlls');
const elipse = document.querySelectorAll('.elipse');



let imageIndex = 0;



function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) =>{
    e.addEventListener('click', () => {
        if (event.target.classList.contains('left')){ 
            let index = imageIndex - 1;
            
            if (index < 0) {
                index = images.length - 1;
            }
            
            show(index)
        } 
        
        else if (event.target.classList.contains('right')){
            let index = imageIndex + 1;
            
            if (index >= images.length) {
                index = 0;
            }
            
            show(index)
        }
        
    })
});


show(imageIndex);


const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const frame = document.querySelector('#frame');


burger.addEventListener('click', () =>{
    menu.classList.toggle('disp');
});

frame.addEventListener('click', () =>{
    close.classList.toggle('disp1');
    frame.classList.add('disp');
});

close.addEventListener('click', () =>{
    close.classList.add('disp1');
    frame.classList.toggle('disp');
});
