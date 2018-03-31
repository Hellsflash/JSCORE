function getInfo() {
    const URL = 'https://judgetests.firebaseio.com/businfo/';

    let stopName = $('#stopName');
    stopName.text('');
    let busses =$('#buses').empty();
    busses.empty();
    let stopId = $('#stopId').val();
    $.ajax({
        url:URL + stopId +'.json',
        method :'GET',
        success: onSuccess,
        error :  onError
        });

   function onSuccess(res) {
       stopName.append(res.name);

       for (let bus in res.buses) {
           busses.append($(`<li>Bus ${bus} arrives in ${res.buses[bus]} minutes</li>`));
       }
   }
    function onError(err) {
       stopName.append('Error');
    }

}