<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        icon="explore"
        label="First"
        default-opened
        header-class="text-primary"
      >
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="email" />
          </q-item-section>
          <q-item-section>Admin Dashboard </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/teacher_dashboard">
          <q-item-section avatar>
            <q-icon name="email" />
          </q-item-section>
          <q-item-section>Teachers Dashboard </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-separator />

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

      <q-separator />

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

      <q-separator />

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

const linksList = [
  {
    title: "Student Dashboard",
    caption: "student related",
    link: "/",
  },
  {
    title: "Teacher Dashboard",
    caption: "teacher related",
    link: "/teacher_dashboard",
  },
];
</script>
