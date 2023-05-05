<template>
  <q-card class="q-pa-md">
    <div class="row justify-between">
      <div class="text-h6">Star Students</div>
      <div><q-icon name="more_vert" /></div>
    </div>
    <q-markup-table>
      <thead>
        <tr>
          <td>Student Id</td>
          <td>Name</td>
          <td>Mark</td>
          <td>Persentage</td>
          <td>Year</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rows" :key="index">
          <td>{{ item.studentId }}</td>
          <td>
            <q-avatar>
              <img
                style="width: 35px; height: 35px"
                :src="item.image"
              /> </q-avatar
            ><span class="q-ml-sm">{{ item.name }}</span>
          </td>
          <td>{{ item.mark }}</td>
          <td>{{ item.percentage }}</td>
          <td>{{ item.year }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script setup>
const rows = [
  {
    studentId: "AD1234",
    name: "Minhaj",
    image: "https://cdn.quasar.dev/img/avatar.png",
    mark: 3.33,
    percentage: "75%",
    year: 2017,
  },
  {
    studentId: "AD1235",
    name: "Sohug",
    image: "https://cdn.quasar.dev/img/avatar.png",
    mark: 3.63,
    percentage: "75%",
    year: 2018,
  },
  {
    studentId: "AD1236",
    name: "Niloy",
    image: "https://cdn.quasar.dev/img/avatar.png",
    mark: 3.83,
    percentage: "75%",
    year: 2020,
  },
];
</script>
