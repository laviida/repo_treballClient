export { Tournament }
import { tournament, roundOf16Finals, quarterFinals, semiFinals, bronzeFinal, goldFinal, tournamentTable } from "../views/htmlData.js";
import { loadJSON } from "../utils/utils.js";
import { Team } from "./team.js";
import { Pair } from "./pair.js";
import { Match } from "./match.js";
class Tournament {
    static TOURNAMENT_MODE = { FINALS: "FINALS", LEAGUE: "LEAGUE" };
    static TOURNAMENT_TEAMS_SELECT_TYPE = { RANDOM: "RANDOM", ARBITRARY: "ARBITRARY" };
    static TOURNAMENT_QUARTER_FINAL_ROUND = 0;
    static TOURNAMENT_SEMI_FINAL_ROUND = 1;
    static TOURNAMENT_BRONZE_FINAL_ROUND = 2;
    static TOURNAMENT_GOLD_FINAL_ROUND = 3;
    static TOURNAMENT_CSS_CLASS_WINNER = "tournament-bracket__team--winner";

    constructor(teams_select, type, num_teams, parentHTML) {
        this.type = type;
        this.teams_select = teams_select;
        this.num_teams = num_teams;
        this.parentHTML = parentHTML;
        this.tournament_root_element = null;
        this.json_teams = [];
        this.max_rounds = this.getMaxRounds();
        this.brackets = [];
        this.tooltip = false;
    }

    async createTournament(arbitrary_teams_index = []) {
        ![2, 4, 8, 16].includes(this.num_teams) ? this.assert("num_teams must be 2, 4, 8, 16") : "";
        this.paint();
        await loadJSON("../json/teams_players.json").then((response) => (this.json_teams = JSON.parse(response)));

        if (this.teams_select == Tournament.TOURNAMENT_TEAMS_SELECT_TYPE.RANDOM && this.type == Tournament.TOURNAMENT_MODE.FINALS) this.playTournamentFinals();
        else if (this.teams_select == Tournament.TOURNAMENT_TEAMS_SELECT_TYPE.ARBITRARY && this.type == Tournament.TOURNAMENT_MODE.FINALS) {
            this.json_teams = this.json_teams.filter(z => { if (arbitrary_teams_index.includes(z.TeamID.toString())) return z; });
            this.playTournamentFinals();
        } else {
            if (this.teams_select == Tournament.TOURNAMENT_TEAMS_SELECT_TYPE.ARBITRARY)
                this.json_teams = this.json_teams.filter(z => { if (arbitrary_teams_index.includes(z.TeamID.toString())) return z; });
            this.playTournamentLeague();
        }

        this.drawTeamPath();
    }

    playTournamentLeague() {
        let index_teams = this.getIndexTeams(this.num_teams, this.json_teams.length);
        while (index_teams.length != this.num_teams) index_teams = this.getIndexTeams(this.num_teams, this.json_teams.length);
        let init_teams = index_teams.map(x => new Team(this.json_teams[x]));
        this.brackets = [];
        // jornadas
        init_teams.forEach((home, idx) => {
            init_teams.forEach((away, i) => {
                if (idx < i) { this.brackets.push(new Pair(home, away)); this.brackets.push(new Pair(away, home)); }
            });
        });

        //partidos
        this.brackets.forEach(match => match.playLeague());
        let res_teams = [];

        this.brackets.forEach((x) => {
            let esta = false;
            res_teams.forEach(element => { if (x.home.data.TeamID == element.home.data.TeamID) esta = true; });
            if (!esta) res_teams.push(x);
        });
        res_teams.sort((a, b) => b.home.points - a.home.points);
        res_teams.forEach((x, idx) => x.home.position = (idx + 1));
        this.tournament_root_element.innerHTML += tournamentTable(res_teams.map(z => z.paintLeague()));

        // pulsar th para ordenar
        /*  document.getElementsByClassName('table-striped')[0].getElementsByTagName('th')[document.getElementsByClassName('table-striped')[0].getElementsByTagName('th').length - 1].addEventListener("click", () => {
              res_teams.sort((a, b) => a.home.data.points - b.home.data.points);
              this.tournament_root_element.innerHTML = tournamentTable(res_teams.map(z => z.paintLeague()));
              console.log("affa");
          });*/
    }

    playTournamentFinals() {
        this.updateBrackets(false, true);

        switch (this.num_teams) {
            case 16:
                this.tournament_root_element.innerHTML += roundOf16Finals(this.brackets.map(x => x.paint()));
                this.updateBrackets();
                this.tournament_root_element.innerHTML += quarterFinals(this.brackets.map(x => x.paint()));
                this.updateBrackets();
                this.tournament_root_element.innerHTML += semiFinals(this.brackets.map(x => x.paint()));
                this.updateBrackets(true, false);
                this.tournament_root_element.innerHTML += bronzeFinal([this.brackets[1].paint()]);
                this.tournament_root_element.innerHTML += goldFinal([this.brackets[0].paint()]);
                break;
            case 8:
                this.tournament_root_element.innerHTML += quarterFinals(this.brackets.map(x => x.paint()));
                this.updateBrackets();
                this.tournament_root_element.innerHTML += semiFinals(this.brackets.map(x => x.paint()));
                this.updateBrackets(true, false);
                this.tournament_root_element.innerHTML += bronzeFinal([this.brackets[1].paint()]);
                this.tournament_root_element.innerHTML += goldFinal([this.brackets[0].paint()]);
                break;
            case 4:
                this.tournament_root_element.innerHTML += semiFinals(this.brackets.map(x => x.paint()));
                this.updateBrackets(true);
                this.tournament_root_element.innerHTML += bronzeFinal([this.brackets[1].paint()]);
                this.tournament_root_element.innerHTML += goldFinal([this.brackets[0].paint()]);
                break;
            case 2:
                this.tournament_root_element.innerHTML += goldFinal(this.brackets.map(x => x.paint()));
                break;
            default:
                break;
        }
        this.paintWinners();
    }

    updateBrackets(finals = false, init = false) {
        if (init) {
            let index_teams = this.getIndexTeams(this.num_teams, this.json_teams.length);
            while (index_teams.length != this.num_teams) index_teams = this.getIndexTeams(this.num_teams, this.json_teams.length);
            let init_teams = index_teams.map(x => new Team(this.json_teams[x]));
            init_teams.forEach((x, idx, arr) => idx % 2 != 0 ? this.brackets.push(new Pair(arr[idx - 1], x)) : "");
        } else {
            let winner_teams = this.brackets.map(x => x.winner);
            let losers_teams = this.brackets.map(x => x.loser);
            this.brackets = [];
            finals ? winner_teams.concat(losers_teams).forEach((x, idx, arr) => idx % 2 != 0 ? this.brackets.push(new Pair(arr[idx - 1], x)) : "")
                : winner_teams.forEach((x, idx) => idx % 2 != 0 ? this.brackets.push(new Pair(winner_teams[idx - 1], x)) : "");

        }
        this.brackets.forEach(x => x.play());
    }

    assert(message) {
        throw Error('Assert failed: ' + (message || ''));
    };

    getIndexTeams(num_teams, length) {
        let index_teams = Array.from({ length: num_teams }, () => ~~(Math.random() * length));
        index_teams = Array.from(new Set(index_teams));
        return index_teams;
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

    drawTeamPath() {
        setTimeout(() => {
            let elements = Array.from(document.querySelectorAll('.tournament-bracket__code'));
            elements.forEach(x => {
                x.addEventListener("click", (e) => {
                    elements.forEach(x => {
                        x.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("border_path");
                        x.classList.remove("green");
                    });
                    let clicked_code = e.target.innerHTML;
                    Array.from(document.querySelectorAll('.tournament-bracket__code')).filter(x => x.innerHTML == clicked_code).forEach(x => {
                        x.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("border_path");
                        x.classList.add("green");
                    });
                });
            });
            window.addEventListener("click", (e) => {
                if (!Array.from(e.target.classList).includes("tournament-bracket__code")) {
                    elements.forEach(x => {
                        x.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("border_path");
                        x.classList.remove("green");
                    });
                }
            });
        }, 50);
    }

    showToolTip() {
        try {
            let element = Array.from(document.querySelectorAll('.tournament-bracket__code'))[0];
            const _tippy = tippy(element);
            _tippy.setContent('Click to see path');
            _tippy.setProps({
                arrow: true,
                animation: 'fade',
            });
            window.addEventListener("scroll", () => {
                if (this.tooltip) return;
                this.tooltip = true;
                _tippy.show();
                setTimeout(() => _tippy.hide(), 5000);
            });
        } catch (error) {
            console.log("tooltip not set in league tournament");
        }

    }
}