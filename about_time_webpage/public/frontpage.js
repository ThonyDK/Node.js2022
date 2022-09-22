function todaysDate() {
    document.getElementById("date_id").innerText = "You know what time its is!:\n" + new Date().toDateString()
}

todaysDate()