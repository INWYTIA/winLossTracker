let competitions = [];

fetch("/api/competition")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    competitions = data;

    populateList();
  });

function populateList() {
    let list = document.querySelector("#competitions");
    list.innerHTML = "";
  
    competitions.forEach(competition => {
      let li = document.createElement("li");
      li.innerHTML = `<li>${competition.name}</li>`;
      list.appendChild(li);
    });
}

function sendFormData() {
    let nameEl = document.querySelector("#c-name");

    let competition = {
        name: nameEl.value
    }

    console.log(competition);

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
    })
    .catch(err => {
        console.log(err)

        // clear form
        nameEl.value = "";
    });
};

document.querySelector("#submit").onclick = function() {
    sendFormData();
};