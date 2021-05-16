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

function afficherLiAppareil(){
const appareil = recipes.map(item=>item.appliance);
let tableauAppareil = [...new Set(appareil.concat(appareil))] // retires les doublons
console.log(tableauAppareil)
const liAppareil=tableauAppareil.map(item=>{
  return `
 <li class='list_utensiles'>${item}</li>`
}).join('')
dropAppareil.innerHTML=liAppareil;
}
afficherLiAppareil()


function afficherLiUstensil(){
  
const ustensil = recipes.map(item=>item.ustensils);
for (let valeur of ustensil){
  const test=valeur.map(item=>item)
  
}
console.log(ustensil)
 
}



  afficherLiUstensil()
  



  // let tableauUstensils = [...new Set(ustensil.concat(ustensil))] // retires les doublons
  // console.log(tableauUstensils)
  // const liUstensil=tableauUstensils.map(item=>{
  //   return `
  //  <li class='list_utensiles'>${item}</li>`
  // }).join('')
  // dropUstensile.innerHTML=liUstensil;






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
 



