let sidebar =document.querySelector(".sidebar");
let body = document.getElementsByTagName("body");

function showSidebar(){
    sidebar.style.display="block"
}
let bar = document.querySelector(".nav-link");
bar.addEventListener("click",()=>{
    body.style.filter="blur(5px);"

})


function removeBar(){
    sidebar.style.display="none"

}

