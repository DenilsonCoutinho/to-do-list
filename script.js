
function AddToList(){
    let List = document.querySelector("input[name='goals'").value
    let addList = document.createElement("p")
    addList.innerText = List
let check = document.createElement("input")
 check.type= "checkbox"
 check.setAttribute("onclick", "check(this)")
 addList.appendChild(check)


    let removeButton = document.createElement("button")
    removeButton.type= "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "RemoveFromList(this)" )

    addList.appendChild(removeButton)    
 document.querySelector('.todo').appendChild(addList)
}
function RemoveFromList(button){ 
    let premove = button.parentNode
    document.querySelector('.todo').removeChild(premove)
}

