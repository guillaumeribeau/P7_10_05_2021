

import {recipes} from './recipes.js'
import {afficherLiAppareil,afficherListTrier,afficherLiUstensil,afficherIngredient} from './dropdown.js'


// console.log(recipes) // object
// console.log(recipes[0].ingredients)
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
  if (search.length>2){
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
else{
AfficherRecettes(recipes)
}
}

// fonction qui retourne le tableau filtrer recherche principale.
const filtrerTableauCardTrier =function(search){
const filtrerCard= recipes.filter((item=>{
 const ingredient= item.ingredients.map(x=>x["ingredient"]);
   return (
    item.name.toLowerCase().includes(search) || item.appliance.toString().toLowerCase().includes(search)
    || item.description.includes(search)
   || ingredient.toString().toLowerCase().includes(search)
   )
  }))
  
  return filtrerCard
}



// Au keyup on execute la fonction filtrer card
const inputP = document.getElementById('search');
inputP.addEventListener('keyup', filtrerTabeauCard)


// permet d'afficher seulement les elements de la liste encore présent dans le tableau filtrer 
// par la recherche principale.
const listAppareils= document.querySelectorAll('.list_appareils')
const listIngredients= document.querySelectorAll('.list_ingredients')
const listUstensiles= document.querySelectorAll('.list_ustensiles')

// retournes le tableau trier recherche principale
inputP.addEventListener('keyup', function(e){
 let search = e.target.value.toLowerCase();
const cardRestante=filtrerTableauCardTrier(search)
const appareilRestant= cardRestante.map(item=>item.appliance.toLowerCase())
const ingredientRestant= cardRestante.map(item=>{
  const ingredient= item.ingredients.map(x=>x["ingredient"]);
   return ingredient
})
console.log(ingredientRestant)
if (search.length>2){
  
 for (let valeur of listAppareils){
  let textValue=valeur.textContent.toLowerCase() || valeur.innerText.toLowerCase() 
   
   if (appareilRestant.includes(textValue)){

    valeur.style.display='';
  }
  else{
     valeur.style.display='none'
   }
  }
  for (let valeur of listIngredients){
    let textValue=valeur.textContent.toLowerCase() || valeur.innerText.toLowerCase() 
   console.log(textValue)
     if (ingredientRestant.includes(textValue)){
  
      valeur.style.display='';
    }
    else{
       valeur.style.display='none'
     }
    }
  
}

else{
    // afficherListTrier(listIngredients,search)
  afficherListTrier(listUstensiles,search)
  afficherListTrier(listAppareils,search)
}
 
})



  


