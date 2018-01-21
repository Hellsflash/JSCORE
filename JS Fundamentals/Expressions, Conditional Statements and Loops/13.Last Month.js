function lastMonth([day,month,year]) {
    let lastM =new Date(year,month-1,0);

    console.log(lastM.getDate());
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);