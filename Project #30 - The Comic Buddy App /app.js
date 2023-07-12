class SuperheroEntry { 
    constructor(superheroName, superheroUniverse, superheroPower) { 
        this.superheroName = superheroName
        this.superheroUniverse = superheroUniverse
        this.superheroPower = superheroPower
    }
}

class SuperheroList {
    constructor() { 

    }

    addSuperhero(entry) {
        const listData = document.querySelector('.superhero-list-data')
        const listContainer = document.createElement('ul')
        listContainer.setAttribute('id', 'list')

        listContainer.innerHTML += `
            <li>${entry.superheroName}</li>
            <li>${entry.superheroUniverse}</li>
            <li>${entry.superheroPower}</li>
            <i class="fas fa-trash"> </i>
        `

        listData.appendChild(listContainer)
    }

    clearSuperheroInputs() { 
        [
            document.querySelector('#name').value,
            document.querySelector('#universe').value,
            document.querySelector('#power').value
        ] = ["", "", ""]
    }

    validationError() { 
        document.querySelector(".validate-error").classList.add("show-validation")
        setTimeout(() => { 
            document
                .querySelector(".validate-error").classList
                .remove("show-validation")
        }, 500)
    }

    validationSuccess() { 
        document.querySelector(".validate-success").classList.add("show-validation")
        setTimeout(() => { 
            document
                .querySelector(".validate-success").classList
                .remove("show-validation")
        }, 500)
    }
}

class StoreSuperhero { 
    static getSuperhero() { 
        let superheros
        if (localStorage.getItem('superheros') === null) {
            superheros = []
        } else { 
            superheros = JSON.parse(localStorage.getItem('superheros'))
        }
        return superheros
    }

    static addSuperhero(entry) { 
        const superherosList = StoreSuperhero.getSuperhero()
        superherosList.push(entry)
        localStorage.setItem("superheros", JSON.stringify(superherosList))
    }

    static displaySuperheros() { 
        const superherosList = StoreSuperhero.getSuperhero()

        superherosList.forEach(superhero => {
            const list = new SuperheroList()
            list.addSuperhero(superhero)
        });
    }

    static removeSuperhero(superheroName) { 
        const superheroList = StoreSuperhero.getSuperhero()
        superheroList.forEach((superhero, index) => { 
            if (superhero.superheroName === superheroName) { 
                superheroList.splice(index, 1)
            }
        })
        localStorage.setItem("superheros", JSON.stringify(superheroList))
    }
}

document.addEventListener('DOMContentLoaded', StoreSuperhero.displaySuperheros())

const form = document.querySelector('.superhero-form')
form.addEventListener('submit', function (e) { 
    e.preventDefault()

    let [superheroName, superheroUniverse, superheroPower] = [document.querySelector('#name').value,
        document.querySelector('#universe').value,
        document.querySelector('#power').value]


    const entry = new SuperheroEntry(superheroName, superheroUniverse, superheroPower)
    const list = new SuperheroList()


    if (superheroName === ''
        || superheroUniverse === ''
        || superheroPower === '') {
        list.validationError()
    } else { 
        list.addSuperhero(entry)
        list.clearSuperheroInputs()
        list.validationSuccess()

        StoreSuperhero.addSuperhero(entry)
    }
})

const listData = document.querySelector(".superhero-list-data")
listData.addEventListener("click", function(e) {
    if (e.target.className === 'fas fa-trash') { 
        const trash = e.target.parentNode
        const clickedSuperhero = trash.children[0].textContent
        StoreSuperhero.removeSuperhero(clickedSuperhero)
        trash.remove()
    }
})