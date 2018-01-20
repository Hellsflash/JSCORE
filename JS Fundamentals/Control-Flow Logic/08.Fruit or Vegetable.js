function fruitOrVeggie(input) {
    if(input=== "banana"||input=== "apple"||input=== "kiwi"||input=== "cherry"||
        input=== "lemon"||input=== "grapes"||input=== "peach"){
        return "fruit";
    }
    if(input==="tomato"||input=== "cucumber"||input=== "pepper"||input=== "onion"||
        input=== "garlic"||input=== "parsley"){
        return "vegetable";
    }
    else {
        return "unknown";
    }
}

console.log(fruitOrVeggie("banana"));