function solve(array) {
    let commandExecutor = (function () {
        let result = {};

        function create(arr) {
            if (arr.length > 2) {
                result[arr[0]] = Object.create(result[arr[2]]);
            } else {
                result[arr[0]] = {};
            }
        }

        function set(arr) {
            result[arr[0]][arr[1]] = arr[2];
        }

        function print(arr) {
            let store = [];
            for (let key in result[arr[0]]) {
                store.push(key + ':' + result[arr[0]][key]);
            }
            console.log(store.join(', '));
        }

        return {create, set, print}
    }());

    for (let str of array) {
        let args = str.split(' ');
        let command = args.shift();
        commandExecutor[command](args);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);