document.addEventListener('DOMContentLoaded', function() {

    const affiche = document.querySelector('#affiche');
    const submit = document.querySelector('#submit');

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');

    div.appendChild(h1);
    div.appendChild(paragraph);
    div.appendChild(button);

    affiche.appendChild(div);

    div.style.border = '1px solid black';
    div.style.padding = '10px';
    div.style.margin = '10px';
    div.style.width = '300px';
    div.style.height = '300px';

    submit.addEventListener('click', function(event) {
        event.preventDefault();
        const textarea = document.querySelector('#note').value;
        paragraph.textContent = textarea;
        
    });
});