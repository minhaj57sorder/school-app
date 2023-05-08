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
          <q-item-section class="text-center"> Admin Dashboard </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/teacher_dashboard">
          <q-item-section class="text-center">
            Teacher Dashboard
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/student_dashboard">
          <q-item-section class="text-center">
            Student Dashboard
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="perm_identity"
        label="Student Dashboard"
        header-class="text-teal"
      >
        <q-item clickable v-ripple to="/admin_Student">
          <q-item-section class="text-center"> Student list </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/student_Views">
          <q-item-section class="text-center"> Student View </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/student_Add">
          <q-item-section class="text-center"> Student Add </q-item-section>
        </q-item>
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

<script setup></script>
