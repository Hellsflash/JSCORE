function filterUsername(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split('@');
        let name = tokens[1].split('.');
        let initials = tokens[0] + '.'
        for (let init of name) {
            initials+=init[0];
        }
        result.push(initials);
    }
    console.log(result.join(', '));
}

filterUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])