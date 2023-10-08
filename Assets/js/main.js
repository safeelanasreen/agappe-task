const getBtn = document.querySelector('.mob-btn');
console.log(getBtn);
getBtn?.addEventListener('click', e => {
    document.querySelector('body').classList.toggle('show-menu');

 

})