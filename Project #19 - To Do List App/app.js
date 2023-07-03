const clearBtn = document.querySelector('.clear')
const toDoList = document.querySelector('#list')
const toDoInput = document.querySelector('#input') 
const toDoAddBtn = document.querySelector('.fa-plus-circle')

const checkBtn = 'fa-check-circle'
const uncheckBtn = 'fa-circle-thin'
const textLineThrough = 'line-through'

let toDoContainer = []
let id = 0

let todoData = localStorage.getItem('to-do-item')
if (todoData) { 
    toDoContainer = JSON.parse(todoData)
    id = toDoContainer.length
    loadToDoContainer(toDoContainer)
}

function loadToDoContainer(toDoContainer) { 
    toDoContainer.forEach(todoItem => {
        addToDo(todoItem.name,
            todoItem.id,
            todoItem.done,
            todoItem.trash
        )
    });
}

function addToDo(toDo, id, done, trash) { 
    if (trash) return

    const toDoDone = done ? checkBtn : uncheckBtn
    const toDoLine = done ? textLineThrough : ''

    const item = `
            <li class="item">
                <i class="fa ${toDoDone} complete" status="complete" id="${id}"></i>
                <p class="text ${toDoLine}">${toDo}</p>
                <i class="fa fa-trash-o delete" status="delete" id="${id}"></i>
            </li>
             `

    const position = 'beforeend'
    toDoList.insertAdjacentHTML(position, item)
}

document.addEventListener('keyup', displayToDo)
toDoAddBtn.addEventListener('click', displayToDo)

function displayToDo(event) { 
    if (event.keyCode === 13 || event.target.classList.value === 'fa fa-plus-circle') { 
        const toDo = toDoInput.value
        if (toDo) { 
            addToDo(toDo, id, false, false)
            toDoContainer.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            })
            
            localStorage.setItem('to-do-item', JSON.stringify(toDoContainer))

            id++
            toDoInput.value = ""
        }
    }
}

toDoList.addEventListener('click', function (evt) { 
    if (evt.srcElement.localName !== 'i') return
    const toDoItem = evt.target
    const toDoStatus = toDoItem.attributes.status.value
    if (toDoStatus === 'complete') {
        completeToDo(toDoItem)
    } else if (toDoStatus === 'delete') {
        removeToDo(toDoItem)
    }

    localStorage.setItem('to-do-item', JSON.stringify(toDoContainer))
})

function completeToDo(toDoItem) { 
    toDoItem.classList.toggle(checkBtn)
    toDoItem.classList.toggle(uncheckBtn)
    const toDoText = toDoItem.parentNode.querySelector('.text')
    toDoText.classList.toggle(textLineThrough)
    toDoContainer[toDoItem.id].done = !toDoContainer[toDoItem.id].done
}

function removeToDo(toDoItem) { 
    toDoItem.parentNode.parentNode.removeChild(toDoItem.parentNode)
    toDoContainer[toDoItem.id].trash = true
}

clearBtn.addEventListener('click', function (evt) { 
    console.dir(toDoList)
})