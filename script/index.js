

import {recipes} from './recipes.js'
console.log(recipes) // object
console.log(recipes[0].ingredients)



// fonction du filtre principale
const inputP = document.getElementById('search');
inputP.addEventListener('keyup', (e)=>{
let search = e.target.value.toLowerCase();
if (search.length>2){
console.log(search)
const filtrerCard= recipes.filter((item=>{
return (
item.name.toLowerCase().includes(search) || item.ingredients.toString().toLowerCase().includes(search)
 || item.description.includes(search)
 || item.ingredients.map(x=> x.ingredients).includes(search)
)

}))
AfficherRecettes(filtrerCard);
}
})



/**@param{tableau} */
// fonction qui permet de creer les card des recettes
function AfficherRecettes (recette){
    
    const recetteCard = recette.map(recipe=>{
  
return`<article class='col-3'>
<div class='img'></div>

<div class='recette__complete'>     
<div class='infos_principale'>
<span class='title__recette'>${recipe.name}</span>

<div>
<span class='time__logo'><i class="bi bi-clock"></i></span>
<span class='time'>${recipe.time}min</span>
</div>
</div>

<div class="contenu">
<div class='ingredient'>${recipe.ingredients.map(x =>
    `<p><span class="bolder">${x.ingredient}:</span>${x.quantity}${x.unit}</p>`).join('')}
</div>

<div class='recettes'>${recipe.description}</div>
</div>
</div>
</article>
`
}).join('')
const main =document.querySelector('.recettes__card');
main.innerHTML=recetteCard;
}

AfficherRecettes(recipes)

