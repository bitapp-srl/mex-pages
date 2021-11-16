var loader = function loader() {
    var stop = window.location.hash.replace('#', '');
    $.get('https://mex.bitapp.it/load.php?' + stop, function(response) {
        if (response.active) {
            window.location.href = 'index.html#' + stop;
        }
    });
}

loader();
setInterval(loader, 15 * 1000);