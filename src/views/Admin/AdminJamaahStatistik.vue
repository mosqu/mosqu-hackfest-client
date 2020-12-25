<style>
  .card-text {
    height: 180px;
  }
</style>

<template>
  <v-container>
    <div class="chart-container">
      <v-row no-gutters>
        <v-col cols="4" sm="12" md="4">
          <v-card class="pa-4 ma-2 card-text" outlined tile>
            <div class="title mb-4">
              Jumlah Kepala KK
            </div>
            <v-skeleton-loader
              v-if="loader"
              class="mx-auto"
              max-width="100%"
              max-height="50%"
              type="card"
            ></v-skeleton-loader>
            <div v-else class="display-3">
              {{ data.sum_kk ? data.sum_kk : 0 }}
            </div>
          </v-card>
        </v-col>
        <v-col cols="4" sm="12" md="4">
          <v-card class="pa-4 ma-2 card-text" outlined tile>
            <div class="title mb-4">
              Jumlah Total Jamaah
            </div>
            <v-skeleton-loader
              v-if="loader"
              class="mx-auto"
              max-width="100%"
              max-height="50%"
              type="card"
            ></v-skeleton-loader>
            <div v-else class="display-3">
              {{ data.total_jamaah ? data.total_jamaah : 0 }}
            </div>
          </v-card>
        </v-col>
        <v-col cols="4" sm="12" md="4">
          <v-card class="pa-4 ma-2 card-text" outlined tile>
            <div class="title mb-4">
              Rata-rata Orang per Rumah
            </div>
            <v-skeleton-loader
              v-if="loader"
              class="mx-auto"
              max-width="100%"
              max-height="50%"
              type="card"
            ></v-skeleton-loader>
            <div v-else class="display-3">
              {{ data.mean_kk ? data.mean_kk : 0 }}
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="pa-4 ma-2" outlined tile>
            <div class="title mb-4">
              Distribusi Usia
            </div>
            <v-skeleton-loader
              v-if="loader"
              class="mx-auto"
              max-width="100%"
              max-height="50%"
              type="card"
            ></v-skeleton-loader>
            <div v-else class="chart-body">
                <BarChart :chartData="chartAge" :options="optionChart"></BarChart>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="pa-4 ma-2" outlined tile>
            <div class="title mb-4">
              Distribusi Pendapatan
            </div>
            <v-skeleton-loader
              v-if="loader"
              class="mx-auto"
              max-width="100%"
              max-height="50%"
              type="card"
            ></v-skeleton-loader>
            <div v-else class="chart-body">
                <BarChart :chartData="chartSalary" :options="optionChart"></BarChart>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import BarChart from "@/components/BarChart";
export default {
  components: {
    BarChart
  },
  data() {
    return {
      optionChart: {
        responsive: true, 
        maintainAspectRatio: false, 
        legend: {
            display: false
        }
      },
      data: {},
      loader: true
    };
  },

  methods: {
    getJamaahChart: function() {
      this.loader = true;
      this.axios(`/jamaah/chart`)
        .then((response) => {
          this.loader = false;
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  mounted() {
    this.getJamaahChart();
  },

  computed: {
    chartAge: function() {
          let data = [];
          let labels = [];

          if (this.data.dist_age) {
              data        = this.data.dist_age.data;
              labels      = this.data.dist_age.labels;
          }

          return {
              datasets: [
                {
                  label: 'Distribusi usia',
                  backgroundColor: '#009688',
                  borderColor: '#009688',
                  fill: false,
                  lineTension: 0,
                  radius: 5,
                  data: data
                }
              ],
              labels: labels
          };
      },
      chartSalary: function() {
          let data = [];
          let labels = [];

          if (this.data.dist_salary) {
              data        = this.data.dist_salary.data;
              labels      = this.data.dist_salary.labels;
          }

          return {
              datasets: [
                {
                  label: 'Distribusi pendapatan',
                  backgroundColor: '#005996',
                  borderColor: '#005996',
                  fill: false,
                  lineTension: 0,
                  radius: 5,
                  data: data
                }
              ],
              labels: labels
          };
      },
  }
};
</script>
