function distance(input) {
    let distOne = (input[0] / 3.6) * input[2];
    let distTwo = (input[1] / 3.6) * input[2];
    let delta = Math.abs(distOne - distTwo);

    console.log(delta)
}

distance([0,60,3600]);
distance([11, 10, 120]);
distance([5, -5, 40]);