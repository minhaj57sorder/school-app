<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between q-mb-xl items-center">
      <div>
        <div class="text-h6 text-bold">Student</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Student</span>
          <span class="q-ml-xs">All Student</span>
        </div>
      </div>
    </div>
    <q-card class="q-pa-lg">
      <div>
        <div class="flex justify-between items-center">
          <div class="text-h6">Student Information</div>
          <div class="text-h5 text-bold"><q-icon name="more_vert" /></div>
        </div>
      </div>
      <div class="row q-col-gutter-lg q-mt-lg">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input
            class="label-at-top"
            label="*Enter Frist Name"
            outlined
            square
            for="name"
            type="text"
            placeholder="Enter First Name"
            v-model="first"
            :rules="[required]"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input label="Enter last Name" v-model="last" outlined square />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="select"
            label="Select Gender"
            :options="['male', 'femail']"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input
            label="Date Of Birth"
            color="lime-11"
            for="name"
            type="date"
            v-model="text"
            outlined
            square
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input
            label="Inter Roll number"
            v-model="roll"
            type="number"
            outlined
            square
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="blood"
            label="Please Select Group"
            :options="['B+', 'B-', 'O+', 'O-']"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="region"
            label="Please Select Religion"
            :options="['Muslim', 'Hindu', 'khistan']"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input
            type="email"
            label="Enter Email Address"
            v-model="email"
            outlined
            square
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="clas"
            label="Please Select Class"
            :options="['10', '11', '12', '13']"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input v-model="id" label="Enter Admisson ID" outlined square />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <q-input
            v-model="number"
            type="number"
            label="Ener phone Number"
            outlined
            square
          />
        </div>
      </div>
      <div class="q-mt-xl">
        <div class="q-mb-sm text-bold">
          Upload Student Photo (150px X 150px)
        </div>
        <q-btn
          style="border-radius: 10px"
          color="primary"
          label="choose File"
          type="file"
          @click="onClick"
        />
      </div>
      <div class="q-mt-md">
        <q-btn
          style="border-radius: 10px; width: 150px"
          color="warning"
          label="Submit"
          @click="onClick"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const select = ref(null);
const blood = ref(null);
const clas = ref(null);
const first = ref(null);
const last = ref(null);
const roll = ref(null);
const region = ref(null);
const email = ref(null);
const section = ref(null);
const id = ref(null);
const number = ref(null);
const text = ref("my value");

const required = (val) => {
  return val ? true : "This feild is required.";
};
</script>
<style></style>
