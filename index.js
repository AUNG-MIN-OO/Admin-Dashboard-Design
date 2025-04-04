const hamburger = document.querySelector('.toggle-btn');
const icon = document.querySelector('#icon');
hamburger.addEventListener('click', function (){
    document.querySelector("#sidebar").classList.toggle("expand");
    icon.classList.toggle("bxs-chevrons-right");
    icon.classList.toggle("bxs-chevrons-left");
})