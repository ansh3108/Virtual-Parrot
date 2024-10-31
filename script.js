function squawk() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json)
    .then(data => {
        document.getElementById('quote').textContent = data.textContent;

        const audio=new Audio('squawk.mp3');
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').textContent = "Couldn't fetch a quote at this moment! try again later"
    })
}