const lists = document.querySelectorAll('.list')
const listItems = document.querySelectorAll('.list-item')

let draggedItem = null

for (let i = 0; i < listItems.length; i++) { 
    const item = listItems[i]

    item.addEventListener('dragstart', function () { 
        draggedItem = item
        setTimeout(function () {
            item.style.display = "none"
        }, 50)
    })

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            item.style.display = "block"
            draggedItem = null
        }, 50)
    })

    for (let j = 0; j < lists.length; j++) { 
        const list = lists[j]
        
        list.addEventListener('dragover', function (e) { 
            e.preventDefault()
        })

        list.addEventListener('dragenter', function (e) { 
            e.preventDefault()
            list.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
            console.dir(list)
        })

        list.addEventListener('dragleave', function (e) { 
            list.style.backgroundColor = "rgba(88, 65, 83, 0.5)"
        })

        list.addEventListener('drop', function (e) { 
            list.append(draggedItem)
            list.style.backgroundColor = "rgba(88, 65, 83, 0.5)"
        }) 
    }
}