/**
 * Created by Jerome on 8/30/16.
 */
var name = getQueryVariable('name') ||"Someone",
    room = getQueryVariable('room')|| "Main Room",
    socket = io();

console.log(name + ' wants to join ' + room + '.....');

socket.on('connect', function () {
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('**********   Connected to socket.io server!    ************');
    console.log('***********************************************************');
    console.log('***********************************************************');
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp),
        $message = jQuery('.messages');
    $message.append('<p><strong>' + message.name + ' - ' + momentTimestamp.local()
                                                                          .format('h:mm a') + ' => </strong>');
    $message.append(message.text + '</p>');
});

// handle
var $form = jQuery('#message-form'),
    $message = $form.find('input[name=message]');
$form.on('submit', function (event) {
    event.preventDefault();
    socket.emit('message', {
        name: name,
        text: $message.val()
    });
    //clear input after sumbit
    $message.val('');
});
