const search = document.querySelector('.search');
const liItem  = document.querySelectorAll('li');

const searchEngine = (e) => {
    const text = e.target.value.toLowerCase();

    liItem.forEach(el => {
        if(el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

search.addEventListener('keyup', searchEngine)