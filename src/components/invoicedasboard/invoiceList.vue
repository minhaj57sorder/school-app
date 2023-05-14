<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between q-pa-lg items-center">
      <div>
        <div class="text-h6 text-bold">Student</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Student</span>
          <span class="q-ml-xs">All Student</span>
        </div>
      </div>
    </div>

    <q-card class="q-pa-lg">
      <div class="row items-center q-col-gutter-md">
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-btn label="Genaret Report" icon="signal_cellular_alt" />
        </div>
      </div>
    </q-card>
    <div class="row q-mt-lg justify-between items-center q-col-gutter-md">
      <div>
        <q-tabs class="text-black text-bold">
          <q-tab label="Mails" />
          <q-tab label="Alarms" />
          <q-tab label="Mails" />
          <q-tab label="Alarms" />
          <q-tab label="Mails" />
          <q-tab label="Alarms" />
        </q-tabs>
      </div>
      <div class="row items-center">
        <div class="q-mr-md">
          <q-icon name="settings" size="35px" />
        </div>
        <div>
          <q-btn label="New Invoice" icon="add_circle" />
        </div>
      </div>
    </div>
    <div class="row q-mt-lg q-col-gutter-lg">
      <div
        class="col-lg-3 col-md-6 col-sm-12 col-12"
        v-for="(item, index) in card"
        :key="index"
      >
        <q-card class="q-pa-md">
          <div class="row justify-between items-center">
            <div>
              <div>
                <q-img style="width: 60px" :src="item.image" />
              </div>
            </div>
            <div>
              <div class="text-h5 text-bold text-blue">{{ item.doller }}</div>
            </div>
          </div>
          <div class="row items-center q-mt-md">
            <div class="q-mr-sm text-bold">{{ item.invoice }}</div>
            <div style="font-size: 10px">{{ item.number }}</div>
          </div>
        </q-card>
      </div>
    </div>
    <q-card class="q-pa-md q-mt-lg">
      <div class="flex items-center q-col-gutter-sm">
        <div class="q-mt-md">Show</div>
        <div class="q-mt-lg" style="width: 60px">
          <q-select dense outlined model="null" :options="['1', '2']" />
        </div>
        <div class="q-mt-md">Entry</div>
      </div>
      <q-table
        class="q-mt-lg"
        flat
        ref="tableRef"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        :selected="selected"
        @selection="onSelection"
      />
    </q-card>
  </q-page>
</template>
<script setup>
const card = [
  {
    image:
      "https://preschool.dreamguystech.com/template/assets/img/icons/invoices-icon1.svg",
    doller: "$8,78,797",
    invoice: "$8,78,797",
    number: "50",
  },
  {
    image:
      "https://preschool.dreamguystech.com/template/assets/img/icons/invoices-icon1.svg",
    doller: "$8,78,797",
    invoice: "$8,78,797",
    number: "50",
  },
  {
    image:
      "https://preschool.dreamguystech.com/template/assets/img/icons/invoices-icon1.svg",
    doller: "$8,78,797",
    invoice: "$8,78,797",
    number: "50",
  },
  {
    image:
      "https://preschool.dreamguystech.com/template/assets/img/icons/invoices-icon1.svg",
    doller: "$8,78,797",
    invoice: "$8,78,797",
    number: "50",
  },
];

const columns = [
  {
    name: "desc",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
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
</script>
