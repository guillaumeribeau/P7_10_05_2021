const chevronDown= document.querySelector('.bi-chevron-down');
const chevronUp= document.querySelector('.bi-chevron-up');

chevronDown.addEventListener('click',()=>{

const myDropdown=  document.getElementById("myDropdown");
myDropdown.classList.toggle("show");
const btnDrop= document.querySelector('.dropbtn')
btnDrop.style.opacity='0'
const chevronUp= document.querySelector('.bi-chevron-up')
chevronUp.style.display='block'
})

chevronUp.addEventListener('click',()=>{
    const myDropdown=  document.getElementById("myDropdown");
    myDropdown.classList.toggle("show");
    const btnDrop= document.querySelector('.dropbtn')
    btnDrop.style.opacity='1'
   // const chevronUp= document.querySelector('.bi-chevron-up')
    //chevronUp.style.display='block'



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