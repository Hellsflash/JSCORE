function bigestSubsequence(input) {
    input = input.map(Number);

    let array = [];
    let biggest;

    input.forEach(function (e) {
        if (biggest != undefined) {
            if (e >= biggest) {
                array.push(e);
                biggest = e;
            }
        } else {
            biggest = e;
            array.push(e);
        }
    });

    array.forEach(e => console.log(e));
}

bigestSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
bigestSubsequence([1,2,3,4]);
bigestSubsequence([20, 3, 2, 15, 6, 1]);
