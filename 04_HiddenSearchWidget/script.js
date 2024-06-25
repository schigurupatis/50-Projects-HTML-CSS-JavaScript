const search = document.querySelector('.search');
const input = document.getElementById('searchinput');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => { 
    search.classList.toggle('active');
    input.focus();
})