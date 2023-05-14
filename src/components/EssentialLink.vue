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
        <q-item clickable v-ripple to="/student_Edit">
          <q-item-section class="text-center"> Student Edit </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="shopping_cart"
        label="Teachers"
        header-class="text-purple"
      >
        <q-item clickable v-ripple to="/teacher_List">
          <q-item-section class="text-center"> Teacher List </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="teacher_View">
          <q-item-section class="text-center"> Teacher View </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/teacher_Add">
          <q-item-section class="text-center"> Teacher Add </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/teacher_Edit">
          <q-item-section class="text-center"> Teacher Edit </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        icon="bluetooth"
        label="Invoice"
        header-class="bg-teal text-white"
        expand-icon-class="text-white"
      >
        <q-item clickable v-ripple to="invoice_grid">
          <q-item-section>Invoice Grid</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="invoice_List">
          <q-item-section>Invoice List</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="add_invoice">
          <q-item-section>Add Invoice</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup></script>
