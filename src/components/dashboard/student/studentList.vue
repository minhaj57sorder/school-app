<template>
  <div class="row justify-between items-center">
    <div class="text-h6">Students</div>
    <div>Student<span> / </span>All Students</div>
  </div>
  <div class="row q-col-gutter-lg items-center">
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input outlined v-model="text" dense label="Search by ID ..." />
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input outlined v-model="text" dense label="Search by Name ..." />
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input outlined v-model="text" dense label="Search by Phone ..." />
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
          <q-btn outlined v-model="text" color="blue" label="Search" />
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
      <div class="q-ml-md">
        <div class="row q-ml-md items-center">
          <span class="q-mr-sm">Show</span>
          <div class="">
            <div class="row q-gutter-md" style="max-width: 350px">
              <q-select
                outlined
                v-model="model"
                :options="options"
                dense
                label="10"
              />
            </div>
          </div>
          <span class="q-ml-sm">entries</span>
        </div>
      </div>
    </div>

    <div class="">
      <div class="row row q-col-gutter-lg items-center">
        <div class=" ">
          <q-btn color="blue" class="row justify between items-center">
            <q-icon name="format_list_bulleted" color=""></q-icon>
          </q-btn>
        </div>
        <div>
          <q-btn color="white" class="row justify between items-center">
            <q-icon name="grid_view" color="black"></q-icon>
          </q-btn>
        </div>
        <div>
          <q-btn color="blue" class="row justify between items-center">
            <q-icon name="download" color=""></q-icon>Download
          </q-btn>
        </div>
        <div>
          <q-btn color="blue" class="row justify between items-center">
            <q-icon name="add" color=""></q-icon>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
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
    name: "parent name",
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
  {
    name: "action",
    label: "Action",
    align: "left",
    field: "action",
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
    address: "911 Deer Ridge Drive,USA",
    action: "",
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
      model: ref(10),
      options: ["10", "25", "50", "100"],
    };
  },
};
</script>
