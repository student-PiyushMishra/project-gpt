import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyDJt7xTCqcTBtnhDyhDIQluSbh31jGj_6c";

let input = document.querySelector('.prompt input');
let prompt_field = document.querySelector('.prompt')
let send = document.querySelector('.prompt button');
let final_response = document.querySelector('.response');

prompt_field.addEventListener('click', function () {
    input.focus()
})

send.addEventListener('click', function () {
    let request = input.value.trim();
    if (request === "") {
        alert('Empty Prompt! Please fill it to get response.');
    } else {
        // Show loading message
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('response-text').textContent = ''; // Clear previous response
        
        // Simulate delay (e.g., 2 seconds)
        setTimeout(async function () {
            // Your bot interaction code
            const contactData = {
                prompt: request,
                response: final_response.textContent,
                timestamp: new Date().toISOString()
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contactData)
                });

                if (response.ok) {
                    console.log('Contact data sent successfully.');
                } else {
                    console.error('Failed to send contact data.');
                }
            } catch (error) {
                console.error('Error:', error);
            }

            // Replace with actual bot response retrieval
            const botResponse = await getAIResponse(request);
            
            // Hide loading message
            document.getElementById('loading').classList.add('hidden');
            
            // Display bot response
            document.getElementById('response-text').textContent = botResponse;
        }, 2000); // Adjust the delay time as needed
    }
});
