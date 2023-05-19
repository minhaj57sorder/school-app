<template>
  <div class="" style="max-width: 350px">
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        icon="grid_view"
        label="Dashboard"
        default-opened
        header-class="text-primary"
      >
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Admin Dashboard </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="teacher_dashboard">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Teacher Dashboard </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="student_dashboard">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Student Dashboard </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-separator />
    </q-list>
  </div>

  <div class="" style="max-width: 350px">
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        icon="school"
        label="Students"
        default-opened
        header-class="text-primary"
      >
        <q-item clickable v-ripple to="student_list">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Student List </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="student_view">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Student View </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="student_add">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Student Add </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="student_edit">
          <q-item-section avatar>
            <q-icon name="" />
          </q-item-section>
          <q-item-section> Student Edit </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-separator />
    </q-list>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

const linksList = [
  {
    title: "Student Dashboard",
    caption: "student related",
    link: "/student_dashboard",
  },
  {
    title: "Teacher Dashboard",
    caption: "teacher related",
    link: "/teacher_dashboard",
  },
];
</script>
