import { recipes } from "./recipes.js";
import { AfficherRecettes, filtrerTableauCardTrier } from "./index.js";

//---------------------------------------------------------//
//-------------DOM ELEMENTS---------------------------------//
//-----------------------------------------------------------//
const dropIngredient = document.getElementById("drop_ingredients");
const dropAppareil = document.getElementById("drop_appareils");
const dropUstensile = document.getElementById("drop_ustensiles");

const chevronIngredient = document.getElementById("btn_ingredients");
const chevronAppareil = document.getElementById("btn_appareils");
const chevronUstensile = document.getElementById("btn_ustensiles");

const inputIngredient = document.getElementById("input_ingredients");
const inputAppareil = document.getElementById("input_appareils");
const inputUstensile = document.getElementById("input_ustensiles");

const recherchePrincipale = document.getElementById("search");

//-----------------------------------------------------------------//
// -----------deroule les dropdown au click---------------------------//
chevronIngredient.addEventListener("click", () => {
  dropIngredient.classList.toggle("show");
  inputIngredient.setAttribute("placeholder", " recherche par ingrédient");
});

chevronAppareil.addEventListener("click", () => {
  dropAppareil.classList.toggle("show");
  inputAppareil.setAttribute("placeholder", " recherche par appareils");
});

chevronUstensile.addEventListener("click", () => {
  dropUstensile.classList.toggle("show");
  inputUstensile.setAttribute("placeholder", " recherche par ustensiles");
});
//-------------------------------------------------------------------//
//----------- déroule les dropdown au keyup sur input tags----------//
inputIngredient.addEventListener("keyup", () => {
  dropIngredient.classList.toggle("show");
});

inputAppareil.addEventListener("keyup", () => {
  dropAppareil.classList.toggle("show");
});

inputUstensile.addEventListener("keyup", () => {
  dropUstensile.classList.toggle("show");
});

//----------------------------------------------------------------------//
// fonction qui recupères la liste des ingredient, ustensile ou appareils//
//-------------------------------------------------------------------------//
// affiches la liste des Appareils
export const afficherLiAppareil = function () {
  const appareil = recipes.map((item) => item.appliance);
  let tableauAppareil = [...new Set(appareil.concat(appareil))]; // retires les doublons
  let liAppareil = tableauAppareil
    .map((item) => {
      return `
 <li class='list_appareils'>${item}</li>`;
    })
    .join("");
  return liAppareil;
};
dropAppareil.innerHTML = afficherLiAppareil();

// afficher la liste des ustensiles
export function afficherLiUstensil() {
  let tableauUstens = [];
  const ustensil = recipes.map((item) => item.ustensils);
  for (let valeur of ustensil) {
    for (let j = 0; j < valeur.length; j++) {
      tableauUstens.push(valeur[j]);
    }
  }
  let tableauUstensils = [...new Set(tableauUstens.concat(tableauUstens))];
  let liUstensils = tableauUstensils
    .map((item) => {
      return `<li class='list_ustensiles'>${item}</li>`;
    })
    .join("");
  return liUstensils;
}

dropUstensile.innerHTML = afficherLiUstensil();

// afficher les ingredients dans la liste
export function afficherIngredient() {
  let tableauIngred = [];
  const ingredient = recipes.map((item) => item.ingredients);
  for (let valeur of ingredient) {
    for (let j = 0; j < valeur.length; j++) {
      tableauIngred.push(valeur[j]["ingredient"]);
    }
  }
  let tableauIngredients = [...new Set(tableauIngred.concat(tableauIngred))];
  let liIngredient = tableauIngredients
    .map((item) => {
      return `<li class='list_ingredients'>${item}</li>`;
    })
    .join("");
  return liIngredient;
}
dropIngredient.innerHTML = afficherIngredient();

//-------------------------------------------------------------------------------//
// afficher les ingredients, ustensiles et appareil == correspond à la saisie input
//-------------------------------------------------------------------------------//
const listIngredients = document.querySelectorAll(".list_ingredients");
const listUstensiles = document.querySelectorAll(".list_ustensiles");
const listAppareils = document.querySelectorAll(".list_appareils");

// trie la liste des tags en fonction de l'input tags
export function afficherListTrier(liste, search) {
  for (let valeur of liste) {
    let textValue = valeur.textContent || valeur.innerText;
    if (textValue.toLowerCase().indexOf(search) > -1) {
      valeur.style.display = "";
    } else {
      valeur.style.display = "none";
    }
  }
}

// trie les ingredients
inputIngredient.addEventListener("keyup", function (e) {
  let search = e.target.value.toLowerCase();
  afficherListTrier(listIngredients, search);
});

//trie les ustensiles
inputUstensile.addEventListener("keyup", function (e) {
  let search = e.target.value.toLowerCase();
  afficherListTrier(listUstensiles, search);
});

//trie les appareils
inputAppareil.addEventListener("keyup", function (e) {
  let search = e.target.value.toLowerCase();
  afficherListTrier(listAppareils, search);
});

//------------------------------FILTRES TAGS-----------------------------------//
//-----------------------------------------------------------------------------//

//--------affiches les tags et rempli le tableau correspondant-------//

let tabsAppareil = [];
let tabsIngredient = [];
let tabsUstensiles = [];

function afficherDiv(liste, tableau) {
  let rechercheP = recherchePrincipale.value.toLowerCase(); //recupères la valeur entree Rprincipale
  for (let value of liste) {
    value.addEventListener("click", () => {
      let txtValue =
        value.textContent.toLowerCase() || value.innerText.toLowerCase();
     tableau.push(txtValue);
      console.log(tableau);
      // si il y a pas de filtres rechercche principale
      const filtreTagsSeul = recipes.filter((recipe) => {
        let ingredient = recipe.ingredients.map((x) => x.ingredient);
        let appliance = recipe.appliance;
        let ustensil = recipe.ustensils;
        return (
         verifieSiValeur(tabsAppareil, appliance) &&
           verifieSiValeur(tabsIngredient, ingredient) &&
         verifieSiValeur(tabsUstensiles, ustensil) 
          //  (verifieSiValeur(tabsAppareil, appliance) &&
          //    verifieSiValeur(tabsIngredient, ingredient) &&
          //    verifieSiValeur(tabsUstensiles, ustensil))
        );
      });
      AfficherRecettes(filtreTagsSeul);
      console.log(filtreTagsSeul);
      // si il y a un filtre de recherche principale
      if (rechercheP.length > 2) {
        let cardRestante = filtrerTableauCardTrier(rechercheP, recipes);
        const filtreTagsAvecRecherche = cardRestante.filter((item) => {
          const ingredient = item.ingredients.map((x) => x.ingredient);

          return (
            item.appliance.toLowerCase().includes(tabsAppareil) &&
            item.ustensils.toString().toLowerCase().includes(tabsUstensiles) &&
            ingredient.includes(tabsIngredient)
          );
        });
        AfficherRecettes(filtreTagsAvecRecherche);
      }

      let tags = document.querySelector(".tags");
      tags.innerHTML += ` <div class='tags_li'>
       <span class='tags_value'>${txtValue}</span>
       <span class='croix'><i class="far fa-times-circle"></i></span>
       </div>`;

      const croixTags = document.querySelectorAll(".fa-times-circle");
      for (let value of croixTags) {
        value.addEventListener("click", (e) => {
          const tagsList = value.closest("div");
          tagsList.style.display = "none";
          const indexTags = tableau.indexOf(txtValue); // retires la valeur du tableau au click de la croix
          tableau.splice(indexTags, 1);
          console.log(tableau);
          AfficherRecettes(filtreTagsSeul);
        });
      }
    });
  }
}
afficherDiv(listAppareils, tabsAppareil);
afficherDiv(listIngredients, tabsIngredient);
afficherDiv(listUstensiles, tabsUstensiles);

function verifieSiValeur(tableau, liste) {
 return liste.toString().toLowerCase().includes(tableau)
  
}
    


// for (let valApp of tabsAppareil){
//   return (
//     recipe.appliance.toLowerCase().includes(valApp)
//   )

//   }
//   for (let valUst of tabsUstensiles){
//     return (
//       recipe.ustensils.toString().toLowerCase().includes(valUst)

//     )
//   }
//     for (let valIng of tabsIngredient){
//       return (
//        ingredient.toString().toLowerCase().includes(valIng)
//   );

//     }

// recuperes les appareils
// const appareilRestant = function (array) {
//   array.map((item) => item.appliance.toLowerCase());
// };

// // recuperes les ingredients
// const ingredientRestant = function (array) {
//   array.map((item) => {
//     const ingredient = item.ingredients.map((x) => x.ingredient);
//     for (let val of ingredient) {
//       const valIngr = val.toLowerCase();
//       return valIngr;
//     }
//   });
// };
// // recuperes les ustensils
// const ustensilRestant = function (array) {
//   array.map((item) => {
//     const ustensil = item.ustensils;
//     for (let valeur of ustensil) {
//       let valUst = valeur.toLowerCase();
//       return valUst;
//     }
//   });
// };

// function filtre(tabsUstensiles, tabsAppareil, tabsIngredient) {

//   let rechercheP = recherchePrincipale.value.toLowerCase();

//  const filtreTagsSeul= recipes.filter((item)=>{
//    return(
//      item.appliance.toLowerCase().includes(tabsAppareil)
//    )
//  })
//  console.log(filtreTagsSeul)

//   if (rechercheP.length > 2) {

//     let cardRestante = filtrerTableauCardTrier(rechercheP, recipes);
//     const filtreTagsAvecRecherche= cardRestante.filter((item)=>{

//    return (
//      item.appliance.toLowerCase().includes(tabsAppareil)
//    )

//    })
//    console.log(filtreTagsAvecRecherche)
//   }

// }

// function actionneFiltre() {
//   const everyLI = document.querySelectorAll("li");
//   for (let value of everyLI) {
//   value.addEventListener("click", filtre);
// }
// }
// actionneFiltre();

//-------------------------------------------------------//
//----fonction change la couleur du tags--------------------//

function changeCouleurTag() {
  for (let value of listAppareils) {
    value.addEventListener("click", () => {
      const tagsValue = document.querySelector(".tags_li");
      tagsValue.classList.replace("tags_li", "green");
    });
  }
  for (let value of listIngredients) {
    value.addEventListener("click", () => {
      const tagsValue = document.querySelector(".tags_li");
      tagsValue.classList.replace("tags_li", "blue");
    });
  }
  for (let value of listUstensiles) {
    value.addEventListener("click", () => {
      const tagsValue = document.querySelector(".tags_li");
      tagsValue.classList.replace("tags_li", "red");
    });
  }
}
changeCouleurTag();

// ancienne fonction du trie de la liste

// function afficherTags(liste) {
//   for (let value of liste) {
//     value.addEventListener("click", () => {
//       let txtValue = value.textContent.toLowerCase() || value.innerText;
//       let rechercheP = recherchePrincipale.value.toLowerCase();
//       if (rechercheP.length > 2) {
//         let cardRestante = filtrerTableauCardTrier(rechercheP, recipes);
//         console.log(cardRestante);

//         let cardRestanteTags = filtrerTableauCardTrier(txtValue, cardRestante);
//         //affiche les recettes filtrer apres premier filtre recherche principale
//         console.log(cardRestanteTags);
//         AfficherRecettes(cardRestanteTags);
//       } else {
//         let card = filtrerTableauCardTrier(txtValue, recipes);
//         AfficherRecettes(card);
//       }
//     });
//   }
// }
// afficherTags(listAppareils);
// afficherTags(listUstensiles);
// afficherTags(listIngredients);
