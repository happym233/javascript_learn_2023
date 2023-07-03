const balanceEl = document.querySelector(".balance .value")
const incomeTotalEl = document.querySelector(".income-total")
const outcomeTotalEl = document.querySelector(".outcome-total")
const incomeEl = document.querySelector("#income-tracker")
const expenseEl = document.querySelector("#expense-tracker")
const allEl = document.querySelector("#all")
const incomeList = document.querySelector("#income-tracker .list")
const expenseList = document.querySelector("#expense-tracker .list")
const allList = document.querySelector("#all .list")
const lists = document.querySelectorAll(".list")

const expenseBtn = document.querySelector(".tab1")
const incomeBtn = document.querySelector(".tab2")
const allBtn = document.querySelector(".tab3")

const addExpense = document.querySelector(".add-expense")
const expenseTitle = document.querySelector("#expense-title-input")
const expenseAmount = document.querySelector("#expense-amount-input")

const addIncome = document.querySelector(".add-income")
const incomeTitle = document.querySelector("#income-title-input")
const incomeAmount = document.querySelector("#income-amount-input")

let ENTRY_LIST 
let [balance, income, outcome] = [0, 0, 0]
let [deleteIcon, editIcon] = ["fas fa-trash", "fas fa-edit"]

ENTRY_LIST = JSON.parse(localStorage.getItem('entry-list')) || []
updateUI()

incomeBtn.addEventListener("click", function () { 
    show(incomeEl)
    hide([expenseEl, allList])
    active(incomeBtn)
    inactive([expenseBtn, allBtn])
})

expenseBtn.addEventListener("click", function () { 
    show(expenseEl)
    hide([incomeEl, allList])
    active(expenseBtn)
    inactive([incomeBtn, allBtn])
})

allBtn.addEventListener("click", function () { 
    show(allList)
    hide([incomeEl, expenseEl])
    active(allBtn)
    inactive([incomeBtn, expenseBtn])
})

addExpense.addEventListener("click", budgetOut)

addIncome.addEventListener("click", budgetIn)

lists.forEach(list => { 
    list.addEventListener('click', function(e) { 
        if (e.target.localName != 'i') return
        let targetBtn = e.target.attributes.class.value
        let entry = e.target.parentNode.parentNode
        let targetId = entry.attributes.id.value
        
        if (targetBtn === editIcon) {
            editEntry(targetId)
        } else if (targetBtn === deleteIcon) { 
            deleteEntry(targetId)
        }
    })
})

function editEntry(targetId) { 
    let targetType = ENTRY_LIST[targetId].type
    let targetTitle = ENTRY_LIST[targetId].title
    let targetAmount = ENTRY_LIST[targetId].amount
    
    if (targetType === 'income') {
        incomeAmount.value = targetAmount
        incomeTitle.value = targetTitle
    } else if (targetType === 'expense') { 
        expenseAmount.value = targetAmount
        expenseTitle.value = targetTitle
    }

    deleteEntry(targetId)
}

function deleteEntry(targetId) { 
    ENTRY_LIST.splice(targetId, 1)
    updateUI()
}

document.addEventListener("keypress", function (e) { 
    if (e.key != "Enter") return
    budgetOut(e)
    budgetIn(e)
})

function show(element) { 
    element.classList.remove("hide")
}

function hide(elements) { 
    elements.forEach(element => {
        element.classList.add("hide")
    });
}

function active(element) { 
    element.classList.add("active")
}

function inactive(elements) { 
    elements.forEach(element => { 
        element.classList.remove("active")
    })
}

function budgetOut(e) { 
    e.preventDefault()
    if (!expenseTitle.value || !expenseAmount.value) return
    let expense = {
        type: 'expense',
        title: expenseTitle.value,
        amount: parseInt(expenseAmount.value)
    }
    ENTRY_LIST.push(expense)
    updateUI()
    clearInput([expenseTitle, expenseAmount])
}

function budgetIn(e) { 
    e.preventDefault()
    if (!incomeTitle.value || !incomeAmount.value) return
    let income = {
        type: 'income',
        title: incomeTitle.value,
        amount: parseInt(incomeAmount.value)
    }
    ENTRY_LIST.push(income)
    updateUI()
    clearInput([incomeTitle, incomeAmount])
}

function updateUI() {
    income = calculateTotal("income", ENTRY_LIST)
    outcome = calculateTotal("expense", ENTRY_LIST)
    balance = calculateBalance(income, outcome)

    let sign = (income >= outcome) ? "$" : "-$"

    balanceEl.innerHTML = `<p>${sign}</p><p>${Math.abs(balance)}</p>`
    incomeTotalEl.innerHTML = `<p>$</p><p>${income}</p>`
    outcomeTotalEl.innerHTML = `<p>$</p><p>${outcome}</p>`

    clearElement([expenseList, incomeList, allList])
    ENTRY_LIST.forEach(function (entry, index) { 
        const list = entry.type === 'expense'? expenseList:incomeList
        showEntry(list, entry.type, entry.title, entry.amount, index)
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    })

    updateChart(income, outcome)

    localStorage.setItem('entry-list', JSON.stringify(ENTRY_LIST))
}

function clearInput(inputs) { 
    inputs.forEach(input => {
        input.value = ''
    })
}

function showEntry(list, type, title, amount, id) { 
    const entry = `<li id="${id}" class="${type}">
                    <div class="entry">${title}: $${amount}</div>
                    <div class="action">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                </li>`

    const position = "afterbegin"
    list.insertAdjacentHTML(position, entry)
}

function clearElement(elements) { 
    elements.forEach(function (element) { 
        element.innerHTML = ""
    })
}

function calculateBalance(income, outcome) { 
    return income - outcome
}

function calculateTotal(type, list) { 
    let sum = 0
    list.forEach(item => {
        if (item.type === type) { 
            sum += item.amount
        }
    })
    return sum
}