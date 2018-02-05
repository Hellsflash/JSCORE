function extractUniqueWord(arr) {
    let uniqueWords = new Set();
    for (let str of arr) {
        let words = str.split(/[^a-zA-Z0-9_]+/).filter(a => a!== '');
        for (let word of words) {
            uniqueWords.add(word.toLowerCase())
        }
    }
    console.log([...uniqueWords.values()].join(', '));
}
extractUniqueWord(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquamut.', 'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 'Vivamus turpis dui, malesuada ac turpis dapibus, congueegestas metus.']);
