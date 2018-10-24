function openNav() {
    document.querySelector(".sidenav").classList.add("sidenav-open")
    document.querySelector(".main").classList.add("sidenav-open")
}

function closeNav() {
    document.querySelector(".sidenav").classList.remove("sidenav-open")
    document.querySelector(".main").classList.remove("sidenav-open")
}

// Will this work to collapse sidebar to glyphicons
$(document).ready(function () {

    $('#mysidenav').on('click', function () {
        $('#mysidenav').toggleClass('active');
    });

});