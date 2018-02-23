function attachEvents() {
    $('.button').on('click',function () {
        let target = $(this);
        $('.selected').removeClass('selected');
        target.addClass('selected');
    });
}