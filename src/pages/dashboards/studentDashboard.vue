<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <div class="col-lg-8 col-md-12 col-12 q-col-gutter-lg">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <studentDashboard />
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
          <todaysLesson />
        </div>
        <div class="col-12">
          <teachingHistory />
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
        <q-card>
          <calendarSection />
          <upcomingEvent />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import studentDashboard from "src/components/dashboard/student/studentDashboard.vue";
import todaysLesson from "src/components/dashboard/student/todaysLesson.vue";
import upcomingEvent from "src/components/dashboard/admin/upcomingEvent.vue";
import calendarSection from "src/components/dashboard/admin/calendarSection.vue";
import teachingHistory from "src/components/dashboard/admin/teachingHistory.vue";
</script>
