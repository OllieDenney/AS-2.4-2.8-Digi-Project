
function showDiv() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
/*

$(function showDiv() {
    $('#dropdown').addClass('hidden').hide();
    $('#').click(function() {
        if ($('#dropdown').hasClass('hidden')) {
            $('#dropdown').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#dropdown').addClass('hidden').fadeOut(1000);
        }
    });
});


function showDiv(){
  $("#nav-tab").fadeIn();
});
*/
