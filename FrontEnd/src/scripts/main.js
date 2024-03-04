const menubarButtons = document.querySelectorAll('.dropdown-button');
const dropdownContainer = document.getElementById('toggle-content-container');

menubarButtons.forEach((button) => {
    button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        menubarButtons.forEach((btn) => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Toggle the corresponding dropdown
        const dropdownId = this.getAttribute('data-dropdown');
        toggleDropdown(dropdownId);
    });
});

dropdownContainer.addEventListener('mouseover', function (event) {
    // Check if the mouse is over a dropdown button
    const targetButton = event.target.closest('.dropdown-button');
    if (targetButton) {
        // Add 'active' class to the hovered button
        targetButton.classList.add('active');

        // Toggle the corresponding dropdown
        const dropdownId = targetButton.getAttribute('data-dropdown');
        toggleDropdown(dropdownId);
    }
});

dropdownContainer.addEventListener('mouseout', function (event) {
    // Remove 'active' class from all buttons when mouse leaves the container
    menubarButtons.forEach((button) => button.classList.remove('active'));
});

function toggleDropdown(classname) {
    // Hide all dropdowns
    const allDropdowns = document.querySelectorAll('.toggle-content');
    allDropdowns.forEach((dropdown) => {
        dropdown.style.display = 'none';
    });

    // Show the targeted dropdown
    const dropdown = document.getElementById(classname);
    if (dropdown) {
        dropdown.style.display = 'flex';
    }
}
