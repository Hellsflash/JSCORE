function attachEvents(){
    $('#btnLoadTowns').on('click',fillTownList);

    let source = $('#towns-template').html();
    let template = Handlebars.compile(source);
    let result= $('#root');

    function fillTownList(){
        result.empty();
        let allTowns = $('#towns').val().split(', ');
        for (let town of allTowns){
            let liTown = template( { townName: town} );
            result.append(liTown);
        }
    }
}