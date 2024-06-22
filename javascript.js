document.addEventListener('DOMContentLoaded', function() {
    const affiche = document.querySelector('.affiche');
    const submit = document.querySelector('#submit');

    affiche.style.display = 'flex';
    affiche.style.flexWrap = 'wrap';
 
    let tableCount = 1;
    const textarea = document.querySelector('#note');
    if (textarea === "") {
        submit.value = 'afficher';
    }
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

        // Vérifier si le textarea est vide
        if (textarea.value.trim() === "") {
            // Si le textarea est vide, ne rien faire
            return;
        }
        // Mettre à jour le texte du paragraphe avec la valeur de l'élément textarea

        paragraph.innerHTML = textarea.value;
      
        button.innerHTML = 'afficher';

        // chaque fois que je clique sur le bouton la valeur de h1 augmente de 1
        h1.innerHTML = 'Note ' + tableCount++; 



        // Ajouter le nouveau tableau à l'élément avec la classe 'affiche'
        affiche.appendChild(table);
       
        // Effacer la valeur de l'élément textarea
        textarea.value = '';


        affiche.firstElementChild.style.display = 'none';

         // Gérer le bouton pour afficher le contenu dans la modale
        button.addEventListener('click', function() {
            const modal = document.getElementById("myModal");
            const modalParagraph = document.getElementById("modal-paragraph");
            modalParagraph.innerHTML = paragraph.innerHTML;
            modal.style.display = "block";
        });

        // Gérer la fermeture de la modale
        const span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            const modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});