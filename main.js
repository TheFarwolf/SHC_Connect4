/*  TODO
. Add settings button
. Add 2 themes(pieces, names)
. Style settings and restart button
*/


$(document).ready(function() {
    const connect4 = new Connect4('#connect4');
    connect4.onPlayerMove = function() {
        $('#player').text(connect4.player);
    }
    $('#restart').click(function() {
        connect4.restart();                    
    }) 
})