function attachEvents() {
    $('#refresh').on('click', attachRefresh);
    $('#submit').on('click', attachSubmit);
}

function attachSubmit() {
    let message = {
        'author': $('#author').val(),
        'content': $('#content').val(),
        'timestamp': Date.now()
    };

    $.ajax({
        url: 'https://messenger-38234.firebaseio.com/messenger/.json',
        method: 'POST',
        data: JSON.stringify(message),
        success:attachRefresh()
    });
}

function attachRefresh() {
    $.get('https://messenger-38234.firebaseio.com/messenger/.json').then(displayMessages);
}

function displayMessages(messages) {
    let message =$('#messages');
    let str ='';
    for (let key in messages) {
        str+=`${messages[key]['author']}: ${messages[key]['content']}\n`;
    }
    message.text(str);
}