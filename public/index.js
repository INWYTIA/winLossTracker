function sendFormData() {
    let nameEl = document.querySelector("#c-name");

    let competition = {
        name: nameEl
    }
      // also send to server
    fetch("/api/competition", {
        method: "POST",
        body: JSON.stringify(competition),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    .then(response => {    
        return response.json();
    })
    .then(data => {
        // clear form
        nameEl.value = "";
        amountEl.value = "";
    })
    .catch(err => {
        console.log(err)

        // clear form
        nameEl.value = "";
        amountEl.value = "";
    });
};

document.querySelector("#submit").onclick = function() {
    sendFormData();
};