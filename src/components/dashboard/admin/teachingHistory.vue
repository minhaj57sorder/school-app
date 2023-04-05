<template>
  <q-card class="q-pa-md">
    <div>
      <div class="flex justify-between items-center">
        <div class="text-h6">Teaching History</div>
        <q-icon size="sm" name="more_horiz" />
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="q-mr-sm">Sep 22</div>
          <div class="shedule-section q-pl-sm q-py-sm">
            <div class="circle"></div>
            <div>Mathematics</div>
            <div>September 5, 2022 | 09:00 am - 10:00 am (60 Minutes)</div>
          </div>
        </div>
        <div><q-btn label="In process" size="sm" color="primary" /></div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="q-mr-sm">Sep 22</div>
          <div class="shedule-section q-pl-sm q-py-sm">
            <div class="circle"></div>
            <div>Mathematics</div>
            <div>September 5, 2022 | 09:00 am - 10:00 am (60 Minutes)</div>
          </div>
        </div>
        <div><q-btn label="In process" size="sm" color="primary" /></div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="q-mr-sm">Sep 22</div>
          <div class="shedule-section q-pl-sm q-py-sm">
            <div class="circle"></div>
            <div>Mathematics</div>
            <div>September 5, 2022 | 09:00 am - 10:00 am (60 Minutes)</div>
          </div>
        </div>
        <div><q-btn label="In process" size="sm" color="primary" /></div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
</script>

<style scoped>
.shedule-section {
  border-left: 3px solid #1976d2;
  position: relative;
}
.circle {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 10px;
  border: 3px solid #1976d2;
  left: -7px;
  top: 0px;
}
</style>