/*------------------------------------------------------------------------------
-------------------------------------MOBILE TOGGLE START------------------------
------------------------------------------------------------------------------*/

let navbar = document.getElementById("show-hide-menu");

function showMenu() {
    navbar.style.right = "0%";
}

function hideMenu() {
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

