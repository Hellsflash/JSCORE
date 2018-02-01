function captureNumbers(array) {
    let text =array.join(' ');
    let regex =/\d+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(' '));
}
captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);
captureNumbers(['123a456', '789b987', '654c321', '0']);
captureNumbers(['Let’s go11!!!11!' , 'Okey!1!']);