let teamController = (() => {
    function loadCatalog(ctx) {
        ctx.loggedIn = auth.isAuth();
        ctx.username = auth.getUserName();
        teamsService.loadTeams().then((userData) => {
            ctx.teams = userData;
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                team: "./templates/catalog/team.hbs"
            }).then(function () {
                this.partial('./templates/catalog/teamCatalog.hbs');
            });
        });
    }

    function loadTeamDetails(ctx) {
        let teamId = ctx.params.id.substr(1);
        teamsService.loadTeamDetails(teamId).then((details) => {
            ctx.loggedIn = auth.isAuth();
            ctx.username = auth.getUserName();
            ctx.name = details.name;
            ctx.comment = details.comment;
            ctx.teamId = details._id;
            ctx.members = details.members == null ? null : JSON.parse(details.members).map(e => {
                return {
                    username: e
                }
            });
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                team: "./templates/catalog/team.hbs",
                teamMember: "./templates/catalog/teamMember.hbs",
                teamControls: "./templates/catalog/teamControls.hbs"
            }).then(function () {
                this.partial('./templates/catalog/details.hbs');
            });
        });
    }

    function joinTeam(ctx) {
        let teamId = ctx.params.id.substr(1);
        teamsService.jo(teamId).then((details) => {
            ctx.loggedIn = auth.isAuth();
            ctx.username = auth.getUserName();
            ctx.isAuthor = details._acl.creator == auth.getUserId();
            ctx.comment = details.comment;
            ctx.teamId = details._id;
            ctx.members = details.members == null ? null : JSON.parse(details.members).map(username => {
                if(username==auth.getUserName()){
                    ctx.isOnTeam =true
                }
                return {
                    username
                }
            });
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                team: "./templates/catalog/team.hbs",
                teamMember: "./templates/catalog/teamMember.hbs",
                teamControls: "./templates/catalog/teamControls.hbs"
            }).then(function () {
                this.partial('./templates/catalog/details.hbs');
            });
        });
    }
    return {
        loadCatalog,
        loadTeamDetails,
        joinTeam
    }
})();