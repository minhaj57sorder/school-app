<template>
  <div class="row justify-between q-pa-lg items-center">
    <div>
      <div class="text-h6 text-bold">Event</div>
    </div>
    <div>
      <div class="row text-grey-7" style="font-size: 16px">
        <span class="cursor-pointer q-mr-xs">Dashboard </span>
        <span class="q-ml-xs">Event</span>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-pa-md">
      <div class="flex justify-between items-center">
        <div class="text-h6">Event</div>
        <div class="flex q-col-gutter-sm">
          <div>
            <q-btn
              class="text-white bg-indigo-10"
              flat
              icon="download"
              label="Download"
            ></q-btn>
          </div>
          <div>
            <q-btn class="text-white bg-indigo-10" flat icon="add"></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="q-pa-lg row">
    <div class="col-lg-12 col-12">
      <q-date full-width v-model="date" minimal />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref(null);
</script>
