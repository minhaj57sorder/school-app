<template>
  <q-page class="q-pa-lg">
    <div class="q-mb-lg">
      <div class="row justify-between items-center">
        <div class="text-h6">Welcome Admin!</div>
        <div>
          <span class="q-mr-xs text-bold text-grey-7">Home</span> /
          <span class="q-ml-xs text-bold text-grey-7">Admin</span>
        </div>
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-lg-8 col-md-12 col-12 q-col-gutter-lg">
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
