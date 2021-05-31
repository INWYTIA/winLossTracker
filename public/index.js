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
      li.setAttribute("data-id", `${competition._id}`);
      li.className = "compCho";
      li.innerHTML = `${competition.name}`;
      list.appendChild(li);
    });
}

function sendFormData() {
    let nameEl = document.querySelector("#c-name");

    let competition = {
        name: nameEl.value
    }

    console.log(competition);

      //send to server
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
        console.log(data);
        competitions.unshift(data);
        // clear form
        nameEl.value = "";
        populateList();
    })
    .catch(err => {
        console.log(err)

        // clear form
        nameEl.value = "";
    });
};

$(function(){
  $("#submit").on("click", function(event) {
    sendFormData();
  })
});
