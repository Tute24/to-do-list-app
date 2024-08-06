let addTaskBttn = document.getElementById('addTask')
let taskInput = document.getElementById('task')
let unorderedList = document.getElementById('addedTasks')


let row = 1

let newTask = function(){
    let checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox'
    checkboxInput.id = `input-${row}`
    checkboxInput.classList.add('tasksClass')

    let taskLabel = document.createElement('label')
    taskLabel.innerText = taskInput.value
    taskLabel.htmlFor = `input-${row}`
    taskLabel.id = `label-${row}`

    let newListItem = document.createElement('li')
    newListItem.id = `li-${row}`
    newListItem.classList.add('listClass')

    

    let removeBttn = document.createElement('button')
    removeBttn.type = 'button'
    removeBttn.classList.add('buttons')
    removeBttn.id = `button-${row}`
    removeBttn.innerText = 'X'

    newListItem.appendChild(checkboxInput)
    newListItem.appendChild(taskLabel)
    newListItem.appendChild(removeBttn)
    unorderedList.appendChild(newListItem)

    let removeTask = function (){
    unorderedList.removeChild(newListItem)
    }

    removeBttn.addEventListener('click',removeTask)
    
    row++
}



addTaskBttn.addEventListener('click',newTask)