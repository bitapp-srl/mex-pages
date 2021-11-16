var loader = function loader() {
    var stop = window.location.hash.replace('#', '');
    $.get('https://mex.bitapp.it/load.php?' + stop, function(response) {
        if (!response.active) {
            window.location.href = 'cortesia.html#' + stop;
        }
    
        if (!response.data) {
            $('#time_it').html('-- min');
            $('#time_en').html('-- min');
            return;
        }

        var time = new Date(response.data.time);
        
        var now = new Date();
        var diffMs = (time - now); // milliseconds between now & Christmas
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        
        $('#time_it').html(diffMins + ' min');
        $('#time_en').html(diffMins + ' min');
        return;
    }).fail(function() {
        window.location.href = 'cortesia.html#' + stop;
    });
}

loader();
setInterval(loader, 15 * 1000);