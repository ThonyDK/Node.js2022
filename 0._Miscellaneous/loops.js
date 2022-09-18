const barbieMovies = [
    { name: "Swan lake", year: 2001},
    { name: "Princess and the pauper", year: 2008},
    { name: "Fairless", year: 2014}
]; 
//task use map belov to give all the movies a 10 rating (out of 10 of course)

const ratedBarbieMovies = barbieMovies.map((movie) => { 
    movie.rating = 10;
    movie.description = "Disney pictures"
    return movie;
});

// Task give me movies more recent than 2005
const recentBarbieMovies = barbieMovies.filter(movie => movie.year > 2005);
    console.log(recentBarbieMovies);

/*Loop advice
Only use for loops if you are doing "finger counting"
I.E counting to a number.

Dont use enchanced for loops

only use foreach if you are doing something and dont vcare about the result
I.E populating the DOM with elements.

always prefer functional loops methoes such ass:
Map filter, reduce

Map for mapping 1:1
Filter for the array
reduce to reduce the content of the array(more advanced, not required for this semester but we are welcome to use)
*/