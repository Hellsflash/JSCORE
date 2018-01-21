function degree(grad) {
    let diffDeg = 400 / 360;
    let convert = grad / diffDeg;
    convert = convert % 360;

    if (convert < 0) {
        convert += 360;
    }
    console.log(convert);
}

degree(100);
degree(400);
degree(850);
degree(-50);