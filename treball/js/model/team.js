export class Team {
    constructor(jsonData, htmlElement) {
        this.htmlElement = htmlElement;
        this.scoreElement = htmlElement.getElementsByClassName("tournament-bracket__number")[0];
        this.codeElement = htmlElement.getElementsByClassName("tournament-bracket__code")[0];
        this.jsonData = jsonData;
    }

    setScore(score) {
        this.scoreElement.innerHTML = score;
    }

    setCode(code) {
        this.codeElement.innerHTML = code;
    }

    setStyle(style) {
        this.htmlElement.classList.add(style);
    }

}