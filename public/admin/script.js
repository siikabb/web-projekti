// Function to handle adding or editing a menu item
function saveMenuItem(editMode = false, itemId = null) {
    const dishType = document.getElementById('dish-type').value;
    const dishName = document.getElementById('dish-name').value;
    const dishPrice = parseFloat(document.getElementById('dish-price').value);

    if (dishName && !isNaN(dishPrice)) {
        const menuTable = document.querySelector('.menu-items tbody');

        if (editMode) {
            // Update existing row
            const rows = menuTable.querySelectorAll('tr');
            for (const row of rows) {
                if (row.firstChild.textContent === itemId) {
                    row.children[1].textContent = dishType;
                    row.children[2].textContent = dishName;
                    row.children[3].textContent = `$${dishPrice.toFixed(2)}`;
                    break;
                }
            }
        } else {
            // Add new row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${generateItemId()}</td>
                <td>${dishType}</td>
                <td>${dishName}</td>
                <td>$${dishPrice.toFixed(2)}</td>
                <td>
                    <button type="button" class="edit-btn">Edit</button>
                    <button type="button" class="delete-btn">Delete</button>
                </td>
            `;
            menuTable.appendChild(newRow);
        }

        resetForm();
    } else {
        alert('Please enter both Dish Name and Price.');
    }
}

// Function to generate a unique item ID
function generateItemId() {
    return Math.floor(Math.random() * 1000).toString();
}

// Function to reset the form
function resetForm() {
    document.getElementById('menu-item-form').reset();
    document.getElementById('save-item').textContent = 'Save Menu Item';
    document.getElementById('save-item').onclick = function() { saveMenuItem(); };
}

// Function to handle deleting a menu item
function deleteMenuItem(itemId) {
    if (confirm('Are you sure you want to delete this menu item?')) {
        const menuTable = document.querySelector('.menu-items tbody');
        const rows = menuTable.querySelectorAll('tr');
        for (const row of rows) {
            if (row.firstChild.textContent === itemId) {
                row.remove();
                break;
            }
        }
    }
}

// Function to show a specific section based on sidebar navigation
function showSection(sectionToShow) {
    const allSections = document.querySelectorAll('.content > div');
    allSections.forEach(section => {
        if (sectionToShow === 'dashboard') {
            section.style.display = 'block'; // Show all sections for dashboard
        } else {
            // For other sections, show only the selected one
            if (section.classList.contains(sectionToShow)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });
}

// Event delegation for edit and delete buttons
document.querySelector('.menu-items tbody').addEventListener('click', function(event) {
    const target = event.target;
    const row = target.closest('tr');
    const itemId = row.firstChild.textContent;

    if (target.classList.contains('edit-btn')) {
        // Set form values to selected row's values and switch to edit mode
        document.getElementById('dish-type').value = row.children[1].textContent;
        document.getElementById('dish-name').value = row.children[2].textContent;
        document.getElementById('dish-price').value = parseFloat(row.children[3].textContent.substring(1)).toFixed(2);
        document.getElementById('save-item').textContent = 'Update Menu Item';
        document.getElementById('save-item').onclick = function() { saveMenuItem(true, itemId); };
    } else if (target.classList.contains('delete-btn')) {
        deleteMenuItem(itemId);
    }
});

// Event listeners for sidebar links
document.getElementById('dashboard-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('dashboard');
});

document.getElementById('orders-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('orders');
});

document.getElementById('menu-items-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('menu-items');
});

// Handling form submission
document.getElementById('menu-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const saveButton = document.getElementById('save-item');
    if (saveButton.textContent === 'Save Menu Item') {
        saveMenuItem();
    } else {
        const itemId = document.querySelector('.menu-items tbody tr:first-child').firstChild.textContent;
        saveMenuItem(true, itemId);
    }
});
