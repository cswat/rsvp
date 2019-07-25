const form = document.getElementById('registrar')
const input = form.querySelector('input')
const ul = document.getElementById('invitedList')
const h2 = document.querySelector('h2')

//create filter and add it to page
const filterDiv = document.createElement('div')
filterDiv.className = 'filter'
const filterCbox = document.createElement('input')
filterCbox.type = 'checkbox'
const filterLabel = document.createElement('Label')
filterLabel.textContent = "Hide those who haven't responded"
document.querySelector('.main').insertBefore(filterDiv, ul)
filterDiv.appendChild(filterCbox)
filterDiv.appendChild(filterLabel)

form.addEventListener('submit', (e) => {
    //stop page from refreshing after submit
    e.preventDefault()

    //create list item and add it in
    let li = document.createElement('li')
    ul.appendChild(li)

    //create text in span for list item and add it to list item
    let span = document.createElement('span')
    span.textContent = input.value
    li.appendChild(span)
    
    //create label for checkbox and add it to list item
    const label = document.createElement('label')
    label.textContent = 'Confirmed'
    li.appendChild(label)

    //create checkbox and add it to list item
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.label = 'Select if attendee is coming'
    label.appendChild(checkbox)

    //create edit button for list item and add it to list item
    let editBtn = document.createElement('button')
    editBtn.className = 'edit'
    editBtn.innerText = 'Edit'
    li.appendChild(editBtn)

    //create remove button for list item and add it to list item
    let removeBtn = document.createElement('button')
    removeBtn.className = 'delete'
    removeBtn.innerText = 'Remove'
    li.appendChild(removeBtn)

    //reset text field
    form.reset()
});

//handle checkbox for attending individuals
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

//handle button clicks
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target
        const li = button.parentNode
        const ul = li.parentNode
        if ( button.textContent === 'Remove') {
            ul.removeChild(li)
        } else if (button.textContent === 'Edit') {
            const span = li.firstElementChild
            const input = document.createElement('input')
            input.type = 'text'
            input.value = span.textContent
            li.insertBefore(input, span)
            li.removeChild(span)
            button.textContent = 'Save'
        } else if (button.textContent === 'Save') {
            const input = li.firstElementChild
            const span = document.createElement('span')
            span.textContent = input.value
            li.insertBefore(span, input)
            li.removeChild(input)
            button.textContent = 'Edit'
        }
    }      
});

//handle filters
filterDiv.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const guestList = ul.children;
    if (checked) {
        for (i = 0; i < guestList.length; i++) {
            if (guestList[i].className === 'responded') {
                guestList[i].style.display = '';
            } else {
                guestList[i].style.display = 'none';
            }
        }
    } else {
        for (i = 0; i < guestList.length; i++) {
            guestList[i].style.display = '';
        }
    }
});
