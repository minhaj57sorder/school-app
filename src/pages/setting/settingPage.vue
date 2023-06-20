<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between items-center">
      <div>
        <div class="text-h6 text-bold">Setting</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Setting </span> /
          <span class="q-ml-xs">Genarel Setting</span>
        </div>
      </div>
    </div>

    <div class="row q-mt-lg">
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
      <div class="q-mr-sm">
        <q-btn class="border" label="Genarel Setting" no-caps flat color="" />
      </div>
    </div>
    <div class="row q-col-gutter-lg q-mt-lg">
      <div class="col-lg-6 col-md-12 col-sm-12 col-12">
        <q-card>
          <div style="border-bottom: 1px solid grey">
            <div class="text-h6 q-pa-lg">Website Basic Details</div>
          </div>
          <div class="q-pa-md">
            <div>Website Name *</div>
            <div><q-input outlined dense label="Inter Website Name" /></div>
          </div>
          <div class="q-pa-md">
            <div>Logo *</div>
            <div>
              <q-file outlined dense v-model="model">
                <template v-slot:append>
                  <q-icon
                    style="
                      background-color: blue;
                      padding: 5px;
                      color: white;
                      border-radius: 5px;
                      margin-right: -8px;
                    "
                    name="cloud_upload"
                  />
                </template>
              </q-file>
              <div class="text-bold">
                Recommended image size is 150px x 150px
              </div>
            </div>
          </div>
          <div class="q-ml-lg" style="position: relative">
            <div
              class="q-pa-md"
              style="position: relative; border: 1px solid black; width: 250px"
            >
              <q-img
                width="200px"
                src="https://preschool.dreamguystech.com/template/assets/img/logo.png"
              />
              <q-icon
                class="text-h6 cursor-pointer"
                style="
                  position: absolute;
                  background-color: rgba(128, 128, 128, 0.403);
                  border-radius: 10px;
                  color: black;
                  font-weight: 600;
                  right: 5px;
                  top: 5px;
                  padding: 1px;
                "
                name="close"
              />
            </div>
          </div>
          <div class="q-pa-md">
            <div>Favicon *</div>
            <div>
              <q-file outlined dense v-model="model">
                <template v-slot:append>
                  <q-icon
                    style="
                      background-color: blue;
                      padding: 5px;
                      color: white;
                      border-radius: 5px;
                      margin-right: -8px;
                    "
                    name="cloud_upload"
                  />
                </template>
              </q-file>
              <div class="text-bold">
                Recommended image size is 16px x 16px or 32px x 32px Accepted
                formats: only png and ico
              </div>
            </div>
          </div>
          <div class="q-ml-lg" style="position: relative">
            <div
              class="q-pa-md"
              style="position: relative; border: 1px solid black; width: 100px"
            >
              <q-img
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/favicon.png"
              />
              <q-icon
                class="text-h6 cursor-pointer"
                style="
                  position: absolute;
                  background-color: rgba(128, 128, 128, 0.403);
                  border-radius: 10px;
                  color: black;
                  font-weight: 600;
                  right: 5px;
                  top: 5px;
                  padding: 1px;
                "
                name="close"
              />
            </div>
          </div>
          <div
            style="width: 300px"
            class="q-pa-lg row justify-between items-center"
          >
            <div class="q-mr-md text-bold">RTL</div>
            <div><q-toggle size="lg" v-model="value" /></div>
          </div>
          <div class="row q-col-gutter-md q-pa-md">
            <div>
              <q-btn class="btn" label="Update" outline no-caps size="18px" />
            </div>
            <div><q-btn label="Cancel" outline no-caps size="18px" /></div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-12">
        <q-card>
          <div style="border-bottom: 1px solid grey">
            <div class="text-h6 q-pa-lg">Address Details</div>
          </div>
          <div class="q-pa-md">
            <div>Address Line 1 *</div>
            <div><q-input outlined dense /></div>
          </div>
          <div class="q-pa-md">
            <div>Address Line 1 *</div>
            <div><q-input outlined dense /></div>
          </div>
          <div>
            <div class="row">
              <div class="col-6">
                <div class="q-pa-md">
                  <div>City *</div>
                  <div><q-input outlined dense /></div>
                </div>
              </div>
              <div class="col-6">
                <div class="q-pa-md">
                  <div>State/Province *</div>
                  <div><q-input outlined dense /></div>
                </div>
              </div>
              <div class="col-6">
                <div class="q-pa-md">
                  <div>Zip/Postal Code *</div>
                  <div><q-input outlined dense /></div>
                </div>
              </div>
              <div class="col-6">
                <div class="q-pa-md">
                  <div>Country *</div>
                  <div><q-input outlined dense /></div>
                </div>
              </div>
            </div>
            <div class="row q-col-gutter-md q-pa-md">
              <div>
                <q-btn class="btn" label="Update" outline no-caps size="18px" />
              </div>
              <div><q-btn label="Cancel" outline no-caps size="18px" /></div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.border {
  border: 1px solid rgb(72, 0, 255) !important;
}
.border:hover {
  background: blue !important;
  transition: 0.5s !important;
  color: white !important;
}
.btn {
  color: white;
  background-color: blue !important;
}
.btn:hover {
  background-color: rgb(255, 128, 0) !important;
  transition: 0.5s all ease;
}
</style>
<script setup>
import { ref } from "vue";

const model = ref(null);
const value = ref(false);
</script>
