# Fake-Product-Identification-using-Block-Chain-Technology
# Project Overview
This project is a blockchain-based system to authenticate and track the lifecycle of a product. It involves multiple roles:

Admin: Adds manufacturers to the system.
Manufacturer: Authenticates via face recognition and adds products to the blockchain.
Seller: Views products available for sale.
Customer: Scans QR codes to verify product authenticity and retrieves detailed product information.

# Technologies Used
Node.js
Express.js
Truffle Framework
Ganache
MetaMask
ReactJS
face-api.js

# Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js
npm
Truffle
Ganache
MetaMask Extension (for interacting with the blockchain)

# Project Setup and Installation
1. Copy code
git clone https://github.com/your-repo-name/fake-product-identification.git
cd fake-product-identification

2. Install Dependencies
Navigate to the project directory and install all necessary packages:
Copy code
"npm install"

3. Set Up Blockchain (Truffle and Ganache)
Ganache:
Open Ganache and create a new workspace or use the Quickstart Ethereum workspace.
Ensure Ganache is running on port 7545 (default).
Truffle:
Compile the smart contracts:
Copy code
"truffle compile"
Migrate the contracts to the blockchain:
Copy code
"truffle migrate"

4. Configure MetaMask
Open MetaMask in your browser and connect it to the Ganache blockchain:
Add a custom RPC with the URL http://127.0.0.1:7545.
Import an account using one of the private keys from Ganache.

5. Start the Backend Server
Run the Node.js backend server:
Copy code
"npm run dev"
This should start the server on http://localhost:3000 (or the specified port).

6. Start the React Frontend
Navigate to the client directory:
Copy code
"cd client"
Install frontend dependencies:
Copy code
"npm install"
Start the React application:
Copy code
"npm start"
The frontend should now be running on http://localhost:3000.

# How to Use the Application:-

1. Admin
Login with the Admin ID.
Add Manufacturer:
Enter Manufacturer ID and Name.
Click on "Add Manufacturer" to store details in the database.
2. Manufacturer
Face Recognition:
Manufacturer authenticates using face-api.js.
Add Product:
Enter product details (Serial Number, Name, Company, Price, etc.).
Click on "Add Product" to store the product on the blockchain.
3. Seller
Login with Seller ID.
View Products:
All products added by manufacturers will be displayed.
4. Customer
Scan QR Code:
Verify the product and view basic information.

# View More Details:
Login/Register to access detailed product information.

# Testing the System
Test Blockchain Operations:
Use Truffle's truffle test command to run tests on your smart contracts.
Test Application:
Manually interact with each user role to ensure correct functionality.

# Additional Information
1. Face Recognition: The manufacturer uses face-api.js for authentication. Ensure the camera is accessible and face recognition is trained and ready.
2. QR Code: The customer scans a QR code to verify the product. The QR code is linked to the blockchain data.

# Troubleshooting
Common Issues:-
Ganache Not Running:
Ensure Ganache is running and listening on port 7545.
MetaMask Connection Issues:
Check that MetaMask is connected to the correct Ganache network.

# Logs and Debugging:-
Server Logs: Check the console for backend logs.
Blockchain Logs: View the migration and interaction logs in the Truffle console.
Frontend Debugging: Use browser developer tools to debug React components and inspect network calls.
