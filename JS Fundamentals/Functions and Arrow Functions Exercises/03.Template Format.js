function format(array) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for (let i = 1; i <= array.length; i+=2) {
        console.log('  <question>');

        let answer = array[i];
        let question = array[i-1];

        console.log(`    ${question}`);
        console.log('  </question>');
        console.log('  <answer>');
        console.log(`    ${answer}`);
        console.log('  </answer>');
    }
    console.log('</quiz>');
}

format(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
format(["Dry ice is a frozen form of which gas?","Carbon Dioxide","What is the brightest star in the night sky?","Sirius"]);