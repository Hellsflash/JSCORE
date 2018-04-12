$(() => {
    const app = Sammy('#main', function () {
        let appCtx = this;
        appCtx.use('Handlebars', 'hbs');

        appCtx.get('#/home', homeController.homePage);

        appCtx.get('#/about', homeController.aboutPage);

        appCtx.get('#/catalog', teamController.loadCatalog);
        appCtx.get('#/catalog/:id', teamController.loadTeamDetails);
        appCtx.get('#/catalog/:id', teamController.joinTeam);

        appCtx.get('#/login', accountController.loginPage);
        appCtx.post('#/login', accountController.loginUser);

        appCtx.get('#/register', accountController.registerPage);
        appCtx.post('#/register', accountController.registerUser);

    });

    app.run();
});



