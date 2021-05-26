import { recipes } from "./recipes.js";
import {
  afficherLiAppareil,
  afficherListTrier,
  afficherLiUstensil,
  afficherIngredient,
} from "./dropdown.js";

const recherchePrincipale = document.getElementById("search");

/**@param{tableau} */
// fonction qui permet de creer les card des recettes
export function AfficherRecettes(recette) {
  const recetteCard = recette
    .map((recipe) => {
      return `<article class='col-3'>
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
   <div class='ingredient'>${recipe.ingredients
     .map(
       (x) =>
         `<p><span class="bolder">${x.ingredient}:</span>${x.quantity}${x.unit}</p>`
     )
     .join("")}
  </div>
 <div class='recettes'>${recipe.description}</div>
</div>

</div>
</article>
`;
    })
    .join("");
  const main = document.querySelector(".recettes__card");
  main.innerHTML = recetteCard;
}
AfficherRecettes(recipes);

// // permet de filter le tableau avec methode map
// function filtrerTabeauCard(e) {
//   //let tableau = [];
//   let search = e.target.value.toLowerCase();
//   const filtrerCard = recipes.map((item) => {
//     const nomRecette = item.name.toLowerCase();
//     const description = item.description.toLowerCase();
//     const appareils = recipes.map((item) => {
//       const appareil = recipes.map((x) => x.appliance);
//       return appareil
//     });
//     const ingredients = recipes.map((item) => {
//       const ingredient = item.ingredients.map((x) => x["ingredient"]);
//       for (let val of ingredient) {
//         const valIngr = val.toLowerCase();
//       console.log(valIngr)
//       if(valIngr.includes(search)){
//         console.log(valIngr)
//         return valIngr
//       }
//       }
  
//       return ingredient
//     });
//     const ustensiles = recipes.map((item) => {
//       const ustensil = item.ustensils;
//       console.log(ustensil)
//     });
    
//     for (let valeur of ustensil) {
//       let valUst = valeur.toLowerCase();
//       return valUst;
//     }

//     if (search.length > 2) {
//       for (let value of nomRecette) {
//         if (value.includes(search)) {
//           AfficherRecettes(filtrerCard);
//           //tableau.push(value);
//           //console.log(tableau);
//         }
//       }
//     }
//   });
// }

function filtrerTabeauCard(e){
let search= e.target.value.toLowerCase()
  let filtrerCard = recipes.map((item) => {
     let nomRecette = item.name.toLowerCase();
console.log(nomRecette)

 for (let value of nomRecette){
if(value.includes(search)){
 return filtrerCard
}


  }


  });
 AfficherRecettes(filtrerCard)

}







// // fonction qui retourne le tableau filtrer recherche principale.
// const filtrerTableauCardTrier = function (search) {
//   const filtrerCard = recipes.filter((item) => {
//     const ingredient = item.ingredients.map((x) => x["ingredient"]);
//     return (
//       item.name.toLowerCase().includes(search) ||
//       item.appliance.toString().toLowerCase().includes(search) ||
//       item.description.includes(search) ||
//       ingredient.toString().toLowerCase().includes(search)
//     );
//   });

//   return filtrerCard;
// };

// Au keyup on execute la fonction filtrer card
const inputP = document.getElementById("search");
inputP.addEventListener("keyup", filtrerTabeauCard);

// permet d'afficher seulement les elements de la liste encore présent dans le tableau filtrer
// par la recherche principale.
const listAppareils = document.querySelectorAll(".list_appareils");
const listIngredients = document.querySelectorAll(".list_ingredients");
const listUstensiles = document.querySelectorAll(".list_ustensiles");

// // retournes le tableau trier recherche principale
// inputP.addEventListener("keyup", function (e) {
//   let search = e.target.value.toLowerCase();
//   const cardRestante = filtrerTableauCardTrier(search);
//   const appareilRestant = cardRestante.map((item) =>
//     item.appliance.toLowerCase()
//   );
//   const ingredientRestant = cardRestante.map((item) => {
//     const ingredient = item.ingredients.map((x) => x["ingredient"]);
//     for (let val of ingredient) {
//       const valIngr = val.toLowerCase();
//       return valIngr;
//     }
//   });
//   const ustensilRestant = cardRestante.map((item) => {
//     const ustensil = item.ustensils;
//     for (let valeur of ustensil) {
//       let valUst = valeur.toLowerCase();
//       return valUst;
//     }
//   });

//   if (search.length > 2) {
//     // trie dans les appareils
//     for (let valeur of listAppareils) {
//       let textValue =
//         valeur.textContent.toLowerCase() || valeur.innerText.toLowerCase();

//       if (appareilRestant.includes(textValue)) {
//         valeur.style.display = "";
//       } else {
//         valeur.style.display = "none";
//       }
//     }
//     // trie dans les ingredients
//     for (let valeur of listIngredients) {
//       let textValue =
//         valeur.textContent.toLowerCase() || valeur.innerText.toLowerCase();
//       if (ingredientRestant.includes(textValue)) {
//         valeur.style.display = "";
//       } else {
//         valeur.style.display = "none";
//       }
//     }
//     for (let valeur of listUstensiles) {
//       let textValue =
//         valeur.textContent.toLowerCase() || valeur.innerText.toLowerCase();
//       if (ustensilRestant.includes(textValue)) {
//         valeur.style.display = "";
//       } else {
//         valeur.style.display = "none";
//       }
//     }
//   } else {
//     afficherListTrier(listIngredients, search);
//     afficherListTrier(listUstensiles, search);
//     afficherListTrier(listAppareils, search);
//   }
// });
