const toggleBtn = document.getElementById("toggleButton")
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    
    if(document.body.classList.contains("dark")){
        toggleBtn.innerText = "Light Mode"
    }else {
        toggleBtn.innerText = "Dark Mode"
    }
})