function calcBMI(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calcBMI(weight, height),
        status: getStatus(calcBMI(weight, height))
    };
    if (obj.status === 'obese') {
        obj.recommendation = 'admission required';
    }
    return obj;

    function calcBMI(w, h) {
        return Math.round(w / Math.pow((h / 100), 2));
    }

    function getStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25 && bmi >= 18.5) {
            return 'normal';
        } else if (bmi < 30 && bmi >= 25) {
            return 'overweight';
        } else if (bmi >= 30) {
            return 'obese';
        }
    }
}

console.log(calcBMI('Peter', 29, 75, 182));
console.log(calcBMI('Honey Boo Boo', 9, 57, 137));