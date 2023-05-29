<template>
  <q-page>
    <div class="row justify-between q-pa-lg items-center">
      <div>
        <div class="text-h6 text-bold">Expenses</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Dashboard </span>/
          <span class="q-ml-xs">Expenses</span>
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-card class="q-pa-md shadow-1 q-pa-lg">
        <div class="flex justify-between items-center">
          <div class="text-h6">Expenses</div>
          <div class="flex q-col-gutter-sm">
            <div>
              <q-btn
                class="text-white bg-indigo-10"
                flat
                icon="download"
                label="Download"
              ></q-btn>
            </div>
            <div>
              <q-btn class="text-white bg-indigo-10" flat icon="add"></q-btn>
            </div>
          </div>
        </div>
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
    </div>
  </q-page>
</template>

<script>
import useQuasar from "quasar/src/composables/use-quasar.js";
import { ref } from "vue";

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

export default {
  setup() {
    const $q = useQuasar();

    const selected = ref([]);
    const lastIndex = ref(null);
    const tableRef = ref(null);

    return {
      // model: ref(null),

      // options: ["1", "2", "3", "4", "5"],

      selected,
      lastIndex,
      tableRef,

      columns,
      rows,

      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },

      onSelection({ rows, added, evt }) {
        if (rows.length === 0 || tableRef.value === void 0) {
          return;
        }

        const row = rows[0];
        const filteredSortedRows = tableRef.value.filteredSortedRows;
        const rowIndex = filteredSortedRows.indexOf(row);
        const localLastIndex = lastIndex.value;

        lastIndex.value = rowIndex;
        document.getSelection().removeAllRanges();

        if ($q.platform.is.mobile === true) {
          evt = { ctrlKey: true };
        } else if (
          evt !== Object(evt) ||
          (evt.shiftKey !== true && evt.ctrlKey !== true)
        ) {
          selected.value = added === true ? rows : [];
          return;
        }

        const operateSelection =
          added === true
            ? (selRow) => {
                const selectedIndex = selected.value.indexOf(selRow);
                if (selectedIndex === -1) {
                  selected.value = selected.value.concat(selRow);
                }
              }
            : (selRow) => {
                const selectedIndex = selected.value.indexOf(selRow);
                if (selectedIndex > -1) {
                  selected.value = selected.value
                    .slice(0, selectedIndex)
                    .concat(selected.value.slice(selectedIndex + 1));
                }
              };

        if (localLastIndex === null || evt.shiftKey !== true) {
          operateSelection(row);
          return;
        }

        const from = localLastIndex < rowIndex ? localLastIndex : rowIndex;
        const to = localLastIndex < rowIndex ? rowIndex : localLastIndex;
        for (let i = from; i <= to; i += 1) {
          operateSelection(filteredSortedRows[i]);
        }
      },
    };
  },
};
</script>
<style>
.search-btn:hover {
  background-color: red !important;
  transition: 0.3s;
}
</style>
