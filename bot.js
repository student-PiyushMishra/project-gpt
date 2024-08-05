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
        }
        run()
    }
})

copy.addEventListener('click',function(){
    let copied_text = final_response.innerText 
    navigator.clipboard.writeText(copied_text)
    alert('Text Copied!')
})