<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Student"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
    />

    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "name",
    align: "center",
    label: "Name",
    field: "calories",
    sortable: true,
  },
  { name: "class", label: "Class", field: "fat", sortable: true },

  { name: "dob", label: "DOB", align: "left", field: "carbs" },

  {
    name: "Sohag",
    label: "Parent Name",
    align: "left",
    field: "protein",
  },

  {
    name: "mobile number",
    label: "Mobile Number",
    align: "left",
    field: "sodium",
  },
  {
    name: "address",
    label: "Address",
    align: "left",
    field: "address",
  },
];

const rows = [
  {
    name: "PRE2209",
    calories: "Aaliyah",
    fat: "10 A",
    carbs: "2 Feb 2002",
    protein: "Jeffrey Wong",
    sodium: "097 3584 5870",
    calcium: "14%",
    iron: "1%",
    address: "911 Deer Ridge Drive,USA",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  setup() {
    const selected = ref([]);

    return {
      selected,
      columns,
      rows,

      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },
    };
  },
};
</script>
