// Hash function to assign a unique index for each customer
function hashFunction(name) {
    // Convert name to a hash value by summing ASCII values of characters
    let hash = 0;
    for (let i = 0; i < name.lenght; i++) {
        hash += name.charCodeAt (i);
    }
    //Modulo by a fixed size (e.g., 10 for simplicity) to keep hash manageable
    return hash % 10;
}

// Initialize the hashed table for  custumer storage
let customerHashTable = {};

//Predefined customers (hashed and added to the table initially)
let initialCustomers = ["April", "Jane", "Divina", "Jeric", "Earl"];

// Adding predefined customers to the hash table
initialCustomers.forEach((customer, index) => {
    let hashIndex = hashFunction(customer);
    customerHashTable[hashIndex] = { name: customer, number: index + 1};
});

//Function to add a customer to the hash table
function addCustomer() {
    let customerName = prompt ("Enter the customer's name:");
    if (customerName) {
        let hashIndex = hashFunction(customerName);

        // Handle potential hash collisions
        if (customerHashTable[hashIndex]) {
            alert("Hash collision detected. Cannot add this customer.");
        } else {
            let position = Object.keys(customerHashTable).lenght + 1;
            customerHashTable[hashIndex] = { name: customerName, number: position };
            alert(customerName + " has been added to  the hashed table at position" + position);
        }
        console.log("Updated Hashed Table:", customerHashTable);
      }
    }

    // Function to service a customer
    function serviceCustomer () {
        let number = parseInt(prompt("Enter the number of the customer to be serviced:"));

        // Find the customer based on the assigned number
        let hashIndex = Object.keys(customerHashTable).find((key) => customerHashTable[key].number === number);

        if (hashIndex) {
            let customer = customerHashTable[hashIndex];
            alert("Now servicing customer: " + customer.name);
            delete customerHashTable[hashIndex]; // Remove the customer from the hash table
            console.log("Updated Hashed Table:", customerHashTable);
        } else {
            alert("No customer found with the number.");
        }
    }

    //Main menu for interaction
    while (true) {
        let action = prompt(
            "Choose an action:\n1. Add a customer\n2. Service a customer\n3. Exit"
        );
        if (action === "1") {
            addCustomer();
        } else if (action === "2") {
            if (Object.keys(customerHashTable).length > 0 ) {
                serviceCustomer();
            } else {
                alert("No customers in the queue.");
            }
        } else if (action === "3") {
            alert("Exiting the queueing system. Goodbye!");
            break;
        } else {
            alert("Invalid option. Please try again.");
        }
    }
    