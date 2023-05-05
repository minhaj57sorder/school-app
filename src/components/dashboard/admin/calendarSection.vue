<template>
  <div class="upcoming-calander">
    <q-date class="w q-mb-xs" v-model="date" minimal />
  </div>
</template>

<script setup></script>
<style>
.w {
  width: 100%;
  box-shadow: none;
}
.upcoming-calander .q-date {
  box-shadow: none;
}
</style>
