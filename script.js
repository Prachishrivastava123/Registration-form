let label = document.querySelectorAll('label').
forEach(Label => {
    label.innerHTML = label.innerText.spilt('').map
    ((Letters, i) => `<span 
    style="transition-delay: $
    {i * 50}ms">${letters}</span`).join('');

})
