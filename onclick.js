$(document).ready(function() {
    var message = $('<span>This must be inserted after we click Guess it</span>');
    $('button').on('click', function() {
    $('#resultDaily').append(message);
    });
});


