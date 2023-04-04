<template>
  <q-page class="q-pa-md b">
    <div class="row q-col-gutter-md">
      <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 col-12">
        <upcomingLeason />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12">
        <semesterProgress />
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
        <CalendarSection />
        <upcomingEvent />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import upcomingLeason from "src/components/dashboard/admin/upcomingLeason.vue";
import semesterProgress from "src/components/dashboard/admin/semesterProgress.vue";
import upcomingEvent from "src/components/dashboard/admin/upcomingEvent.vue";
import CalendarSection from "src/components/dashboard/admin/calendarSection.vue";
</script>
<style scoped></style>
