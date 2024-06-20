document.addEventListener('DOMContentLoaded', function() {
    const affiche = document.querySelector('.affiche');
    const submit = document.querySelector('#submit');

    affiche.style.display = 'flex';
    affiche.style.flexWrap = 'wrap';
 
    let tableCount = 1;

    submit.addEventListener('click', function(event) {
        event.preventDefault();

        // Créer un nouveau tableau
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        const h1 = document.createElement('h1')
        const td = document.createElement('td');
        const paragraph = document.createElement("p")
        const button = document.createElement('button');
    
        tr.appendChild(h1);
        td.appendChild(paragraph);
        table.appendChild(tr);
        table.appendChild(td);
        table.appendChild(button);

        table.style.border = '1px solid black';
        table.style.padding = '10px';
        table.style.margin = '50px'; // Réduire la marge pour permettre à deux tables de s'afficher côte à côte
        table.style.width = 'calc(50% - 100px)'; // Définir la largeur à 50% moins la marge pour permettre à deux tables de s'afficher côte à côte
        table.style.height = '100px';
        table.style.tableLayout = 'fixed';
        table.style.display = '';

        td.style.display = 'block';
        td.style.wordWrap = 'break-word';

        // Mettre à jour le texte du paragraphe avec la valeur de l'élément textarea
        const textarea = document.querySelector('#note');
        paragraph.innerHTML = textarea.value;
      
        button.innerHTML = 'afficher';
  
        button.addEventListener('click', function() {
            paragraph.style.height = 'auto';
            paragraph.style.fontSize = '20px'; // Ajustez la taille de la police pour agrandir le texte
            paragraph.style.maxHeight = 'none';
        });
        // chaque fois que je clique sur le bouton la valeur de h1 augmente de 1
        h1.innerHTML = 'Note ' + tableCount++; 



        // Ajouter le nouveau tableau à l'élément avec la classe 'affiche'
        affiche.appendChild(table);
       
        // Effacer la valeur de l'élément textarea
        textarea.value = '';


        affiche.firstElementChild.style.display = 'none';
    });
});