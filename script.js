let quotes=[];

fetch('quotes.json')
    .then(response => {
        if(!response.ok){
            throw new Error('Network seemed to bug out')
        }
        return response.json();
    })
    .then(data => {
        quotes=data;
    })
    .catch(error => {
        console.error("Couldn't load quotes: ",error)
        document.getElementById('quote').textContent="Couldn't load quotes!"
    });

    function squawk() {
        if (quotes.length > 0) {
            const random= quotes[Math.floor(Math.random()*quotes.length)].text;
            document.getElementById('quote').textContent=random;
            const audio=new Audio('squawk.mp3');
            audio.play();
        } else {
            document.getElementById('quote').textContent="Crunching quotes!!"
        }
    }