function rotate(array) {
    let num = Number(array.pop());

    for (let i = 0; i < num; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(' '));
}

rotate([1,2,3,4,2]);
rotate(['Banana', 'Orange', 'Coconut', 'Apple', 15]);