import {recipes} from './recipes.js'
import{AfficherRecettes} from './index.js'

const dropIngredient=  document.getElementById("drop_ingredients");
const dropAppareil=  document.getElementById("drop_appareils");
const dropUstensile=  document.getElementById("drop_ustensiles");

const chevronIngredient= document.getElementById('btn_ingredients');
const chevronAppareil= document.getElementById('btn_appareils');
const chevronUstensile= document.getElementById('btn_ustensiles');

const inputIngredient= document.getElementById('input_ingredients');
const inputAppareil= document.getElementById('input_appareils');
const inputUstensile= document.getElementById('input_ustensiles');

// deroule les dropdown au click
chevronIngredient.addEventListener('click',()=>{
dropIngredient.classList.toggle("show");
inputIngredient.setAttribute('placeholder',' recherche par Ingrédient');
})

chevronAppareil.addEventListener('click',()=>{
dropAppareil.classList.toggle("show");
inputAppareil.setAttribute('placeholder',' recherche par Appareils');
})

chevronUstensile.addEventListener('click',()=>{
dropUstensile.classList.toggle("show");
inputUstensile.setAttribute('placeholder',' recherche par Ustensiles');
})
// déroule les dropdown au keyup sur input tags
inputIngredient.addEventListener('keyup',()=>{
dropIngredient.classList.toggle("show");
})

inputAppareil.addEventListener('keyup',()=>{
  dropAppareil.classList.toggle("show");
  })
  
inputUstensile.addEventListener('keyup',()=>{
dropUstensile.classList.toggle("show");
})

// fonction qui recupères la liste des ingredient, ustensile ou appareils

// affiches la liste des Appareils
function afficherLiAppareil(){
const appareil = recipes.map(item=>item.appliance);
let tableauAppareil = [...new Set(appareil.concat(appareil))] // retires les doublons
console.log(tableauAppareil)
let liAppareil=tableauAppareil.map(item=>{
  return `
 <li class='list_appareils'>${item}</li>`
}).join('')
dropAppareil.innerHTML=liAppareil;
}
afficherLiAppareil()

// afficher la liste des ustensiles
function afficherLiUstensil(){
  let tableauUstens=[]
const ustensil = recipes.map(item=>item.ustensils);
for (let valeur of ustensil){
  for (let j=0; j<valeur.length; j++){
  tableauUstens.push(valeur[j])
  }
}
let tableauUstensils= [...new Set(tableauUstens.concat(tableauUstens))]
let liUstensils= tableauUstensils.map(item=>{
return `<li class='list_ustensiles'>${item}</li>`

}).join('')
dropUstensile.innerHTML=liUstensils;
 
}
afficherLiUstensil()

// afficher les ingredients dans la liste
function afficherIngredient(){
let tableauIngred=[];
const ingredient= recipes.map(item=>item.ingredients);
console.log(ingredient)
for (let valeur of ingredient){
  for (let j=0; j<valeur.length; j++){
   tableauIngred.push(valeur[j]["ingredient"])
}
}
let tableauIngredients=[...new Set(tableauIngred.concat(tableauIngred))]
let liIngredient= tableauIngredients.map(item=>{
return`<li class='list_ingredients'>${item}</li>`
}).join('')
dropIngredient.innerHTML=liIngredient;
}
afficherIngredient()


// afficher les ingredients, ustensiles et appareil == correspond à la saisie input
const listIngredient= document.querySelectorAll('.list_ingredients');
const listUtensiles= document.querySelectorAll('.list_ustensiles');
const listAppareils= document.querySelectorAll('.list_appareils');

// fonction les tags en fonction de l'input
function afficherListTrier(liste,search){
  for(let valeur of liste){
       let textValue=valeur.textContent || valeur.innerText
      if (textValue.toLowerCase().indexOf(search)> -1){
       valeur.style.display='';
     }
      else{
        valeur.style.display='none'
      }}
  }
  
// trie les ingredients
inputIngredient.addEventListener('keyup', function(e){
  let search =e.target.value.toLowerCase();
afficherListTrier(listIngredient,search)
})

//trie les ustensiles
inputUstensile.addEventListener('keyup', function(e){
  let search =e.target.value.toLowerCase();
afficherListTrier(listUtensiles,search)
})

//trie les appareils
inputAppareil.addEventListener('keyup', function(e){
  let search =e.target.value.toLowerCase();
afficherListTrier(listAppareils,search)
})



// affiches les tags lorque qu'on cliques sur un élements
let tags= document.querySelector('.tags')

function afficherTags(liste){
  
for (let value of liste){

value.addEventListener('click', ()=>{
let txtValue=value.textContent.toLowerCase() || value.innerText;
   
const filtreTags= recipes.filter(item=>{
const ingredient= item.ingredients.map(x=>x["ingredient"]);

return (item.appliance.toLowerCase().includes(txtValue)
  || ingredient.toString().toLowerCase().includes(txtValue)
  ||item.ustensils.toString().toLowerCase().includes(txtValue)
  )
})

AfficherRecettes(filtreTags);
// permet de creer le tags
 tags.innerHTML+=` <div class='tags_li'>
  <span class='tags_value'>${txtValue}</span>
  <span class='croix'><i class="far fa-times-circle"></i></span>
 </div>`
})

}
}

afficherTags(listAppareils);
afficherTags(listUtensiles);
afficherTags(listIngredient);
 
// Enlever les tags au click sur la croix
function enleverTags(){

const croixTags= document.querySelectorAll('.croix')
console.log(croixTags)

for (let value of croixTags){
  console.log(value)
  value.addEventListener('click',()=>{
const tagsList= document.querySelector('.tags_li')
console.log(tagsList)
tagsList.style.display='none'
})

}

}
enleverTags()




