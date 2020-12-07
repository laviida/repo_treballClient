export class Team {
    constructor(data) {
        this.data = data;
    }

    setStyle(style, htmlElement) {
        htmlElement.classList.add(style);
    }

}