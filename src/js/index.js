const items = document.querySelectorAll('.item');

items.forEach(item => item.onclick = () => {
        item.classList.toggle('completed');
    });