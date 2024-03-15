let acc = document.getElementsByClassName("accordion");
let i ;

for (i=0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    let pannel = this.nextElementSibling;
    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });

}
