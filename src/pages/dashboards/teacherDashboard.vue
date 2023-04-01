<template>
  <q-page class="q-pa-lg">
    <div class="row">
      <div class="col-lg-5 col-md-6 col-sm-12 col-12">
        <upcomingLeason />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <semesterProgress />
      </div>
    </div>
  </q-page>
</template>
  
  <script setup>
import upcomingLeason from "src/components/dashboard/admin/upcomingLeason.vue";
import semesterProgress from "src/components/dashboard/admin/semesterProgress.vue";
</script>
  <style scoped>
</style>
  