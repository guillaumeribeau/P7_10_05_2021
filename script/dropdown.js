import {recipes} from './recipes.js'

const dropIngredient=  document.getElementById("drop_ingredients");
const dropAppareil=  document.getElementById("drop_appareils");
const dropUstensile=  document.getElementById("drop_ustensiles");

const chevronIngredient= document.getElementById('btn_ingredients');
const chevronAppareil= document.getElementById('btn_appareils');
const chevronUstensile= document.getElementById('btn_ustensiles');

const inputIngredient= document.getElementById('input_ingredients');
const inputAppareil= document.getElementById('input_appareils');
const inputUstensile= document.getElementById('input_ustensiles');

chevronIngredient.addEventListener('click',()=>{
dropIngredient.classList.toggle("show");
})

chevronAppareil.addEventListener('click',()=>{
dropAppareil.classList.toggle("show");
})

chevronUstensile.addEventListener('click',()=>{
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
return `<li class='list_utensiles'>${item}</li>`

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
    console.log(valeur[j]["ingredient"])
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


  


  // function filterFunction() {
  //   let filter, ul, li, a, i;
  //   filter = inputTags.value.toUpperCase();
  //   console.log(filter)
  //   a = myDropdown.getElementsByTagName("a");
  //   for (i = 0; i < a.length; i++) {
  //    txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // }


  // inputTags.addEventListener('click', ()=>{
  //   filterFunction();
  // })
 



