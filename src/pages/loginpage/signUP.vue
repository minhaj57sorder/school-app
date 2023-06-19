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
      <div class="q-pa-lg bg-grey-1" style="width: 350px; border-radius: 10px">
        <div class="q-mt-sm">
          <div class="text-h5 text-bold q-mb-sm">Sign Up</div>
          <div class="text-grey-6 q-mr-sm">
            Enter details to create your account
          </div>

          <div>
            <div class="q-mt-md">
              <q-input
                type="username"
                label="Username"
                outlined
                dense
                v-model="text"
                ><template v-slot:append><q-icon name="person" /></template>
              </q-input>
            </div>
            <div class="q-mt-md">
              <q-input type="email" label="Email" outlined dense v-model="email"
                ><template v-slot:append><q-icon name="mail" /></template>
              </q-input>
            </div>
            <div class="q-mt-md">
              <q-input
                type="password"
                label="Password"
                outlined
                dense
                v-model="pass1"
                ><template v-slot:append><q-icon name="visibility" /></template>
              </q-input>
            </div>
            <div class="q-mt-md">
              <q-input
                type="password"
                label="Password"
                outlined
                dense
                v-model="pass"
                ><template v-slot:append><q-icon name="visibility" /></template>
              </q-input>
            </div>
          </div>
          <div class="q-mt-md q-mb-md text-grey-6 q-mr-sm">
            Already Registered?
            <span class="text-blue cursor-pointer">Login</span>
          </div>

          <div class="q-mt-sm">
            <q-btn class="full-width" color="blue" label="Register" />
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
                style="
                  background-color: grey;
                  border-radius: 10px;
                  padding: 5px;
                "
                size="25px"
                name="thumb_up"
                color="white"
              />
            </div>
            <div class="q-mr-sm">
              <q-icon
                style="
                  background-color: grey;
                  border-radius: 10px;
                  padding: 5px;
                "
                size="25px"
                name="thumb_up"
                color="white"
              />
            </div>
            <div class="q-mr-sm">
              <q-icon
                style="
                  background-color: grey;
                  border-radius: 10px;
                  padding: 5px;
                "
                size="25px"
                name="thumb_up"
                color="white"
              />
            </div>
            <div class="q-mr-sm">
              <q-icon
                style="
                  background-color: grey;
                  border-radius: 10px;
                  padding: 5px;
                "
                size="25px"
                name="thumb_up"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";

const text = ref(null);
const pass = ref(null);
const pass1 = ref(null);
const email = ref(null);
const shape = ref(false);
</script>
