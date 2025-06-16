// == 💛💛 Déclaration de variables
const wrapperHTML = document.querySelector('.wrapper');
const btns = document.querySelectorAll('.btn');


// == 💛💛 Event Listener au clique dans la div .wrapper
wrapperHTML.addEventListener('click', (e)=>{
    // == Vérifie si la où un clique c'est un bouton
    if (e.target.classList.contains('btn')) {
        // == 💙💙 Si le bouton a déjà la classe --active alors on l'enlève
        if (e.target.classList.contains('btn--active')) {
            e.target.classList.toggle('btn--active');
        } else {
            // == 🧡🧡 Boucle dans chaque boutons qui ont la classe .btn et retire la classe --active si elle y est
            for (const btn of btns){
                btn.classList.contains('btn--active') ? btn.classList.remove('btn--active') : null;
            }
            // == 🧡🧡 Ajoute la classe --active sur le bouton sur lequel on a cliqué
            e.target.classList.add('btn--active');
        }
    }
})