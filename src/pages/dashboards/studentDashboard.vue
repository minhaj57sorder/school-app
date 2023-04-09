<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <studentDashboard />
      </div>
      <div class="col-lg-8 col-md-12 col-sm-12 col-12">
        <todaysLesson />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import studentDashboard from "src/components/dashboard/student/studentDashboard.vue";
import todaysLesson from "src/components/dashboard/student/todaysLesson.vue";
</script>
