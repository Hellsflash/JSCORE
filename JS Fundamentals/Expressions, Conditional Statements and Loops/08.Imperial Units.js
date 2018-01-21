function convert(unit) {
    let foot =Math.floor(Number(unit)/12);
    let rem =Number(unit)-foot*12;

    console.log(`${foot}'-${rem}"`);
}

convert(36);
convert(55);
convert(11);