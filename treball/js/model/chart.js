export class CustomChart {
    static CHART_TYPE = {
        LINE: "line",
        BAR: "bar",
        RADAR: "radar",
        PIE: "pie",
        POLAR_AREA: "polarArea",
        BUBBLE: "bubble",
        SCATTER: "scatter",
        LINE: "line",
    }

    constructor(id, parentElement, type, labels, datasets) {
        this.id = id;
        this.type = type;
        this.labels = labels;
        this.parentElement = parentElement;
        this.datasets = datasets;
        this.chart = null;
        this.parentElement.innerHTML += this.paint();
    }

    createChart() {

        this.chart = new Chart(document.getElementById("chart-" + this.id), {
            type: this.type,
            data: {
                labels: this.labels,
                datasets: this.datasets
            }
        });
    }

    paint() {
        return '<div class="col"><canvas id="chart-' + this.id + '"></canvas></div>';
    }
}
/* fet model dataset
[{
                label: "Lost",
                fill: false,
                lineTension: 0.5,
                pointBorderColor: "transparent",
                pointColor: "white",
                borderColor: "#d9534f",
                borderWidth: 0,
                showLine: true,
                data: [0, 40, 10, 30, 10, 20, 15, 20],
                pointBackgroundColor: "transparent",
            },
            {
                label: "Lost",
                fill: false,
                lineTension: 0.5,
                pointColor: "white",
                borderColor: "#5cb85c",
                borderWidth: 0,
                showLine: true,
                data: [40, 0, 20, 10, 25, 15, 30, 0],
                pointBackgroundColor: "transparent",
            },
            {
                label: "Lost",
                fill: false,
                lineTension: 0.5,
                pointColor: "white",
                borderColor: "#f0ad4e",
                borderWidth: 0,
                showLine: true,
                data: [10, 40, 20, 5, 35, 15, 35, 0],
                pointBackgroundColor: "transparent",
            },
            {
                label: "Lost",
                fill: false,
                lineTension: 0.5,
                pointColor: "white",
                borderColor: "#337ab7",
                borderWidth: 0,
                showLine: true,
                data: [0, 30, 10, 25, 10, 40, 20, 0],
                pointBackgroundColor: "transparent",
            },
        ],
    */