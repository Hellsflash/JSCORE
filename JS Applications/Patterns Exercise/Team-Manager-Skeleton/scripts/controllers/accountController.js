let accountController = (()=>{

    function loginPage(ctx) {
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            loginForm: './templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    }

    function registerPage(ctx) {
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            registerForm: './templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    }

    function loginUser(ctx) {
        const username = ctx.params.username;
        const password = ctx.params.password;

        auth.login(username, password).then(function (userData) {
            auth.showInfo('You have logged in successfully!');
            auth.saveSession(userData);
            ctx.redirect('#/home');
        });
    }

    function registerUser(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let repeatPass = ctx.params.repeatPassword;

        if (password === repeatPass) {
            auth.register(username, password).then(function (userData) {
                auth.showInfo('You have registered successfully!');
                auth.saveSession(userData);
                ctx.redirect('#/home')
            });
        }
    }
    return{
        loginPage,
        loginUser,
        registerPage,
        registerUser
    }
})();