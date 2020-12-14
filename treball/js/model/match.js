export { Match }
class Match {
    constructor(home, away, round = 0) {
        this.home = home;
        this.away = away;
        this.winner = null;
        this.loser = null;
        this.score = null;
        this.round = round;
    }

    play() {
        let hScore = ~~(Math.random() * 5);
        let aScore = ~~(Math.random() * 5);

        if (hScore != aScore)
            Math.max(hScore, aScore) == hScore ? (this.winner = this.home, this.loser = this.away) : (this.winner = this.away, this.loser = this.home);
        else Math.random() > 0.5 ? (this.winner = this.home, this.loser = this.away) : (this.winner = this.away, this.loser = this.home);
        this.score = { score_home: hScore, score_away: aScore };
    }

    playLeague() {
        let hScore = ~~(Math.random() * 5);
        let aScore = ~~(Math.random() * 5);
        this.score = { score_home: hScore, score_away: aScore };

        if (Math.max(hScore, aScore) == hScore) {
            this.home.setResult(3, 1, 0, 0, hScore, aScore);
            this.away.setResult(0, 0, 1, 0, hScore, aScore);
        } else if (Math.max(hScore, aScore) == aScore) {
            this.away.setResult(3, 1, 0, 0, hScore, aScore);
            this.home.setResult(0, 0, 1, 0, hScore, aScore);
        } else {
            this.away.setResult(1, 0, 0, 1, hScore, aScore);
            this.home.setResult(1, 0, 0, 1, hScore, aScore);
        }

    }

}