document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('click', function() {
        alert(`${this.getAttribute('data-id')}`);
    });
});



