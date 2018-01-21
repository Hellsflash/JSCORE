function triangle(number) {

    for (let i = 1; i <= number; i++) {
        let line ="";
        for (let j = 1; j <= i; j++) {
            line+="$";
        }
        console.log(line);
    }
}

triangle(3);
triangle(2);
triangle(4);