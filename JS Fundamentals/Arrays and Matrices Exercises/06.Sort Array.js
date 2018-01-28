function sorting(array) {
    let sorted =array.sort().sort((a,b)=>a.length>b.length);

    console.log(sorted.join('\n'));
}

sorting(['alpha','beta','gamma']);
sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sorting(['test', 'Deny', 'omen', 'Default']);