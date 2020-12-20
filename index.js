var colors = ['#44804E', '#0075FF', '#FFD74B'];

var chBar = document.getElementById("chBar");


var myChart = new Chart(chBar, {
  type: 'bar',
  data: {
    labels: ['Médicos', 'Enfermeiros', 'Técnicos de enfermagem'],
    datasets: [{
      padding: '25',
      backgroundColor: ['#44804E', '#0075FF', '#FFD74B'],
      data: [375, 572, 300]
    }]
  },
  options: {
    title: {
      display: true,
      fontSize: 15,
      text: "Grupo de profissionais da saúde mais afetados dentre os casos registrados de SRAG hospitalizados pela covid-19"
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
        text: "Avaliação da qualidade do ensino remoto segundo Pais e responsáveis (%)"
      },
      legend: {
        display: true,
      },
    }
  });
}

/*Grupos de risco */
var group = document.getElementById("doughnut-chart")
var myChart = new Chart(group, {
  type: 'horizontalBar',
  data: {
    labels: ['Cardiopatia', 'Diabetes', 'Doença renal', 'Doença neurológica', 'Pneumopatia'],
    datasets: [{
      data: [60565, 44139, 9122, 10021, 8958],
      backgroundColor: [
        '#44804E',
        '#0075FF',
        '#FFD74B',
        '#f9a825',
        '#ef6c00',
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      fontSize: 15,
      text: "Cormobidade e fatores de risco dos óbitos por SRAG Covid-19"
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


/**Depressão / Ansiedade */
var MintBar = document.getElementById("bar-chart3");
var myDoughnutChart = new Chart(MintBar, {
  type: 'horizontalBar',
  data: {
    labels: ['Prejuízo mental', 'Dificuldade de concentração', 'Ansiedade', 'Solidão', 'Depressão ou Claustrofobia'],
    datasets: [{
      data: [43.7, 24, 13.2, 5.8, 0.8],
      backgroundColor: [
        '#44804E',
        '#0075FF',
        '#FFD74B',
        '#f9a825',
        '#ef6c00',
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      fontSize: 15,
      text: "Registro de Casos de Sintomas de transtornos mentais (%)"
    },
    legend: {
      display: false,

    }
  }
});

/*
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
*/

/**Desemprego */

var chTxBar = document.getElementById("chTxBar");
var chartTxData = {
  labels: ["2018", "2019", "2020"],
  datasets: [{
    data: [12.3, 11.9, 14.4],
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





