<template>
  <q-page class="q-pa-lg">
    <div class="">
      <div class="border bg-grey-2 row justify-end items-center q-pa-md">
        <div class="q-mr-md cursor-pointer">
          <q-icon name="arrow_back_ios" /> <span>Back to invoice List </span>
        </div>
        <div class="q-mr-md cursor-pointer">
          <q-icon name="visibility" /><span class="q-ml-sm">Preview</span>
        </div>
        <div class="q-mr-md"><q-btn color="blue" label="Delete Invoice" /></div>
        <div><q-btn color="blue" label="Save Draft" /></div>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
.border {
  border-radius: 10px;
}
</style>
