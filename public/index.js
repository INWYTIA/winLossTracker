$(function(){
  $("#c-submit").on("click", function(event) {

    let newComp = {
      name: $("#c-name").val().trim()
    };

    $.ajax("/api/competition", {
      method: "POST",
      data: JSON.stringify(newComp),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(function() {
      location.reload();
    });
  })

  $(".compCho").on("click", function(event) {

    let compCho = {
      id: $(this).attr("data-id")
    };

    $.ajax("/api/competition/detail", {
      method: "GET",
      data: compCho,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
  })
});
