window.onload = function() {
    setTimeout(showChatbot, 3000); // Show chatbot after 3 seconds
};

function showChatbot() {
    // Create the chatbot container
    const chatbot = document.createElement('div');
    chatbot.setAttribute('id', 'chatbot-popup');
    chatbot.style.position = 'fixed';
    chatbot.style.bottom = '20px';
    chatbot.style.right = '-320px'; // Initially off-screen for animation
    chatbot.style.width = '300px';
    chatbot.style.backgroundColor = '#f1f1f1';
    chatbot.style.padding = '15px';
    chatbot.style.borderRadius = '10px';
    chatbot.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    chatbot.style.transition = 'right 0.5s ease-in-out'; // Slide-in animation
    chatbot.style.fontFamily = 'Arial, sans-serif';
    chatbot.style.color = '#333';

    // Chatbot content with inline styles
    chatbot.innerHTML = `
        <div id="chatbot-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="margin: 0; font-size: 16px;">Need Help?</h4>
            <button id="minimize-btn" style="background: none; border: none; font-size: 18px; color: #007bff; cursor: pointer; padding: 0;">-</button>
        </div>
        <div id="chatbot-content">
            <p style="margin-bottom: 10px;">Do you want to book an appointment?</p>
            <button onclick="openAppointmentForm()" style="background-color: #007bff; color: white; padding: 8px 12px; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease; margin-right: 5px;">Yes, Book Now</button>
            <button onclick="closeChatbot()" style="background-color: #e0e0e0; color: black; padding: 8px 12px; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease;">No, Thanks</button>
        </div>
    `;

    document.body.appendChild(chatbot);

    // Slide the chatbot into view after it's appended
    setTimeout(() => {
        chatbot.style.right = '20px'; // Slide in from the right
    }, 100);

    // Add event listener for the minimize button
    document.getElementById('minimize-btn').addEventListener('click', toggleChatbotContent);
}

function closeChatbot() {
    const chatbot = document.getElementById('chatbot-popup');
    if (chatbot) {
        chatbot.style.right = '-320px'; // Slide out
        setTimeout(() => {
            chatbot.remove(); // Remove after sliding out
        }, 500);
    }
}

function openAppointmentForm() {
    window.location.href = 'contact.html'; // Redirect to contact page
}

function toggleChatbotContent() {
    const content = document.getElementById('chatbot-content');
    const minimizeBtn = document.getElementById('minimize-btn');
    if (content.style.display === 'none') {
        content.style.display = 'block'; // Show the content
        minimizeBtn.textContent = 'x'; // Change button to "minimize" symbol
    } else {
        content.style.display = 'none'; // Hide the content
        minimizeBtn.textContent = '+'; // Change button to "maximize" symbol
    }
}
