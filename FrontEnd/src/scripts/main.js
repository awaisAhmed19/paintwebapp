function toggleDropdown(classname) {
    const dropdown = document.getElementsByClassName(classname);

    // Check if elements with the specified class name exist
    if (dropdown.length > 0) {
        // Convert the HTMLCollection to an array using Array.from
        Array.from(dropdown).forEach((element) => {
            // Toggle the display style
            element.style.display = (element.style.display === "none" || element.style.display === "") ? "flex" : "none";
        });
    } else {
        console.error(`No elements found with class '${classname}'`);
    }
}
