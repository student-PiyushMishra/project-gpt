import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyDJt7xTCqcTBtnhDyhDIQluSbh31jGj_6c";

let input = document.querySelector('.prompt input');
let prompt_field = document.querySelector('.prompt')
let send = document.querySelector('.prompt button');
let final_response = document.querySelector('.response');
let copy = document.querySelector('.copy')


prompt_field.addEventListener('click', function () {
    input.focus()
})

<<<<<<< HEAD
// send.addEventListener('click', function () {
//     let request;
//     if (input.value.trim() === "") {
//         alert('Empty Prompt! Please fill it to get response.')
//     }
//     else {
//         request = input.value
//         const genAI = new GoogleGenerativeAI(API_KEY);
        
//         async function run() {
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            
//             const prompt = request + ' . write in short!'
            
//             const result = await model.generateContent(prompt);
//             const response = await result.response;
//             const text = response.text();
//             final_response.innerHTML = result;
//             copy.style.visibility = "visible"
//             copy.classList.add('visible')
//             const contactData = {
//                 prompt: request,
//                 response: final_response.innerHTML + "<br>",
//                 timestamp: new Date().toISOString()
//             };
//             localStorage.setItem('contactData', JSON.stringify(contactData));
//         }

//         run();
//     }
// })

send.addEventListener('click', async function () {
    let request;
    if (input.value.trim() === "") {
        alert('Empty Prompt! Please fill it to get response.')
    } else {
        request = input.value;
        const genAI = new GoogleGenerativeAI(API_KEY);

        async function run() {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = request + ' . write in short!';
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            console.log('Result:', result);
            console.log('Text:', text);
            console.log('Copy Element:', copy);

            // Update the copy element
            copy.style.display = 'flex';  // Use visibility for better control
            final_response.innerHTML = text;

            const contactData = {
                prompt: request,
                response: final_response.innerHTML + "<br>",
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('contactData', JSON.stringify(contactData));
=======
send.addEventListener('click', async function () {
    let request = input.value.trim();
    if (request === "") {
        alert('Empty Prompt! Please fill it to get response.');
    } else {
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
>>>>>>> b967127a22b952b82a958b77274f1d90e49d9c93
        }
    }
});
<<<<<<< HEAD

copy.addEventListener('click',function(){
    let copied_text = final_response.innerText 
    navigator.clipboard.writeText(copied_text)
    alert('Text Copied!')
})
=======
>>>>>>> b967127a22b952b82a958b77274f1d90e49d9c93
