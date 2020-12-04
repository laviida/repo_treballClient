export {
    Match
}
class Match {

    constructor(home, away) {
        this.CSS_CLASS_WINNER = "tournament-bracket__team--winner";
        this.home = home;
        this.away = away;
    }

    play() {
        let hScore = ~~(Math.random() * 5);
        let aScore = ~~(Math.random() * 5);

        if (hScore != aScore)
            Math.max(hScore, aScore) == hScore ? this.home.setStyle(this.CSS_CLASS_WINNER) : this.away.setStyle(this.CSS_CLASS_WINNER);
        else Math.random() > 0.5 ? this.home.setStyle(this.CSS_CLASS_WINNER) : this.away.setStyle(this.CSS_CLASS_WINNER);
        this.home.setScore(hScore);
        this.away.setScore(aScore);
    }


}