const dami =document.querySelectorAll('.dami');

dami.forEach(d => d.addEventListener('click', () => {
    // d.style.background = 'red';
    d.classList.toggle('changes');
}));