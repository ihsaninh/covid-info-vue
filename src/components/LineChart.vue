<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    chartData: {
      type: Array,
      default: null
    },
    chartLabels: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Positif',
            borderColor: '#3cba9f',
            fill: false,
            data: this.chartData
          }
        ]
      },
      this.options
    );
  }
};
</script>
