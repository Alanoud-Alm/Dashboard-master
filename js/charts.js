
// Line Chart for Orders
<canvas id="myChart" style="width:100%;max-width:700px"></canvas>
var ordersChart = document.getElementById("myChart");




const config = {
    type: 'line',
    data: data,
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  };
  const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };



// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
