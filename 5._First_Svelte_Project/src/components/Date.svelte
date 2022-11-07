<script>
    let date = new Date(); 
    let dates = [date];

    function updateDate() {
        date = new Date();
        //dates.push(date); 
        //dates = dates; 
        dates = [...dates, date] // dette er det samme som linje 7-8
    }

</script>

<div>Current date: {date}</div>
<button  on:click={updateDate}>Update Date</button>

<div>{JSON.stringify(dates)}</div>