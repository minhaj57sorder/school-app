<template>
  <DoughnutChart v-bind="doughnutChartProps" />
</template>

<script setup>
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref } from "vue";
Chart.register(...registerables);
const dataValues = ref([30, 40, 60, 70, 5]);
const dataLabels = ref(["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"]);
const toggleLegend = ref(true);
const testData = {
  labels: dataLabels.value,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
};
const options = {
  scales: {
    myScale: {
      type: "logarithmic",
      position: toggleLegend.value ? "left" : "right",
    },
  },
  plugins: {
    legend: {
      position: toggleLegend.value ? "top" : "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};

const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
  chartData: testData,
  options,
});
</script>

<style scoped></style>
