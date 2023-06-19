<template>
  <q-page class="flex flex-center q-pa-lg">
    <div class="row">
      <div>
        <q-img
          style="border-radius: 10px"
          width="350px"
          height="500px"
          class="bg-blue"
          src="https://preschool.dreamguystech.com/template/assets/img/login.png"
        />
      </div>
      <div class="q-pa-xl bg-grey-1" style="width: 350px; border-radius: 10px">
        <div class="text-h5 text-bold q-mb-sm">Welcome to Preskool</div>
        <div class="text-grey-6 q-mr-sm">
          Need an account? <span class="text-blue cursor-pointer">Sign Up</span>
        </div>
        <div class="text-h5 text-bold q-mt-md">Sign Up</div>
        <div class="q-mt-md">
          <q-input label="Username" outlined dense v-model="text"
            ><template v-slot:append><q-icon name="person" /></template>
          </q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Password" outlined dense v-model="text"
            ><template v-slot:append><q-icon name="lock" /></template>
          </q-input>
        </div>

        <div class="row justify-between items-center q-mt-md">
          <div>
            <q-checkbox v-model="shape" val="line" label="Remember me" />
          </div>
          <div class="text-blue cursor-pointer">Forgot Password?</div>
        </div>
        <div class="q-mt-sm">
          <q-btn class="full-width" color="blue" label="Login" />
        </div>
        <div class="q-mt-lg" style="position: relative">
          <div style="border-bottom: 1px solid rgba(81, 74, 74, 0.386)"></div>
          <div
            class="text-grey-6"
            style="
              position: absolute;
              left: 47%;
              background-color: rgb(255, 255, 255);
              padding: 5px;
              top: -15px;
              border-radius: 10px;
            "
          >
            OR
          </div>
        </div>
        <div class="q-mt-lg row flex-center">
          <div class="q-mr-sm">
            <q-icon
              style="background-color: grey; border-radius: 10px; padding: 5px"
              size="25px"
              name="thumb_up"
              color="white"
            />
          </div>
          <div class="q-mr-sm">
            <q-icon
              style="background-color: grey; border-radius: 10px; padding: 5px"
              size="25px"
              name="thumb_up"
              color="white"
            />
          </div>
          <div class="q-mr-sm">
            <q-icon
              style="background-color: grey; border-radius: 10px; padding: 5px"
              size="25px"
              name="thumb_up"
              color="white"
            />
          </div>
          <div class="q-mr-sm">
            <q-icon
              style="background-color: grey; border-radius: 10px; padding: 5px"
              size="25px"
              name="thumb_up"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";

const text = ref(null);
const shape = ref(false);
</script>
