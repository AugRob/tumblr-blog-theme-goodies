$( document ).ready(function() {
    var currentPath = window.location.pathname.split( '/' );
    if currentPath[1] === 'page' {
        alert('on page');
    }
});
