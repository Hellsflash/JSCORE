function sumByTown(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]+=Number(arr[i+1]);
        } else{
            obj[arr[i]]=Number(arr[i+1]);
        }
    }
    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
sumByTown(['Sofia' , '20' , 'Varna' , '3' , 'sofia' , '5' , 'varna' , '4']);