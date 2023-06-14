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
        header-class=" text-pink"
        expand-icon-class="text-pink"
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
        <q-item clickable v-ripple to="/invoice_detail">
          <q-item-section>Add Details</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/invoiceSettings">
          <q-item-section>Invoice Setting</q-item-section>
        </q-item>
      </q-expansion-item>
      <div class="q-pa-md text-grey-6">Managemant</div>
      <q-expansion-item
        group="somegroup"
        icon="group"
        label="Account"
        header-class=" text-green"
        expand-icon-class="text-green"
      >
        <q-item clickable v-ripple to="/feesCollection">
          <q-item-section>Fees Collection</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/expenSes">
          <q-item-section>Expenses</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/addFees">
          <q-item-section>Add Fees</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/addExpanses">
          <q-item-section>Add Expanses</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/addSalary">
          <q-item-section>Add Salary</q-item-section>
        </q-item>
      </q-expansion-item>
      <q-item clickable v-ripple to="/holyDay">
        <div class="flex items-center">
          <div><q-icon name="bolt" size="25px" /></div>
          <div>Holiday</div>
        </div>
      </q-item>
      <q-item clickable v-ripple to="/feesPage">
        <div class="flex items-center">
          <div><q-icon name="bolt" size="25px" /></div>
          <div>Fees</div>
        </div>
      </q-item>
      <q-item clickable v-ripple to="/holyDay">
        <div class="flex items-center">
          <div><q-icon name="bolt" size="25px" /></div>
          <div>Holiday</div>
        </div>
      </q-item>
      <q-item clickable v-ripple to="/holyDay">
        <div class="flex items-center">
          <div><q-icon name="bolt" size="25px" /></div>
          <div>Holiday</div>
        </div>
      </q-item>
      <q-item clickable v-ripple to="/holyDay">
        <div class="flex items-center">
          <div><q-icon name="bolt" size="25px" /></div>
          <div>Holiday</div>
        </div>
      </q-item>
      <q-item clickable v-ripple to="/holyDay">
        <div class="flex items-center">
          <div><q-icon name="bolt" size="25px" /></div>
          <div>Holiday</div>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup></script>
