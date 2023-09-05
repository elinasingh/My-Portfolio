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
