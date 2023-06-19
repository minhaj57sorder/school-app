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
        <div style="margin-top: 80px">
          <div class="text-h5 text-bold q-mb-xs">Welcome to Preskool</div>
          <div class="q-mb-lg">Let Us Help You</div>

          <div class="q-mt-md">
            <q-input type="email" label="Email" outlined dense v-model="email"
              ><template v-slot:append><q-icon name="mail" /></template>
            </q-input>
          </div>

          <div class="q-mt-md">
            <q-btn
              no-caps
              class="full-width"
              color="orange"
              label="Reset My Password"
            />
          </div>
          <div class="q-mt-md">
            <q-btn no-caps class="full-width" color="blue" label="Login" />
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
