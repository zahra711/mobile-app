document.querySelector('.nav-toggler').onclick = function() {
    document.querySelector('nav').classList.toggle('show');
};
document.querySelector('.toggle-switch-input').onchange = function (e) {
    let elements = document.querySelectorAll('.sold-out');
    if(e.currentTarget.checked) {
        elements.forEach(function (element) {
            element.style.display = 'none';
        })
    }
    else {
        elements.forEach(function (element) {
            element.style.display = 'initial';
        })
    }
}
