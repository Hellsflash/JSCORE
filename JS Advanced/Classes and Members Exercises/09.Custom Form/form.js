let result = (function() {
    class Textbox {
        constructor(selector,regex){
            this._elements = $(selector);
            this.value = $(this.elements[0]).val();
            this._invalidSymbols = regex;
            this.onInput();
        }

        onInput(){
            let that = this;
            this.elements.on('input', function(){
                let text = $(this).val();
                that.value = text;
            });
        }

        get value(){
            return this._value;
        }

        set value(value){
            this._value = value;
            for (let elem of this._elements) {
                $(elem).val(value);
            }
        }

        get elements(){
            return this._elements;
        }

        isValid(){
            if(this._value.match(this._invalidSymbols)){
                return false;
            }

            return true;
        }
    }

    class Form {
        constructor(){
            this._element = $('<div>').addClass('form');
            this.textbox = arguments;
        }

        get textbox(){
            return this._textboxes;
        }

        set textbox(args){
            for (let argument of args) {
                if(!argument instanceof Textbox){
                    throw new Error('The given parameter is not a textbox!');
                }
            }

            this._textboxes = args;
            for (let textbox of this._textboxes) {
                for (let el of textbox._elements) {
                    this._element.append($(el));
                }
            }
        }

        submit(){
            let allValid = true;
            for (let textbox of this._textboxes) {
                if(textbox.isValid()){
                    for (let el of textbox._elements) {
                        $(el).css('border','2px solid green');
                    }
                }
                else{
                    for (let el of textbox._elements) {
                        $(el).css('border','2px solid red');
                    }
                    allValid = false;
                }
            }

            return allValid;
        }

        attach(selector){
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");