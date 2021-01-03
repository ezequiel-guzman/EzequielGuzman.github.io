 
 // this is for the toggle navbar so that once it rexhes 991px it will fold
 function myFunction(){
        
        var navbar = document.getElementById('nav').classList.toggle('show');
    }

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

