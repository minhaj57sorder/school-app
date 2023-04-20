<template>
  <q-card class="q-pa-md">
    <div>
      <div class="flex justify-between items-center q-mb-lg">
        <div class="text-h6">Teaching History</div>
        <q-icon size="sm" name="more_horiz" />
      </div>

      <div
        class="flex justify-between items-center"
        v-for="(item, index) in history"
        :key="index"
      >
        <div class="flex">
          <div class="q-mr-sm top">{{ item.title }}</div>
          <div class="shedule-section q-pl-sm q-py-sm">
            <div class="circle"></div>
            <div>{{ item.subtitle }}</div>
            <div>
              <q-icon name="calendar_month" /> {{ item.date }}
              <q-icon name="schedule" /> {{ item.time }}
            </div>
          </div>
        </div>
        <div><q-btn :label="item.btn" size="sm" color="primary" /></div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
const history = [
  {
    title: "Sep 23",
    subtitle: "Mathematics",
    date: "September 5, 2022 |",
    time: "09:00 am - 10:00 am (60 Minutes)",
    btn: "In Progress",
  },
  {
    title: "Sep 23",
    subtitle: "Mathematics",
    date: "September 5, 2022 |",
    time: "09:00 am - 10:00 am (60 Minutes)",
    btn: "In Progress",
  },
  {
    title: "Sep 23",
    subtitle: "Mathematics",
    date: "September 5, 2022 |",
    time: "09:00 am - 10:00 am (60 Minutes)",
    btn: "In Progress",
  },
];
</script>

<style scoped>
.shedule-section {
  border-left: 3px solid #72767a46;
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
