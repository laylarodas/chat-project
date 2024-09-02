

const socket = io.connect('http://192.168.1.46:6677', { 'forceNew': true });


socket.on('messages', function (data) {
    console.log(data)
    render(data);
})

function render(data) {
    const html =  data.map((message, index) => {
        return (`
            <div key={index} class='message'>
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>
            </div>
        `)
    }).join(' ');

    
    const div_msgs = document.getElementById('messages')
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e){
    const message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    }

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message);
    return false;
}