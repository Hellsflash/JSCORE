class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this.value = $(this.elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    get elements() {
        return this._elements;
    }

    set value(val) {
        this._value = val;
        for (let elem of this._elements) {
            $(elem).val(val);
        }
    }

    get value() {
        return this._value;
    }

    onInput() {
        this.elements.on('input', (event) => {
            let text = $(event.target).val();
            this.value = text;
        });
    }

    isValid(){
        if(this._value.match(this._invalidSymbols)){
            return false;
        }
        return true;
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () {
    console.log(textbox.value);
});
