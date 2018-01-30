function validate(str) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    if(regex.test(str)){
        console.log('valid');
    }else{
        console.log('invalid');
    }
}

validate('valid@email.bg');
validate('invalid@emai1.bg');