<template>
  <q-card class="q-pa-md">
    <div class="row justify-between">
      <div class="text-h6">Students Activity</div>
      <div><q-icon name="more_vert" /></div>
    </div>
    <div
      class="row justify-between items-center q-mt-md"
      v-for="(item, index) in activity"
      :key="index"
    >
      <div class="row items-center">
        <div class="text-h4 card-icon text-light-blue-5 bg-light-blue-1">
          <q-icon :name="item.icon"></q-icon>
        </div>
        <div class="q-ml-sm">
          <div class="text-bold">{{ item.title }}</div>
          <div class="">{{ item.subtitle }}</div>
        </div>
      </div>
      <div>
        <span class="label bg-red-2">{{ item.label }}</span>
      </div>
    </div>
  </q-card>
</template>
<script setup>
const activity = [
  {
    title: "First class",
    subtitle: "1st place",
    icon: "boy",
    label: "a day ago",
  },
  {
    title: "Second class",
    subtitle: "2st place",
    icon: "boy",
    label: "3 day ago",
  },
  {
    title: "Third class",
    subtitle: "1st place",
    icon: "boy",
    label: "5 day ago",
  },
  {
    title: "Forth class",
    subtitle: "3st place",
    icon: "boy",
    label: "9 day ago",
  },
];
</script>
<style scoped>
.card-icon {
  width: 45px;
  height: 45px;
  border-radius: 8px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.label {
  padding: 3px;
  border-radius: 6px;
}
</style>
