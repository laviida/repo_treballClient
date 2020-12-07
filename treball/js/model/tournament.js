export { Tournament }
import { tournament, roundOf16Finals, quarterFinals, semiFinals, bronzeFinal, goldFinal } from "../views/htmlData.js";
import { loadJSON } from "../utils/utils.js";
import { Team } from "./team.js";
import { Pair } from "./pair.js";
class Tournament {
    static TOURNAMENT_MODE = { FINALS: "FINALS", LEAGUE: "LEAGUE" };
    static TOURNAMENT_TEAMS_SELECT_TYPE = { RANDOM: "RANDOM", ARBITRARY: "ARBITRARY" };
    static TOURNAMENT_QUARTER_FINAL_ROUND = 0;
    static TOURNAMENT_SEMI_FINAL_ROUND = 1;
    static TOURNAMENT_BRONZE_FINAL_ROUND = 2;
    static TOURNAMENT_GOLD_FINAL_ROUND = 3;
    static TOURNAMENT_CSS_CLASS_WINNER = "tournament-bracket__team--winner";

    constructor(type, teams_select, num_teams, parentHTML) {
        this.type = type;
        this.teams_select = teams_select;
        this.num_teams = num_teams;
        this.parentHTML = parentHTML;
        this.tournament_root_element = null;
        this.teams = [];
        this.max_rounds = this.getMaxRounds();
        this.brackets = [];
    }

    assert(message) {
        throw Error('Assert failed: ' + (message || ''));
    };

    getIndexTeams(num_teams, length) {
        let index_teams = Array.from({ length: num_teams }, () => ~~(Math.random() * length));
        index_teams = Array.from(new Set(index_teams));
        return index_teams;
    }

    async createTournament() {
        ![2, 4, 8, 16].includes(this.num_teams) ? this.assert("num_teams must be 2, 4, 8, 16") : "";
        this.paint();
        if (this.teams_select == Tournament.TOURNAMENT_TEAMS_SELECT_TYPE.RANDOM) {
            var _teams = [];
            await loadJSON("../json/teams_players.json").then((response) => (_teams = JSON.parse(response)));
            let index_teams = this.getIndexTeams(this.num_teams, _teams.length);
            while (index_teams.length != this.num_teams) index_teams = this.getIndexTeams(this.num_teams, _teams.length);
            this.teams = index_teams.map(x => new Team(_teams[x]));


            for (let index = 0; index < this.num_teams; index++) {
                if (index % 2 != 0) this.brackets.push(new Pair(this.teams[index - 1], this.teams[index]));
            }
            this.brackets.forEach(x => x.play());
            let winner_teams, loser_teams, bronze, gold;
            switch (this.num_teams) {
                case 16:
                    this.tournament_root_element.innerHTML += roundOf16Finals(this.brackets.map(x => x.paint()));

                    winner_teams = this.brackets.map(x => x.winner);
                    this.brackets = [];
                    this.brackets.push(new Pair(winner_teams[0], winner_teams[1]), new Pair(winner_teams[2], winner_teams[3]),
                        new Pair(winner_teams[4], winner_teams[5]), new Pair(winner_teams[6], winner_teams[7]));
                    this.brackets.forEach(x => x.play());
                    this.tournament_root_element.innerHTML += quarterFinals(this.brackets.map(x => x.paint()));

                    winner_teams = this.brackets.map(x => x.winner);
                    this.brackets = [];
                    this.brackets.push(new Pair(winner_teams[0], winner_teams[1]), new Pair(winner_teams[2], winner_teams[3]));
                    this.brackets.forEach(x => x.play());
                    this.tournament_root_element.innerHTML += semiFinals(this.brackets.map(x => x.paint()));

                    loser_teams = this.brackets.map(x => x.loser);
                    bronze = new Pair(loser_teams[0], loser_teams[1]);
                    bronze.play();
                    this.tournament_root_element.innerHTML += bronzeFinal([bronze].map(x => x.paint()));

                    winner_teams = this.brackets.map(x => x.winner);
                    gold = new Pair(winner_teams[0], winner_teams[1]);
                    gold.play();
                    this.tournament_root_element.innerHTML += goldFinal([gold].map(x => x.paint()));
                    break;
                case 8:
                    this.tournament_root_element.innerHTML += quarterFinals(this.brackets.map(x => x.paint()));

                    winner_teams = this.brackets.map(x => x.winner);
                    this.brackets = [];
                    this.brackets.push(new Pair(winner_teams[0], winner_teams[1]), new Pair(winner_teams[2], winner_teams[3]));
                    this.brackets.forEach(x => x.play());
                    this.tournament_root_element.innerHTML += semiFinals(this.brackets.map(x => x.paint()));

                    loser_teams = this.brackets.map(x => x.loser);
                    bronze = new Pair(loser_teams[0], loser_teams[1]);
                    bronze.play();
                    this.tournament_root_element.innerHTML += bronzeFinal([bronze].map(x => x.paint()));

                    winner_teams = this.brackets.map(x => x.winner);
                    gold = new Pair(winner_teams[0], winner_teams[1]);
                    gold.play();
                    this.tournament_root_element.innerHTML += goldFinal([gold].map(x => x.paint()));
                    break;
                case 4:
                    this.tournament_root_element.innerHTML += semiFinals(this.brackets.map(x => x.paint()));

                    loser_teams = this.brackets.map(x => x.loser);
                    bronze = new Pair(loser_teams[0], loser_teams[1]);
                    bronze.play();
                    this.tournament_root_element.innerHTML += bronzeFinal([bronze].map(x => x.paint()));

                    winner_teams = this.brackets.map(x => x.winner);
                    gold = new Pair(winner_teams[0], winner_teams[1]);
                    gold.play();
                    this.tournament_root_element.innerHTML += goldFinal([gold].map(x => x.paint()));
                    break;
                case 2:
                    this.tournament_root_element.innerHTML += goldFinal(this.brackets.map(x => x.paint()));
                    break;
                default:
                    break;
            }
            this.paintWinners();
        }
    }

    paint() {
        this.parentHTML.innerHTML += tournament();
        this.tournament_root_element = document.getElementsByClassName('tournament-bracket')[0];
    }

    paintWinners() {
        Array.from(document.getElementsByClassName('tournament-bracket__winner')).forEach(x => {
            x.getElementsByClassName('tournament-bracket__score')[0].classList.add(Tournament.TOURNAMENT_CSS_CLASS_WINNER);
        });
    }

    getMaxRounds() {
        var count = 0;
        var value = this.num_teams;
        while (value >= 1) {
            value /= 2;
            count++;
        }
        this.max_rounds = count;
    }
}