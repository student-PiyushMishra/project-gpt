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

const getResponse = async ()=>{
    let request;
    if (input.value.trim() === "") {
        alert('Empty Prompt! Please fill it to get response.')
    } else {
        request = input.value;
        const genAI = new GoogleGenerativeAI(API_KEY);

        async function run() {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const prompt = request + ' -- This was a statement by a user. you have to reply to it. you have to make your resopnse interactive by integrating some emojis and make it humorous and of 2 -3 lines. If somebody intentionally asks you about you then only answer that you are an AI model made by Piyush Mishra (a student of class 9th). Your name is RudraAI';
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

send.addEventListener('click', getResponse)

window.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        getResponse()
    }
})

copy.addEventListener('click',function(){
    let copied_text = final_response.innerText 
    navigator.clipboard.writeText(copied_text)
    alert('Text Copied!')
})
