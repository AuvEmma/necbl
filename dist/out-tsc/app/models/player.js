var Player = (function () {
    function Player(name, grade, position, number, email, height, school, season, region, photo) {
        if (school === void 0) { school = {}; }
        if (season === void 0) { season = {}; }
        if (region === void 0) { region = {}; }
        this.name = name;
        this.grade = grade;
        this.position = position;
        this.number = number;
        this.email = email;
        this.height = height;
        this.school = school;
        this.season = season;
        this.region = region;
        this.photo = photo;
    }
    return Player;
}());
export { Player };
//# sourceMappingURL=../../../../src/app/models/player.js.map