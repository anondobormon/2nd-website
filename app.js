window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    // console.log(window.scrollY)
})


const hideIcon = document.getElementById('bar-icon');
hideIcon.addEventListener('click', function(){
    document.getElementById('hidden-bar').style.display='block';
    hideIcon.style.display = 'none';
    document.getElementById('close-icon').style.display = 'block';

})
document.getElementById('close-icon').addEventListener('click', function(){
    document.getElementById('hidden-bar').style.display='none';
    document.getElementById('bar-icon').style.display = 'block';
    document.getElementById('close-icon').style.display = 'none';
})
