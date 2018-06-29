/*  TODO
. QA - Some win states appear to be bugged.
*/
$(document).ready(function () {
    const connect4 = new Connect4('#connect4');
    connect4.onPlayerMove = function () {
        $('#player').text(connect4.player);
    }
    $('#restart').click(function () {
        connect4.restart();
    })
    $('#settingsButton').click(function () {
        $('#settingsPanel').toggle(300);
    })  
    $('#applySettings').click(function () {
        var theme = $("input[name='theme']:checked").val();
        connect4.changeTheme(theme.split('.'));
        connect4.restart();
        $('#settingsPanel').toggle(300);
    })   
    $('#closeSettings').click(function () {
        $('#settingsPanel').toggle(300);
    })
})
