
function showDiv() {
  var x = document.getElementById("dropdown");
  var y = document.getElementById("dropdown-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.marginTop = "2.9%";
  }
  else {
    x.style.display = "none";
    y.style.marginTop = "0%";
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
/*
document.querySelector(document).ready(function(){
    document.querySelector('.up-down').mouseover(function(){
        document.querySelector('.default').stop().animate({
            height: 0
        }, 200);
    }).mouseout(function(){
        document.querySelector('.default').stop().animate({
            height: 200
        }, 200)
    })

});

*/
