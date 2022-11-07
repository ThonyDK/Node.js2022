function somethingGoodSomthingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error("bad")
                resolve("good")
            }catch (errorMessage) {
                reject("bad");
            }
        }, 3000);       
    });
}

//somethingGoodSomthingBad() 
//.then(shouldBeGood => console.log(shouldBeGood));
//.catch(shouldBeBad => console.log(shouldBeBad));

//const shouldBeGood = await somethingGoodSomthingBad(); 

async function asyncAwaitExample() {
    try{
    const shouldBeGood = await somethingGoodSomthingBad();
    console.log(shouldBeGood)
    } catch (errorMessage) {
        console.log(errorMessage); 
    }
}
asyncAwaitExample(); 


function howAwsomeAmI(name) {
    return new Promise((resolve, reject) => {
        resolve(`${name} is very awsome`)
    })
}

howAwsomeAmI("Thony")
.then(answer => console.log(answer));