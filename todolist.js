//pour s'assurer qu'on puisse récupérer les éléments à manipuler
//on demande au script d'attendre que le DOM soit chargé

//on définit une fonction anonyme de callback qui s'executera au moment ou le DOM sera entièrement chargé
document.addEventListener('DOMContentLoaded', ()  => {
     
     //je déclare/ récupère mes variables: mon input, mon bouton et mon ul
    let aCliquer = document.getElementById('acliquer');
    let liste = document.getElementById('liste');
    let formField = document.getElementById('formfield'); 

    aCliquer.addEventListener('click', (event) => {
    //on donne le type click au bouton, une action lors du clic
    
    let newListe = document.createElement("li"); 
    //on récupère le nouvel element li
    //à rajouter dans la liste
    newListe.textContent = formField.value; 
    //on réinitialise le champ 
    formField.value = "";
   //et on redonne le focus au champ input
    formField.focus();
    //on crée notre element button
    let listeDelete = document.createElement('button');
    
    listeDelete.textContent = "x";
    //on lui assigne un eventListener
    listeDelete.addEventListener('click',(event)=>{
   //lors du clic on supprime le parent du bouton qui sera notre li
    event.target.parentNode.remove();
});
newListe.addEventListener('click', (event) => {
    let liste = event.target; 
    //classList.toggle permet de donner une classe si elle n'est pas déjà présente, l'enlever si elle est déjà présente
    //on gère le fait de barrer une tache lors du clic
    liste.classList.toggle('strike');
});

    // il faut ajouter un bouton supprimer à li et le mettre dans li et on
    // lui assigne un eventListener
    //On veut supprimer son parent et on le supprime
    //on l'insère dans notre li
    newListe.appendChild(listeDelete);
    // on ajoute à notre liste le nouvel li
    liste.appendChild(newListe); // on ajoute à notre liste le nouvel li
   
    


    });
});
