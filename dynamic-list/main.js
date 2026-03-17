const input = document.getElementById("itemInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("items")

addBtn.addEventListener("click",()=>{
    if(input.value===""){
        alert("Input is missing!")
        return
    }
    const li = document.createElement("li")
    const textSpan = document.createElement("span")
    const delBtn = document.createElement("button")

    textSpan.innerText = input.value
    input.value=""
    li.appendChild(textSpan)
    delBtn.innerText="Delete"
    delBtn.classList.add("delete")
    li.appendChild(delBtn)
    list.appendChild(li)

    delBtn.addEventListener("click",()=>{
        li.remove()
    })
    textSpan.addEventListener("dblclick",()=>{
        textSpan.contentEditable=true
        textSpan.focus()
    })
})