class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(id) {
        if (id.length === 6) {
            this._clientId = id;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    get clientId() {
        return this._clientId;
    }

    set email(mail) {
        let regex = /[a-zA-Z]+@[a-zA_Z.]+/g;
        if (regex.test(mail)) {
            this._email = mail;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }

    get email() {
        return this._email;
    }

    set firstName(fn) {
        let regex = /^[a-zA-Z]{3,20}$/g;
        if (fn.length < 3 || fn.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (fn.match(regex)) {
            this._firstName = fn;

        } else {
            throw new TypeError('First name must contain only Latin characters');
        }
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(ln) {
        let regex = /^[a-zA-Z]{3,20}$/g;
        if (ln.length < 3 || ln.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if (ln.match(regex)) {
            this._lastName = ln;

        } else {
            throw new TypeError('Last name must contain only Latin characters');
        }
    }

    get lastName() {
        return this._lastName;
    }
}
