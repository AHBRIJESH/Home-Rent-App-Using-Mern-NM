const vegButtons = document.querySelectorAll('.Vegf');
const nonVegButtons = document.querySelectorAll('.NonVegf');

vegButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.innerText || button.getAttribute('data-name');
            window.location.href = `Order.html?name=${encodeURIComponent(name)}`;
        });
    });

    nonVegButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.innerText || button.getAttribute('data-name');
            window.location.href = `Order.html?name=${encodeURIComponent(name)}`;
        });
    });