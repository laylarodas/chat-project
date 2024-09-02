const socket = io.connect('http://192.168.1.46:6677', { 'forceNew': true });


socket.on('messages', function (data) {
    console.log(data)
    render(data);
})

function render(data) {
    const html =  data.map((message, index) => {
        return (`
            <div class='message'>
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>
            </div>
        `)
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}