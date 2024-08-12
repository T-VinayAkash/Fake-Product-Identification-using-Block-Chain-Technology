let manufacturers = [];

function addManufacturer() {
    const manufacturerId = document.getElementById('manufacturerId').value;
    const manufacturerName = document.getElementById('manufacturerName').value.toLowerCase();

    // Check if the manufacturer ID already exists
    if (manufacturers.find(manufacturer => manufacturer.manufacturerId === manufacturerId)) {
        alert('Manufacturer ID already exists. Please choose a different one.');
        return;
    }

    // Store manufacturer data in local storage
    const newManufacturer = { manufacturerId, manufacturerName };
    manufacturers.push(newManufacturer);
    localStorage.setItem('manufacturer', JSON.stringify(newManufacturer));

    alert('Manufacturer added successfully!');
}

function manufacturerLogin() {
    const enteredManufacturerId = document.getElementById('manufacturerId').value;
    const enteredManufacturerName = document.getElementById('manufacturerName').value.toLowerCase();

    // Retrieve stored manufacturer from local storage
    const storedManufacturer = JSON.parse(localStorage.getItem('manufacturer'));

    // Check if the entered credentials match the stored manufacturer
    if (storedManufacturer && storedManufacturer.manufacturerId === enteredManufacturerId && storedManufacturer.manufacturerName === enteredManufacturerName) {
        alert('Login successful!');
        // Optional: Redirect to another page
        window.location.href = 'addProduct.html';
    } else {
        alert('Invalid manufacturer ID or name. Please try again.');
    }
}

function exit() {
    // Redirect to index.html
    window.location.href = 'index.html';
}
