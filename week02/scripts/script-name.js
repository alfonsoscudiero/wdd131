// TODO-1 Declare three (3) Variables for Elements
const input = document.querySelector('#favchap'); // Reference to the input field
const button = document.querySelector('button'); // Reference to the Add Chapter button
const list = document.querySelector('#list'); // Reference to the unordered list

// Common DOM events
// TODO-5 Add Click Event Listener to the Button
button.addEventListener('click', function() {
// Check if input is not empty
if (input.value.trim() !== '') { // The .trim() method removes whitespace from both ends of a string.
     // Create and populate list item
    const li = document.createElement('li'); // Create a new list item (li)
    li.textContent = input.value; // Set the text of li to the input value
    const deleteButton = document.createElement('button'); // Create a delete button
    deleteButton.textContent = '❌'; // Set the text of the delete button to ❌
    li.append(deleteButton); // Append the delete button to the li
    list.append(li); // Append the li to the unordered list (ul)
    
    // Add an event listener to the delete button to remove the li when clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Remove the 'li' from the list
        input.focus(); // Set focus back to the input field
    });

    input.value = ''; // Clear the input field
}
input.focus(); // Set focus back to the input field

});


































// TODO-2 Create Elements for List Item and Delete Button
// const li = document.createElement('li'); // Create a new list item 'li'
// const deleteButton = document.createElement('button');

// TODO-3 Populate 'li' with Text and 'button' with ❌:
// li.textContent = input.value; // Set the text of li to the input value
// deleteButton.textContent = '❌'; // Set the text of the delete button to ❌

// TODO-4 Append Delete Button to 'li' and 'li' to the List
// li.append(deleteButton); // Append the delete button to the li
// list.append(li); // Append the 'li' to the unordered list (ul)