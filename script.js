//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    /*
    We are using this method in order to have
    multiple dropdown menus on the page work
    */

    //Add a click event to the select element
    select.addEventListener('click', () => {
        //Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });
      // Loop through all option elements
    options.forEach(option => {
        // Add a click event to each option element
        option.addEventListener('click', () => {
            // Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            // Remove the clicked select styles
            select.classList.remove('select-clicked');
            // Remove the rotate styles from the caret
            caret.classList.remove('caret-rotate');
            // Remove the open styles from the menu
            menu.classList.remove('menu-open');
            // Remove the active class from all option elements
            options.forEach(opt => opt.classList.remove('active')); // **Correction:** Fixed removal of active class for all options
            // Add the active class to the clicked option element
            option.classList.add('active');
        });
    }); 
// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        // Remove the clicked select styles
        select.classList.remove('select-clicked');
        // Remove the rotate styles from the caret
        caret.classList.remove('caret-rotate');
        // Remove the open styles from the menu
        menu.classList.remove('menu-open');
    }
});
});