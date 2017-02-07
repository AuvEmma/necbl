var Application = (function () {
    function Application(schoolid, schoolname, managername, captainname, teamname, managerphone, captainphone, description, seasonid, regionid, players, photo) {
        if (players === void 0) { players = []; }
        this.schoolid = schoolid;
        this.schoolname = schoolname;
        this.managername = managername;
        this.captainname = captainname;
        this.teamname = teamname;
        this.managerphone = managerphone;
        this.captainphone = captainphone;
        this.description = description;
        this.seasonid = seasonid;
        this.regionid = regionid;
        this.players = players;
        this.photo = photo;
    }
    return Application;
}());
export { Application };
//# sourceMappingURL=../../../../src/app/models/application.js.map