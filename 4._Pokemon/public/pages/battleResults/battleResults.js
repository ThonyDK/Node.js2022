fetch("/api/battleresults/winandlosses")
.then(response => response.json())
.then(results => {
    const winsP = document.getElementById("wins");
    const lossesP = document.getElementById("losses");

    winsP.innerText = results.wins;
    lossesP.innerText = results.lossesP;
})