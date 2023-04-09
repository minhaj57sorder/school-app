<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-expansion-item
        group="somegroup"
        icon="grid_view"
        label="Dashboard"
        header-class="text-primary"
        default-opened
      >
        <q-item clickable v-ripple to="/">
          <q-item-section
            class="text-center text-bold text-white bg-orange"
            style="border-radius: 10px; padding: 12px; font-size: 16px"
          >
            Admin Dashboard
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/teacher_dashboard">
          <q-item-section
            class="text-center text-bold text-white bg-blue"
            style="
              border-radius: 10px;
              padding: 12px;
              margin-top: -10px;
              font-size: 16px;
            "
          >
            Teacher Dashboard
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/student_dashboard">
          <q-item-section
            class="text-center text-bold text-white bg-blue"
            style="
              border-radius: 10px;
              padding: 12px;
              margin-top: -10px;
              font-size: 16px;
            "
          >
            Student Dashboard
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="perm_identity"
        label="Second"
        header-class="text-teal"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="shopping_cart"
        label="Third"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="bluetooth"
        label="Fourth"
        header-class="bg-teal text-white"
        expand-icon-class="text-white"
      >
        <q-card class="bg-teal-2">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
// const linksList = [
//   {
//     title: "Student Dashboard",
//     caption: "student related",
//     link: "/",
//   },
//   {
//     title: "Teacher Dashboard",
//     caption: "teacher related",
//     link: "/teacher_dashboard",
//   },
//   {
//     title: "Student Dashboard",
//     caption: "student related",
//     link: "/student_dashboard",
//   },
// ];
</script>
