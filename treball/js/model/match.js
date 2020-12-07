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

}