/* VARIABLES */
const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('ul')

/* EVENT LISTENERS */
button.addEventListener('click', () => {
    // Get the current value of input and reset to zero
    let currentValue = input.value
    input.value = ''

    // New variables for the list
    const listItem = document.createElement('li')
    const span = document.createElement('span')
    const deleteButton = document.createElement('button')

    // Check if the input has text
    if (currentValue.trim().length > 0) {
        // Create the list item
        listItem.appendChild(span)
        listItem.appendChild(deleteButton)
        span.textContent = currentValue
        deleteButton.textContent = '❌'
        deleteButton.setAttribute('aria-label', ('Delete ' + currentValue))
        list.appendChild(listItem)

        // Delete list item when delete button is clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem)
        }) // keep this event listener inside of the scope so it selects the correct list item

        // Return focus to the input field
        input.focus()
    } else {
        input.placeholder = 'Please enter a book and chapter...'
    }
})















