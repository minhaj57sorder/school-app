<template>
  <div>Dought</div>
  <div>Alamin</div>
  <LineChart v-bind="LineChartProps" />
</template>

<script setup>
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables, Utils } from "chart.js";
import { ref } from "vue";
Chart.register(...registerables);
const dataValues = ref([30, 40, 60, 70, 5]);
const dataLabels = ref(["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"]);
const toggleLegend = ref(true);

const inputs = {
  min: 20,
  max: 80,
  count: 8,
  decimals: 2,
  continuity: 1,
};

const generateLabels = () => {
  return Utils.months({ count: inputs.count });
};

const generateData = () => Utils.numbers(inputs);

Utils.srand(42);

const testData = {
  labels: generateLabels(),
  datasets: [
    {
      label: "D0",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
      hidden: true,
    },
    {
      label: "D1",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.orange,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),
      fill: "-1",
    },
    {
      label: "D2",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.yellow,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow),
      hidden: true,
      fill: 1,
    },
    {
      label: "D3",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green),
      fill: "-1",
    },
    {
      label: "D4",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),
      fill: "-1",
    },
    {
      label: "D5",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.grey,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.grey),
      fill: "+2",
    },
    {
      label: "D6",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.purple,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple),
      fill: false,
    },
    {
      label: "D7",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
      fill: 8,
    },
    {
      label: "D8",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.orange,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),
      fill: "end",
      hidden: true,
    },
    {
      label: "D9",
      data: generateData(),
      borderColor: Utils.CHART_COLORS.yellow,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow),
      fill: { above: "blue", below: "red", target: { value: 350 } },
    },
  ],
};
const options = {
  scales: {
    y: {
      stacked: true,
    },
  },
  plugins: {
    filler: {
      propagate: false,
    },
    "samples-filler-analyser": {
      target: "chart-analyser",
    },
  },
  interaction: {
    intersect: false,
  },
};

const { LineChartProps, LineChartRef } = useLineChart({
  chartData: testData,
  options,
});
</script>

<style>
</style>