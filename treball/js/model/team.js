export class Team {
    constructor(data) {
        this.data = data;
        this.points = 0;
        this.win = 0;
        this.loss = 0;
        this.tie = 0;
        this.fgoals = 0;
        this.agoals = 0;
        this.position = -1;
    }

    setStyle(style, htmlElement) {
        htmlElement.classList.add(style);
    }

    setResult(points, win, loss, tie, fgoals, agoals) {
        this.points += points;
        this.win += win;
        this.loss += loss;
        this.tie += tie;
        this.fgoals += fgoals;
        this.agoals += agoals;
    }

}