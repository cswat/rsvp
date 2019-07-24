const form = document.getElementById('registrar')
const input = form.querySelector('input')
const ul = document.getElementById('invitedList')

form.addEventListener('submit', (e) => {
    //stop page from refreshing after submit
    e.preventDefault()

    //create list item and add it in
    let li = document.createElement('li')
    li.innerText = input.value
    ul.appendChild(li)
    
    //create label for checkbox and add it to list item
    const label = document.createElement('label')
    label.textContent = 'Confirmed'
    li.appendChild(label)

    //create checkbox and add it to list item
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.label = 'Select if attendee is coming'
    label.appendChild(checkbox)

    //create remove button for list item and add it to list item
    let removeBtn = document.createElement('button')
    removeBtn.className = 'delete'
    removeBtn.innerText = 'Remove'
    li.appendChild(removeBtn)

    //reset text field
    form.reset()
});

ul.addEventListener('change', (e) => {
    const checkbox = e.target
    const checked = checkbox.checked
    const listItem = checkbox.parentNode.parentNode
    if (checked) {
        listItem.className = 'responded'
    } else {
        listItem.className = ''
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const li = e.target.parentNode
      const ul = li.parentNode
      ul.removeChild(li)
    } 
})