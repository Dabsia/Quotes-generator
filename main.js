let apiQuotes = [];
let quote_message = document.getElementById('quote') ;
let author = document.getElementById('author');
let quote_container = document.getElementById('quote-container')

// loader 
let loader = document.getElementById('loader') 

function loading() {
    loader.hidden = false 
    quote_container.hidden = true
}
// Hide loading

function complete() {
    loader.hidden = true 
    quote_container.hidden = false
}


// show new quote


let new_quote = document.getElementById('new_quote');
new_quote.addEventListener('click', newQuote)

function newQuote() {
    loading()
    // Pick a random from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // Check if author field is blank and replace with unknown

    if(!quote.author) {
        author.innerText = 'Unknown'
    }
    else{
        author.innerText = quote.author
    }

    // Check quote length to determine styling
    if (quote.text.length > 80) {
        quote_message.classList.add('long-quote')
    }
    else{
        quote_message.classList.remove('long-quote')
    }
    // Set Quote, Hide Loader
    quote_message.innerText = quote.text
    complete()
}
// Get quotes from API
async function getQuotes() {
    loading()
    const apiUrl = 'https://type.fit/api/quotes'; 
    try{
        const response = await fetch(apiUrl); 
        apiQuotes = await response.json();
        newQuote() 
    }
    catch(error){
        // catch the error
    }
}
// on load

getQuotes()

