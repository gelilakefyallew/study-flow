const button = document.querySelector('.btn1');
const input = document.querySelector('.input');
const anchor = document.querySelector('.navLink');
const dot = document.querySelector('.dot');

button.addEventListener('click', () => {
    const textAdded = input.value.trim();
    if (!textAdded) return;
    
    dot.classList.remove('hidden');
    localStorage.setItem('hasNewTask', 'true');
    
    input.value = ''; // Fixed: clears the text inside the input field
    
    button.textContent = 'added';
    button.classList.add('success');
    
    setTimeout(() => {
        button.textContent = 'Add';
        button.classList.remove('success');
    }, 1500);
});

anchor.addEventListener('click', (e) => {
    dot.classList.add('hidden');
    localStorage.setItem('hasNewTask', 'false');
    
    // Add your page-switching logic here to show the task view
});

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('hasNewTask') === 'true') {
        dot.classList.remove('hidden');
    }
});