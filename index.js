/* chart.js chart examples */

// chart colors
var colors = ['#44804E', '#0075FF', '#FFD74B'];

var chBar = document.getElementById("chBar");
var chartData = {
  label: ["Médicos", "Tecnicos", "Enfermeiros"],
  datasets: [{
    label: "Médicos",
    data: [55769],
    backgroundColor: colors[0]
  },
  {
    label: "Técnicos de enfermagem",
    data: [98945],
    backgroundColor: colors[1]
  },
  {
    label: "Enfermeiros",
    data: [45000],
    backgroundColor: colors[2]
  }]
};

if (chBar) {
  new Chart(chBar, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      title: {
        display: true,
        fontSize: 18,
        text: "Grupos de profissionais de saúde infectados pela Covid-19"
      },
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: true,

      }
    }
  });
}


/*Gráficos evasão estudantil*/

// Bar chart
var publicBar = document.getElementById("bar-chart1");
var charPublicData = {
  labels: ["Afetados", "Não afetados"],
  datasets: [{
    data: [19.5, 32.4],
    backgroundColor: ['#FFD74B', '#FFB800']
  }]
};

if (publicBar) {
  new Chart(publicBar, {
    type: 'pie',
    data: charPublicData,
    options: {
      legend: { display: false },
      title: {
        display: true,
        fontSize: 15,
        text: "Numeros de alunos com aulas suspenas por conta da pandemia (milhões)"
      },
      legend: {
        display: true,

      },
    }
  });
}

var PrivateBar = document.getElementById("bar-chart2");
var charPrivateData = {
  labels: ["Diminuiu", "Permanece igual", "Melhorou"],
  datasets: [{
    data: [63, 22, 8],
    backgroundColor: ['#FFD74B', '#FFB800', "#FF9900"]
  }]
};

if (PrivateBar) {
  new Chart(PrivateBar, {
    type: 'pie',
    data: charPrivateData,
    options: {
      legend: { display: false },
      title: {
        display: true,
        fontSize: 15,
        text: "Avaliação da qualidade do ensino segundo Pais e responsáveis (%)"
      },
      legend: {
        display: true,
      },
      /*
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return data.datasets[tooltipItem.datasetIndex].data + "%"
          }
        }
      }
      */
    }
  });
}

/*Grupos de risco */

//Doughnut Chart
new Chart(document.getElementById("doughnut-chart"), {
  type: 'bar',
  data: {
    labels: ["Idosos", "Asmáticos", "Cardiácos", "Hipertensos"],
    datasets: [
      {
        //label: ["Idosos"], 
        backgroundColor: ["#F2BE03", "#FFD84E", "#FFD84E", "#F6E89A"],
        data: [2478, 5267, 734, 784]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Grupos de risco infectados covid-19',
      fontSize: 15
    },
    legend: {
      display: false
    }
  }
});

/**Depressão / Ansiedade */

var MintBar = document.getElementById("bar-chart3");
var charMinData = {
  labels: ["Depressão", "Ansiedade"],
  datasets: [{
    label: "Quantidade (milhões)",
    data: [358, 299],
    backgroundColor: ['#0075FF', '#5CB1FF']
  }]
};

if (MintBar) {
  new Chart(MintBar, {
    type: 'horizontalBar',
    data: charMinData,
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Registro de Casos de depressão e ansiedade',
        fontSize: 15
      },
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.2
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false,

      }
    }
  });
}

/**Desemprego */

var chTxBar = document.getElementById("chTxBar");
var chartTxData = {
  labels: ["2018", "2019", "2020"],
  datasets: [{
    data: [589, 445, 483],
    backgroundColor: ['#0075FF', '#66A4ED', '#B6D4F6']
  }]
};

if (chTxBar) {
  new Chart(chTxBar, {
    type: 'bar',
    data: chartTxData,
    options: {
      title: {
        display: true,
        text: 'Taxa de desemprego no Brasil 2018 - 2020',
        fontSize: 15
      },
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false,

      }
    }
  });
}





