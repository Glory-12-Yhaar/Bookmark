const menuBar = document.querySelector('#bar');
const navcontainer = document.querySelector('nav .nav-links');
const navItems = document.querySelectorAll('.nav-links li');
menuBar.addEventListener('click', () => {
    navcontainer.classList.toggle('open');
});

navItems.forEach(items => { 
    items.addEventListener('click', () =>{
        navcontainer.classList.remove('open');
    })
})