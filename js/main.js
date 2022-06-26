/*------------------------------------------------------------------------------
-------------------------------------MOBILE TOGGLE START------------------------
------------------------------------------------------------------------------*/

let navbar = document.getElementById("show-hide-menu");
let about = document.getElementById("my-about");
let contact = document.getElementById("my-contact");

function showMenu() {
    navbar.style.right = "0%";
}

function hideMenu() {
    navbar.style.right = "-100%"; 
}
function hideMenuAbout() {
    navbar.style.right = "-100%";
}
function hideMenuContact() {
    navbar.style.right = "-100%";
}


/*------------------------------------------------------------------------------
-------------------------------------STICKY NAVBAR START------------------------
------------------------------------------------------------------------------*/

var stickyNavbar = document.getElementById("sticky-navbar");
var navList = document.getElementById("navList");

window.onscroll = function() {

	if(window.pageYOffset >= navList.offsetTop ) {
		stickyNavbar.classList.add("sticky");
	}
	else {
		stickyNavbar.classList.remove("sticky");

	}
}

