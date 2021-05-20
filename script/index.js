

import {recipes} from './recipes.js'
console.log(recipes) // object
console.log(recipes[0].ingredients)
const recherchePrincipale = document.getElementById('search')


/**@param{tableau} */
// fonction qui permet de creer les card des recettes
export function AfficherRecettes (recette){
    
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


// permet de filter le tableau avec methode Filter()
function filtrerTabeauCard(e){
  let search = e.target.value.toLowerCase();
  
const filtrerCard= recipes.filter((item=>{
  const ingredient= item.ingredients.map(x=>x["ingredient"]);
   return (
    item.name.toLowerCase().includes(search) || item.appliance.toString().toLowerCase().includes(search)
    || item.description.includes(search)
   || ingredient.toString().toLowerCase().includes(search)
   )
  }))
  AfficherRecettes(filtrerCard)
// si aucune occurence alors on affiche toutes les recettes
if (filtrerCard.length===0){
recherchePrincipale.value='';
recherchePrincipale.setAttribute('placeholder', 'Aucune recette ne correspond à votre critères... vous pouvez chercher "tarte aux pommes,"poisson",...');
AfficherRecettes(recipes)
}
}

// Au keyup on execute la fonction filtrer card
const inputP = document.getElementById('search');
inputP.addEventListener('keyup', filtrerTabeauCard)







