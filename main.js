/*  TODO
. Style settings panel and restart button -> reliant on CSS theme names
. Fix game logic bug causing orange to win on diag 3
. Add warning that changing the theme restarts the game
. Add button to toggle settings panel without saving changes(restarting)
. refactor changeTheme() call and function code
. Palyer turn box is off by a few pixels...
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
