var Player = (function () {
    function Player(name, grade, position, number, email, height, school, season, region, seasonshistory, regionshistory, gameshistory, schoolhistory, photo) {
        if (school === void 0) { school = {}; }
        if (season === void 0) { season = {}; }
        if (region === void 0) { region = {}; }
        if (seasonshistory === void 0) { seasonshistory = []; }
        if (regionshistory === void 0) { regionshistory = []; }
        if (gameshistory === void 0) { gameshistory = []; }
        if (schoolhistory === void 0) { schoolhistory = []; }
        this.name = name;
        this.grade = grade;
        this.position = position;
        this.number = number;
        this.email = email;
        this.height = height;
        this.school = school;
        this.season = season;
        this.region = region;
        this.seasonshistory = seasonshistory;
        this.regionshistory = regionshistory;
        this.gameshistory = gameshistory;
        this.schoolhistory = schoolhistory;
        this.photo = photo;
    }
    return Player;
}());
export { Player };
//# sourceMappingURL=../../../../src/app/models/player.js.map