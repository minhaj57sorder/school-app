<template>
  <q-page class="q-pa-md b">
    <div class="row q-col-gutter-md">
      <div class="col-lg-8 col-md-12 col-12">
        <div class="row q-col-gutter-md">
          <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12">
            <studentView />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import studentView from "src/components/dashboard/admin/teachingHistory.vue";
</script>
<style scoped></style>
