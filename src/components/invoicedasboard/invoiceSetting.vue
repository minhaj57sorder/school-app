<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between q-mb-xl">
      <div class="text-h6">Invoice Settings</div>
      <div class=""><span>Dashboard</span>/ <span>General Settings</span></div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="q-pa-sm">
          <q-icon class="q-mr-sm" name="timeline" />General Settings
        </div>
        <div class="q-pa-sm">
          <q-icon class="q-mr-sm" name="bookmarks" /> Tax Settings
        </div>
        <div class="q-pa-sm">
          <q-icon class="q-mr-sm" name="account_balance" />Bank Settings
        </div>
      </div>
      <div class="col-9" style="background-color: aliceblue">
        <div class="text-h6 q-pa-md">General Settings</div>
        <q-separator />
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Invoice Status</div>
          <div class="col-9">
            <q-checkbox
              >Change invoice status to paid an order is complete</q-checkbox
            >
          </div>
        </div>
        <div class="row items-center q-pa-md">
          <div class="col-3">Invoice Ammount</div>
          <div class="col-9">
            <q-input
              ref="invoiceAmountEl"
              v-model="invoiceAmount"
              label="Invoice Amount"
              outlined
              :rules="[(val) => !!val || 'Field is required']"
            />
          </div>
        </div>
        <div class="row items-center q-pa-md">
          <div class="col-3">Invoice Ammount</div>
          <div class="col-9">
            <q-input
              ref="invoiceAmount2El"
              v-model="invoiceAmount2"
              label="Invoice Amount"
              outlined
              :rules="[(val) => !!val || 'Field is required']"
            />
          </div>
        </div>
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Invoice number starts with</div>
          <div class="col-9">
            <q-input outlined label="$" />
          </div>
        </div>
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Prefix</div>
          <div class="col-9">
            <q-input outlined />
          </div>
        </div>
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Number Reset</div>
          <div class="col-9">
            <q-input outlined />
          </div>
        </div>
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Default Due Time</div>
          <div class="col-9">
            <q-input outlined />
          </div>
        </div>
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Default Digital Signatory</div>
          <div class="col-9">
            <div class="flex relative-position">
              <q-input outlined dense class="full-width" />
              <q-file
                class="absolute-right"
                style="height: 50px"
                label-color="white"
                label="Upload File"
                bg-color="red"
                dense
              />
            </div>
          </div>
        </div>
        <div class="row items-center q-col-gutter-md q-pa-md">
          <div class="col-3">Default Digital Name</div>
          <div class="col-9">
            <q-input outlined />
          </div>
        </div>
        <div class="row justify-end q-col-gutter-md q-pa-md">
          <div><q-btn color="red" label="Cancel" /></div>
          <div>
            <q-btn color="blue" label="Save Change" @click="saveChanges" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
const invoiceAmount2 = ref(null);
const invoiceAmount = ref(null);
const invoiceAmountEl = ref(null);
const invoiceAmount2El = ref(null);
const saveChanges = () => {
  invoiceAmountEl.value.validate();
  invoiceAmount2El.value.validate();
  if (invoiceAmountEl.value.hasError || invoiceAmount2El.value.hasError) {
    console.log("Failed");
    return;
  }
  console.log("Passed");
};
</script>
