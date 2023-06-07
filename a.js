const inputbox = document.querySelector("#inputBox")
const addBtn = document.querySelector("#addBtn")
const lists = document.querySelector('#lists')



addBtn.addEventListener('click', addItem)

function addItem() {
    const li = document.createElement('li')
    li.textContent = inputbox.value
    lists.append(li)
    inputbox.value = ''
}