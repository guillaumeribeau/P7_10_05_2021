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
window.addEventListener("click", (e) => {
  if (e.target !== chevronIngredient) {
    dropIngredient.classList.remove("show");
  }
});

inputAppareil.addEventListener("keyup", () => {
  dropAppareil.classList.toggle("show");
});
window.addEventListener("click", (e) => {
  if (e.target !== chevronAppareil) {
    dropAppareil.classList.remove("show");
  }
});

inputUstensile.addEventListener("keyup", () => {
  dropUstensile.classList.toggle("show");
});
window.addEventListener("click", (e) => {
  if (e.target !== chevronUstensile) {
    dropUstensile.classList.remove("show");
  }
});
//----------------------------------------------------------------------//
// fonction qui recupères la liste des ingredient, ustensile ou appareils//
//-------------------------------------------------------------------------//

// trier les élments par ordre alpabetique
function sortAlphabetically(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else return 0;
}
// affiches la liste des Appareils
export const afficherLiAppareil = function () {
  const appareil = recipes.map((item) => item.appliance);
  // retires les doublons
  let tableauAppareil = [...new Set(appareil.concat(appareil))];
  tableauAppareil.sort(sortAlphabetically);
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
  // retires les doublons
  let tableauUstensils = [...new Set(tableauUstens.concat(tableauUstens))];
  tableauUstensils.sort(sortAlphabetically);
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
  // retires les doublons
  let tableauIngredients = [...new Set(tableauIngred.concat(tableauIngred))];
  tableauIngredients.sort(sortAlphabetically);
  let liIngredient = tableauIngredients
    .map((item) => {
      return `<li class='list_ingredients'>${item}</li>`;
    })
    .join("");
  return liIngredient;
}
dropIngredient.innerHTML = afficherIngredient();

//-------------------------------------------------------------------------------//
// afficher les ingredients, ustensiles et appareil ==> dans input tags
//-------------------------------------------------------------------------------//
const listIngredients = document.querySelectorAll(".list_ingredients");
const listUstensiles = document.querySelectorAll(".list_ustensiles");
const listAppareils = document.querySelectorAll(".list_appareils");

// trie la liste des tags en fonction de l'input tags
export function afficherListTrier(liste, search) {
  for (let valeur of liste) {
    let textValue =
      valeur.textContent.toLowerCase() || valeur.innerText.toLowerCase();
    if (textValue.toLowerCase().indexOf(search) > -1) {
      valeur.style.display = "";
    } else {
      valeur.style.display = "none";
    }
  }
}

// trie les ingredients
inputIngredient.addEventListener("keydown", function (e) {
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

/**@param {string} liste des appareils,ingredients ou ustensile */
/**@param {Array} tableau rempli le tableau app,ustens ou ingre */
/**@param {String} input permet de vider le champ input */
function trieParTAgs(liste, tableau,input) {
  let rechercheP = recherchePrincipale.value.toLowerCase(); //recupères la valeur InputP
  for (let value of liste) {
    value.addEventListener("click", () => {
      let txtValue =
        value.textContent.toLowerCase() || value.innerText.toLowerCase();
        tableau.push(txtValue); 
       input.value=''
      console.log(tableau);
      let tagsSeul = algoTags(recipes);
      // algoTags(recipes);
      AfficherRecettes(tagsSeul);

      // si il y a un filtre de recherche principale
      if (rechercheP.length > 2) {
        let cardRestante = filtrerTableauCardTrier(rechercheP, recipes);
        const tagsAvecRechercheP = algoTags(cardRestante);
        AfficherRecettes(tagsAvecRechercheP);
      }

      let tags = document.querySelector(".tags");
      tags.innerHTML += ` <div class='tags_li'>
       <span class='tags_value'>${txtValue}</span>
       <span class='croix'><i class="far fa-times-circle"></i></span>
       </div>`;

      const croixTags = document.querySelectorAll(".fa-times-circle");
      for (let croix of croixTags) {
        croix.addEventListener("click", (e) => {
          const tagsList = croix.closest("div");
          //tagsList.style.display = "none";
          tagsList.remove();
          const indexTags = tableau.indexOf(
            tagsList.getElementsByClassName("tags_value")[0].innerHTML
          );
        // retires la valeur du tableau au click de la croix
          tableau.splice(indexTags, 1);
          console.log(tableau);
          const EffacerTags = algoTags(recipes);
          AfficherRecettes(EffacerTags);
        });
      }
    });
  }
}
trieParTAgs(listAppareils, tabsAppareil,inputAppareil);
trieParTAgs(listIngredients, tabsIngredient,inputIngredient);
trieParTAgs(listUstensiles, tabsUstensiles,inputUstensile);

/**
 * @param {tableau} tableau des appareils,ustensile,ingredients rempli aux clics dans la liste
 * @param {string} liste  des appareils,ustensile present sur les recettes
 */
//verifie si dans le tableau on a les ingredients/ appareils/ustensile correspondants
function matchUstensiles(tabsUstensiles, ustensil) {
  return ustensil.toString().toLowerCase().includes(tabsUstensiles);
}

function matchAppareils(tabsAppareil, appliance) {
  return appliance.toString().toLowerCase().includes(tabsAppareil);
}
function matchIngredients(tabsIngredient, ingredient) {
  ingredient = ingredient.map((ing) => ing.toLowerCase());
  return tabsIngredient.every((elem) =>
    ingredient.includes(elem.toLowerCase())
  );
}

// function matchAppareils(tabsAppareil, appliance) {
//   if (tabsAppareil.length === 0) {
//     return appliance.toString().toLowerCase().includes(tabsAppareil);
//   } else if (tabsAppareil.length !== 0) {
//     let last = tabsAppareil[tabsAppareil.length - 1];
//     return appliance.toString().toLowerCase().includes(last);
//   }
// }

//----------------------------------------------------------------------------//
// -----------------------ALGO pour les TAGS---------------------------------//

/**
 * @param {object} recettes recettes total ou filtrer apres input principale
 */
function algoTags(recettes) {
  const filtreTags = recettes.filter((recipe) => {
    let ingredient = recipe.ingredients.map((x) => x.ingredient);
    let appliance = recipe.appliance;
    let ustensil = recipe.ustensils;

    return (
      matchUstensiles(tabsUstensiles, ustensil) &&
      matchIngredients(tabsIngredient, ingredient) &&
       matchAppareils(tabsAppareil, appliance)
    )
    
  });
  return filtreTags;
}

//----Change la couleur du tags--------------------//
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
