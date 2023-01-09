//const the js
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".nav");
const btn_etica = document.querySelector(".btn-g");
const btn_plazo = document.querySelector(".btn-g2");
const btn_garantia = document.querySelector(".btn-g3");
const div_etica = document.querySelector(".d-e");
const div_plazo = document.querySelector(".d-r");
const div_garantia = document.querySelector(".d-t");
const btn_a = document.querySelector('.b-a');
const btn_a_p = document.querySelector('.p-23');
const btn_b = document.querySelector('.b-b');
const btn_b_p = document.querySelector('.p-22');
const btn_c = document.querySelector('.b-c');
const btn_c_c = document.querySelector('.p-21');
//end const


toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});


btn_etica.addEventListener("click", (e) => {
    div_etica.classList.toggle("show-etica");
  
});

btn_plazo.addEventListener("click", (e) => {
  div_plazo.classList.toggle("show-plazo");
});



btn_garantia.addEventListener("click", (e) => {
  div_garantia.classList.toggle("show-garantia");
});





