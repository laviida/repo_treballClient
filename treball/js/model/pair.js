import { Match } from "./match.js";
import { tournament_bracket } from "../views/htmlData.js";

export {
    Pair
};
class Pair extends Match {

    constructor(home, away, round = 0) {
        super(home, away, round);

    }

    paint() {
        return tournament_bracket(this);
    }

}