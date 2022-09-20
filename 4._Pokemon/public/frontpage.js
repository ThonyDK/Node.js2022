
fetch("/pokemon") // Fetcher en url over fra app.js
.then(response => response.json())
.then(result => console.log(result)); 
    