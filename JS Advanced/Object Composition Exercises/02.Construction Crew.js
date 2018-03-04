function solve(obj) {
    let alcoholAmount = 0.1;
    if (obj.handsShaking === true) {
        obj.bloodAlcoholLevel += (Number(obj.weight) * Number(obj.experience) * alcoholAmount);
        obj.handsShaking = false;
        return obj;
    } else {
        return obj;
    }
}

console.log(solve({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));
console.log(solve({
        weight: 120,
        experience: 20,
        bloodAlcoholLevel: 200,
        handsShaking: true
    }
));
console.log(solve({
        weight: 95,
        experience: 3,
        bloodAlcoholLevel: 0,
        handsShaking: false
    }
));
