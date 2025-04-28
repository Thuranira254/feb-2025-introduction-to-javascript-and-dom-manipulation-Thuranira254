// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Text Changed Dynamically!';
});

// Toggle (add/remove) an element
document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const removableElement = document.getElementById('removable-element');
    if (removableElement) {
        removableElement.remove();
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'removable-element';
        newElement.textContent = 'This element has been added back!';
        document.getElementById('dynamic-content').appendChild(newElement);
    }
});

// Modify CSS styles via JavaScript
document.getElementById('change-text-btn').addEventListener('mouseover', () => {
    document.getElementById('main-heading').style.color = 'blue';
});
document.getElementById('change-text-btn').addEventListener('mouseout', () => {
    document.getElementById('main-heading').style.color = 'black';
});