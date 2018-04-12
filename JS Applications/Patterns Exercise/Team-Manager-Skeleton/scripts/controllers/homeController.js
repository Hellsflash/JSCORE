let homeController = (() => {
    function homePage(ctx) {
        ctx.loggedIn = auth.isAuth();
        ctx.username = auth.getUserName();
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial('./templates/home/home.hbs');
        });
    }

    function aboutPage(ctx) {
        ctx.loggedIn = auth.isAuth();
        ctx.username = auth.getUserName();
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    }

    return {
        homePage,
        aboutPage
    }
})();