<template>
  <q-page>
    <div>
      <q-card class="q-pa-md">
        <div class="row justify-between items-center">
          <div class="text-h6">Star Student</div>
          <div><q-icon name="more_vert" class="text-h6" /></div>
        </div>

        <q-markup-table class="q-mt-md">
          <thead>
            <tr class="bg-grey-3">
              <td>ID</td>
              <td>Name</td>
              <td>Marks</td>
              <td>Percentage</td>
              <td>Year</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in table" :key="index">
              <td>{{ item.Id }}</td>
              <td>
                <q-avatar>
                  <q-img :src="item.image"></q-img>
                </q-avatar>
                <span class="q-ml-sm">{{ item.name }}</span>
              </td>
              <td>{{ item.mark }}</td>
              <td>{{ item.percentage }}</td>
              <td>{{ item.year }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
const table = [
  {
    Id: "Almf01450",
    name: "Alamin Islam",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-02.jpg",
    mark: "85",
    percentage: "90%",
    year: 2023,
  },
  {
    Id: "Almf01450",
    name: "Alamin Islam",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-02.jpg",
    mark: "85",
    percentage: "90%",
    year: 2023,
  },
  {
    Id: "Almf01450",
    name: "Alamin Islam",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-02.jpg",
    mark: "85",
    percentage: "90%",
    year: 2023,
  },
];
</script>
