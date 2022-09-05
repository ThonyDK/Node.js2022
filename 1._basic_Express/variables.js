
'use strict'; //Betyder at ved brug at strict mode så er der ting man ikke må, for så kan man få errors. 

//Never do this!
//totalGlobalVariable = 'Malthe';
//var globalVariable = 'Malthe';

//Variable declaration
//Const skal instantieres og må ikke stå som const me; 
/*
const me = {
    name: "Anders"
/*
};
const hobbies = [];
const hobbies.push("Music");
me.hobbies = hobbies;
console.log(me);
{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}*/

/*
{
    var someValue = true;
}
//Brug ikke var da man for dårlig response.
//Løsningen er at benytte let i stedet. 
for (var i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i);
    });
} */
