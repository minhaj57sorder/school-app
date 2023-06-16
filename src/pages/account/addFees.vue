<template>
  <div class="q-pa-lg">
    <div class="row justify-between q-pa-lg items-center">
      <div>
        <div class="text-h6 text-bold">Add Fees</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Account </span>/
          <span class="q-ml-xs">Add Fees</span>
        </div>
      </div>
    </div>
    <q-card class="q-pa-md">
      <div class="text-h6 q-mb-md">Fees Information</div>
      <div class="row q-col-gutter-md">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-input
              outlined
              dense
              label="Student ID"
              ref="studentId"
              v-model="student"
              :rules="[(val) => !!val || 'Field is must requiard']"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-input
              outlined
              dense
              ref="email"
              v-model="emailEl"
              label="Email Address"
              type="email"
              :rules="[isEmail]"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-select
              outlined
              dense
              label="gender*"
              v-model="gender"
              type="selector"
              ref="genderEl"
              :options="options"
              :rules="[requiredSelector]"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-select
              outlined
              type="date"
              dense
              label="Student ID"
              v-model="type"
              :options="options2"
              :rules="[requiredSelector2]"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-input
              outlined
              dense
              label="Mobile Number"
              ref="mobileNumber"
              v-model="numberEl"
              type="mobileNumber"
              :rules="[mobileNoBd]"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-input
              outlined
              dense
              label="Student ID"
              type="date"
              v-model="date"
            />
          </div>
        </div>
      </div>
      <div class="q-mt-md">
        <q-btn label="Submit" color="blue" @click="saveChanges" />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const gender = ref(null);
const genderEl = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const type = ref(null);
const options2 = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const date = ref("my value");

const requiredSelector = (val) => {
  return val ? true : "Required Feild";
};
const requiredSelector2 = (val) => {
  return val ? true : "Required Feild";
};

const studentId = ref(null);
const student = ref(null);

const saveChanges = () => {
  studentId.value.validate();
  if (studentId.value.hasError) {
    console.log("failed");
    return;
  }
  console.log("passed");
};
const email = ref(null);
const emailEl = ref(null);
const isEmail = (val) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@.%+-]{6,254}$)[a-zA-Z0-9.%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) ? true : "Seems like not email address";
};

const mobileNumber = ref(null);
const numberEl = ref(null);
const mobileNoBd = (val) => {
  if (val && val.length == 11) {
    return true;
  } else if (val && val.length > 11) {
    return "Too Long. Accepting 11 charecter.";
  } else {
    return "Too Short. Accepting 11 charecter.";
  }
};
</script>
