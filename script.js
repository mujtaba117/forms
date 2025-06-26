document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
        // Prevent the default form submission (which reloads the page)
        event.preventDefault();

        // Get the values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventType = document.getElementById('eventType').value;

        // Create an object with the form data
        const formData = {
            fullName: name,
            emailAddress: email,
            selectedEvent: eventType
        };

        // Log the data to the console to show it was captured successfully
        console.log('Form Submitted!');
        console.log(formData);
        
        // You can add an alert to notify the user
        alert(`Thank you, ${name}! You have successfully registered for the ${eventType}.`);

        // Here, you would typically send the 'formData' to a server
        // using an API call like fetch().
        // Example:
        // fetch('https://api.yourserver.com/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch(error => console.error('Error:', error));
        
        // Reset the form after submission
        registrationForm.reset();
    });
});