//chartjs block
let softRed = "hsl(10, 79%, 65%)";
let cyan = "hsl(186, 34%, 60%)";
var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var barColors = [softRed, softRed, cyan, softRed, softRed, softRed, softRed];

const ctx = document.getElementById("canvas").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "$",
        data: yValues,
        backgroundColor: [
          softRed,
          softRed,
          cyan,
          softRed,
          softRed,
          softRed,
          softRed,
        ],

        borderColor: [
          softRed,
          softRed,
          cyan,
          softRed,
          softRed,
          softRed,
          softRed,
        ],
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
//end of chartjs block
