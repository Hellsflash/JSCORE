function split(sting, delimiter) {
    let splited = sting.split(delimiter);
    splited.forEach(e => console.log(e));
}

split('One-Two-Three-Four-Five', '-');
split('http://platform.softuni.bg','.');