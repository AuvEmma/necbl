var Application = (function () {
    function Application(schoolid, schoolname, managername, captainname, teamname, managerphone, captainphone, description, season, region, players, photo) {
        if (season === void 0) { season = {}; }
        if (region === void 0) { region = {}; }
        if (players === void 0) { players = []; }
        this.schoolid = schoolid;
        this.schoolname = schoolname;
        this.managername = managername;
        this.captainname = captainname;
        this.teamname = teamname;
        this.managerphone = managerphone;
        this.captainphone = captainphone;
        this.description = description;
        this.season = season;
        this.region = region;
        this.players = players;
        this.photo = photo;
    }
    return Application;
}());
export { Application };
//# sourceMappingURL=../../../../src/app/models/application.js.map