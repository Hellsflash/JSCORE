function stars(num) {
       function print(n= num) {
           console.log('*'.repeat(n));
       }

    for (let i = 1; i <= num; i++) {
        print(i);
    }
    for (let i = num-1; i >0; i--) {
        print(i);
    }
}

stars(1);
stars(2);
stars(5);