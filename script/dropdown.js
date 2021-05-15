



const dropIngredient=  document.getElementById("drop_ingredients");
const dropRecipient=  document.getElementById("drop_recipients");
const dropUstensile=  document.getElementById("drop_ustensiles");

const chevronIngredient= document.getElementById('btn_ingredients');
const chevronRecipient= document.getElementById('btn_recipients');
const chevronUstensile= document.getElementById('btn_ustensiles')
;

const chevronUp= document.querySelector('.bi-chevron-up');
const inputTags= document.getElementById('myInput');


chevronIngredient.addEventListener('click',()=>{
  dropIngredient.classList.toggle("show");
  
  })

  chevronRecipient.addEventListener('click',()=>{
    dropRecipient.classList.toggle("show");
    
    })
    chevronUstensile.addEventListener('click',()=>{
      dropUstensile.classList.toggle("show");
      
      })

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
 



