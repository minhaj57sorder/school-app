<template>
  <div class="q-pa-lg">
    <div class="row justify-between q-pa-lg items-center">
      <div>
        <div class="text-h6 text-bold">Add Expanses</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Account </span>/
          <span class="q-ml-xs">Expense Information</span>
        </div>
      </div>
    </div>
    <q-card class="q-pa-md">
      <div class="text-h6 q-mb-md">Expense Information</div>
      <div class="row q-col-gutter-md">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div><q-input outlined dense label="Student ID" /></div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div><q-input outlined dense label="Student ID" /></div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-select outlined dense label="gender*" />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-select outlined type="date" dense label="Student ID" />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div><q-input outlined dense label="Student ID" /></div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <q-input outlined dense label="Student ID" />
          </div>
        </div>
      </div>
      <div class="q-mt-md">
        <q-btn label="Submit" color="blue" />
      </div>
    </q-card>
  </div>
</template>

<script setup></script>
