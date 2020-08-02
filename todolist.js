document.addEventListener('DOMContentLoaded', ()  => {
    //on demande au script d'attendre la fin du chargement du dom
     
    
    //je déclare/ récupère mes variables: mon input, mon bouton et mon ul
    let aCliquer = document.getElementById('acliquer');
    let liste = document.getElementById('liste');
    let formField = document.getElementById('formfield'); 

    aCliquer.addEventListener('click', (event) => {// on donne
        //le type click a notre bouton
    
    let newListe = document.createElement("li"); //nouvel element li
    //
    //let formField = document.getElementById('formfield'); 
    newListe.textContent = formField.value; 
    formField.value = "";
    formField.focus();

    let listeDelete = document.createElement('button');
    listeDelete.textContent = "x";
    listeDelete.addEventListener('click',(event)=>{
    event.target.parentNode.remove();
});
newListe.addEventListener('click', (event) => {
    let liste = event.target; 
    //classList.toggle permet de donner une classe si elle n'est pas déjà présente, l'enlever si elle est déjà présente
    liste.classList.toggle('strike');
});

 // il faut ajouter un bouton supprimer à li et le mettre dans li et on
 // lui assigne un eventListener
 //On veut supprimer son parent et on le supprime
    newListe.appendChild(listeDelete);
    liste.appendChild(newListe); // on ajoute à notre liste le nouvel li
   
    


    });
});
