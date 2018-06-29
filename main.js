/*  TODO
. Fix game logic bug causing orange to win on diag 3
. refactor changeTheme() call and function code
. Player turn box is off by a few pixels...
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
        var radioValue = $("input[name='theme']:checked").val();
        var theme = {
            color1: '',
            color2: ''
        }
        if (radioValue === 'Classic') {
            theme.color1 = 'BLACK';
            theme.color2 = 'RED';
        } else if (radioValue === 'Bright') {
            theme.color1 = 'ORANGE';
            theme.color2 = 'BLUE';
        } else {
            theme.color1 = 'GREEN';
            theme.color2 = 'BROWN';
        }
        connect4.changeTheme(theme);
        connect4.restart();
        $('#settingsPanel').toggle(300);
    })
    $('#closeSettings').click(function () {
        $('#settingsPanel').toggle(300);
    })
})
