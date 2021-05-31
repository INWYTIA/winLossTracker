$(function(){
  $("#submit").on("click", function(event) {

    let newComp = {
      name: $("#c-name").val().trim()
    };

    $.ajax("/api/competition", {
      type: "POST",
      data: JSON.stringify(newComp),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(function() {
      location.reload();
    });
  })
});
