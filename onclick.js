$(document).ready(function() {
    var message = $('<span>This must be inserted after we click Guess it</span>');
    var messageBlank = $('<span>asaa</span>');
    $('button').on('click', function() {
        $('#resultDaily').append(message);
    });
    $('#resultDaily').on('click', function() {
        $('#resultDaily > span').remove();
    });
});


