const btn = document.querySelector('.share-icons');

const social = document.querySelector('.social-icons');

btn.addEventListener('click' , ()=>{
    social.classList.toggle('hide');
})