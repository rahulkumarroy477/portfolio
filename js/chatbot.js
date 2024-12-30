// Function to open the dialog

const apiKey = "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"
function openDialog() {
    document.getElementById('dialog').style.display = 'flex';
}

// Function to close the dialog
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}

// Function to add message to the chat
function addMessage(content, sender) {
    const messageContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = content;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
}

// Handle form submission and API call
document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    const input = document.getElementById('message-input');
    const userMessage = input.value.trim();

    if (userMessage) {
        // Display user message
        addMessage(userMessage, 'user');

        // Clear input field
        input.value = '';

        // Simulate an API call and get the response
        callApi(userMessage);
    }
});

// Mock API Call (simulating a chatbot response)
function callApi(userMessage) {
    setTimeout(() => {
        // Here, you can replace this with an actual API call using axios or fetch.
        // Example: axios.post('https://api.example.com/chat', { message: userMessage })


        
        // For now, we're using a mock response.
        const mockResponse = `You said: "${userMessage}", which is a great question!`;

        // Display bot response
        addMessage(mockResponse, 'bot');
    }, 1000); // Simulate a delay (1 second)
}
