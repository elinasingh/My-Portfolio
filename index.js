let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach(function (item) {
    item.addEventListener('click', function (e) {

        //add and removes class on tablinks
        tabLinks.forEach(function (item) {
            item.classList.remove("active");
        })
            item.classList.add("active");
    
       //removes display of areas
       tabContents.forEach(function (tab) {
        tab.style.display="none";
       })

       //equate tab links to tab contents

       let targetPanel = item.getAttribute("aria-controls");
       document.getElementById(targetPanel).style.display = "block";

}, false);

});


let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right ="0";
}

function closeMenu() {
  sideMenu.style.right ="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw52t4-dkeEydVBctTuueucsJ2oLqvHQH5MNPM1dWiA0ksL6RWvgxZCnIDRD0m83r85uQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send Successfully!"
        setTimeout(function() {
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


