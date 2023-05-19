<template>
  <q-page class="q-pa-lg">
    <summarySection />
    <div class="q-mt-lg row q-col-gutter-md">
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <topStudentsSection />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <studentActivity />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <studentView />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import summarySection from "src/components/dashboard/admin/summarySection.vue";
import topStudentsSection from "src/components/dashboard/admin/topStudentsSection.vue";
import studentActivity from "src/components/dashboard/admin/studentActivity.vue";
import studentView from "src/components/dashboard/student/studentView.vue";
</script>
<style scoped></style>
