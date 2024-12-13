// Initial queue with 5 costumers
let custumersQueue = [ " April", "Jane", "Divina", "Jeric", "Earl"];

//Display the initial customer queue in the console
console.log("Initial Costumer Queue: " + custumersQueue.join(" , "));

// Function to add a costumer to the queue
function addCustumer() {
    // Prompt the user to enter the customer's name
    let custumerName = prompt("Enter the costumer's name:");
    if (custumerName) {
        // Add the entered name to the end of the queue
        custumersQueue.push(custumerName);
        alert(custumerName + "has been added to the queue at position " + custumersQueue.length);
    
    }
}

// Function to service a costumer
function serviceCustomer() {
    // Prompt the user to enter the customer's to service
    let queueNumber = parseInt(prompt("Enter the number of the customer to be serviced (1 to " + custumersQueue.lenght + "):"));
    if (queueNumber > 0 && queueNumber <= custumersQueue.length) {
        // Retrieve the name of the customer to service
        let custumerName = custumersQueue[queueNumber - 1];
        // Alert the user that the customer is being serviced
        alert("Now servicing customer " + queueNumber + ": " + custumerName);
        // Remove the serviced customer from the queue
        custumersQueue.splice(queueNumber - 1, 1);
        // Display the updated queue in the console
        console.log("Updated Queue: " + (custumersQueue.length > 0 ? custumersQueue.join(", ") : "Queue is empty."));
    } else {
        // Alert if an invalid numbered entered
        alert("Invalid queue number entered.");

    }
}

// Menu-driven interaction
while (true) {
    //Display menu option and prompt the user for an action
    let action = prompt("Choose an action:\n1. Add a customer\n2. Service a customer\n3. Exit");
    if (action === "1") {
        // Call the function to add a customer
        addCustumer();
    } else if (action === "2") {
        if (custumersQueue.length > 0 ) {
            // Call the function to service a customer if the queue is not empty
            serviceCustomer();
        } else {
            // Alert if no customers are left in the queue
            alert("No customers in the queue.");
        }
    } else if (action === "3") {
        // Exit the program with a goodbye message
        alert("Exiting the queueing system. Goodbye!");
        break;
    } else {
        // Alert if  an invalid option is selected
        alert("Invalid optio. Please try again.");
    }
    }