function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let interval = null;

    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');


    startBtn.on('click', function () {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(updateTime, 1000);
    });

    stopBtn.on('click', function () {
        clearInterval(interval);
        interval = null;
    });

    function updateTime() {
        let hoursVal = hours.text();
        let minutesVal = minutes.text();
        let secondsVal = seconds.text();

        seconds.text(`0${(+secondsVal + 1)}`.slice(-2));
        if (secondsVal >= 59) {
            seconds.text('00');
            minutes.text(`0${(+minutesVal + 1)}`.slice(-2));
            if (minutesVal >= 59) {
                minutes.text('00');
                hours.text(`0${(+hoursVal + 1)}`.slice(-2));
            }
        }
    }
}
