/**
 * Created by Jerome on 8/30/16.
 */
var socket = io();
socket.on('connect', function () {
    console.log('***********************************************************');
    console.log('***********************************************************');
    console.log('**********   Connected to socket.io server!    ************');
    console.log('***********************************************************');
    console.log('***********************************************************');
});

socket.on('message', function (message) {
   jQuery('.messages').append('<p class="sent">'+message.text+'</p>');
    console.log('new message:');
    console.log(message.text);
});

// handle
var $form = jQuery('#message-form'),
    $message = $form.find('input[name=message]');
$form.on('submit', function (event) {
    event.preventDefault();
    socket.emit('message', {
        text: $message.val()
    });
    //clear input after sumbit
    $message.val('');
});
