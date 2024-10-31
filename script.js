let quotes = [];

fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        quotes=data;
    })
    .catch(error =>{
        console.error('Cant fetch quotes:', error);
        document.getElementById('quote').textContent = "Couldn't load quotes.";
});

function squawk(){
    if(quotes.length>0){
        const random= quotes[Math.floor(Math.random()* quotes.length)].text; //get quote's text from quotes array
        document.getElementById('quote').textContent=randomQuote;
        const audio=new Audio('squawk.mp3');
        audio.play();
    } else{
        document.getElementById('quote').textContent="Crunching more quotes!!"
    }
    
}