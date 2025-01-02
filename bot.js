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
            const prompt = request + ' . make it humorous!';
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            console.log('Result:', result);
            console.log('Text:', text);
            console.log('Copy Element:', copy);

            copy.style.display = 'flex';
            final_response.innerHTML = text;
        }
        run()
    }
})

window.addEventListener("keyup",async function(e){
    if(e.key == "enter"){
        let request;
    if (input.value.trim() === "") {
        alert('Empty Prompt! Please fill it to get response.')
    } else {
        request = input.value;
        const genAI = new GoogleGenerativeAI(API_KEY);

        async function run() {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = request + ' . make it humorous!';
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            console.log('Result:', result);
            console.log('Text:', text);
            console.log('Copy Element:', copy);

            copy.style.display = 'flex';
            final_response.innerHTML = text;
        }
        run()
    }
    }
})

copy.addEventListener('click',function(){
    let copied_text = final_response.innerText 
    navigator.clipboard.writeText(copied_text)
    alert('Text Copied!')
})
