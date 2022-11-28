var toggle = 0;
var navGlobal;
function openNav(navnum) {
  navGlobal = navnum;
  navDecide(navnum);
  document.getElementById("myNav").style.display = "block";
  $("#myNav").animate(
    {
      scrollTop: 0,
    },
    0
  );
  $("body").css("overflow-y", "hidden");
}
function closeNav() {
  document.getElementById("myNav").style.display = "none";
  $("body").css("overflow-y", "auto");
}

$("#navNxt").click(function () {
  navGlobal = (navGlobal + 1) % 7;
  navDecide(navGlobal);
  $("#myNav").animate(
    {
      scrollTop: 0,
    },
    0
  );
});
$("#navPrv").click(function () {
  navGlobal = (navGlobal - 1) % 7;
  if (navGlobal < 0) {
    navGlobal = navGlobal + 7;
  }
  navDecide(navGlobal);
  $("#myNav").animate(
    {
      scrollTop: 0,
    },
    0
  );
});

function enablescroll() {
  $("#menu_options").attr("src", "/saitejagarlapati.github.io/img/menu.png");
  $("nav").removeClass("creamBackground");
  $("nav").addClass("blackBackground");
  $(".navbar-brand").css("opacity", "1");
  $(".collapse").collapse("hide");
  $("body").css("overflow-y", "auto");
  toggle = toggle + 1;
}
