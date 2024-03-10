let sidebar =document.querySelector(".sidebar");

function showSidebar(){
    sidebar.style.display="block"
}


function removeBar(){
    sidebar.style.display="none"

}


function changePage() {
    let pageCount = document.querySelector(".title-page");
     pageCount.innerText = "PAGE 3 OF 3";
}


document.addEventListener("DOMContentLoaded", changePage);

