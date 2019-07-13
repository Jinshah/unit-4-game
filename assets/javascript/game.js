$(document).ready(function() {
  var winner = 0;
  var looser = 0;
  var players = [
    (rey = {
      name: "character1",
      healthPoints: 120,
      initialAttackPower: 8,
      attackPower: 8,
      counterAttackPower: 2,
      imageName: "ch-1.jpg"
    }),
    (luke = {
      name: "character2",
      healthPoints: 100,
      initialAttackPower: 9,
      attackPower: 9,
      counterAttackPower: 5,
      imageName: "ch-2.jpg"
    }),
    (maul = {
      name: "character3",
      healthPoints: 150,
      initialAttackPower: 2,
      attackPower: 2,
      counterAttackPower: 20,
      imageName: "ch-3.jpeg"
    }),
    (vader = {
      name: "character4",
      healthPoints: 180,
      initialAttackPower: 1,
      attackPower: 1,
      counterAttackPower: 25,
      imageName: "ch-4.jpg"
    })
  ];

  for (var i = 0; i < players.length; i++) {
    var charname = players[i].name;
    var url = window.location.href;
    $("#enemies ul").append(
      "<li><div><h4>" +
        players[i].name +
        "</h4><img src='" +
        url +
        "assets/images/" +
        players[i].imageName +
        "'class='img-fluid'/>" +
        "<p>" +
        players[i].healthPoints +
        "</p><h6>" +
        players[i].counterAttackPower +
        "</h6><h5>" +
        players[i].initialAttackPower +
        "</h5><h3>" +
        players[i].attackPower +
        "</h3></div></li>"
    );
  }

  $("#enemies li").on("click", function() {
    $(this).appendTo("#selectedchar ul");
    $("#enemies li").addClass("newenemies");
  });
  $(document).on("click", ".newenemies", function() {
    $(this).appendTo("#defenderchar ul");
  });
  var clicks = 0;
  $("#attack-button").on("click", function() {
    var a = $("#selectedchar li p").text();
    var b = $("#defenderchar li p").text();
    var c = $("#defenderchar li h6").text();
    var d = $("#selectedchar li h5").text();
    var e = $("#selectedchar li h3").text();
    if (a >= 0 && b >= 0) {
      if (clicks == 0) {
        a = parseInt(a) - parseInt(c);
        b = parseInt(b) - parseInt(d);
      } else {
        var f = parseInt(d) + parseInt(e);
        console.log(f);
        a = parseInt(a) - parseInt(c);
        b = parseInt(b) - parseInt(f);
      }
      clicks++;
      $("#selectedchar li h3").text(f);
      $("#selectedchar li p").text(a);
      $("#defenderchar li p").text(b);

      //  $("#info").text("Your attack power is"+  +"Your defender attack power is"+ )
    } else if (a < 0) {
      $("#info").text("You Loose! Play Again");
    } else if (b < 0) {
      $("#defenderchar li").css("display", "none");
      $("#info").text("Select another Enemy ");
      $("#info").append(players.indexOf["character1"]);
      //    imageList.indexOf(200);
    }
  });
  $("#play-again").on("click", function() {
    location.reload(true);
  });
});
