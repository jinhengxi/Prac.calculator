let input = document.querySelector('#input');
let number = document.querySelectorAll('#one');
let result = document.querySelector('.result');
let reset = document.querySelector('.c');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function (e) {
        input.innerHTML += e.target.innerHTML;
    });
};

result.addEventListener('click', () => {
    input.innerHTML = eval(input.innerHTML);
});

reset.addEventListener('click', () => {
    input.innerHTML = '';
});