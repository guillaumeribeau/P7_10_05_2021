const chevronDown= document.querySelector('.bi-chevron-down');
const chevronUp= document.querySelector('.bi-chevron-up');

chevronDown.addEventListener('click',()=>{

const myDropdown=  document.getElementById("myDropdown");
myDropdown.classList.toggle("show");
const placeholder= document.getElementById('myInput');
placeholder.setAttribute("placeholder",'Recherche par ingrédients')

})



  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }