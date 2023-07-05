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
            <i class="fas trash"> </i>
        `
    }

}

const form = document.querySelector('.superhero-form')
form.addEventListener('submit', function (e) { 
    e.preventDefault()

    let [superheroName, superheroUniverse, superheroPower] = [document.querySelector('#name').value,
        document.querySelector('#universe').value,
        document.querySelector('#power').value]


    const entry = new SuperheroEntry(superheroName, superheroUniverse, superheroPower)
    const list = new SuperheroList()

    list.addSuperhero(entry)
})