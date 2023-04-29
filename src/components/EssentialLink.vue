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
        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="mail"
          label="Inbox"
          caption="2 unread emails"
          default-opened
        >
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>
            <q-item-section> Admin_dashboard </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="teacher_dashboard">
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>
            <q-item-section> Teacher_dashboard </q-item-section>
          </q-item>
        </q-expansion-item>
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
    link: "/",
  },
  {
    title: "Teacher Dashboard",
    caption: "teacher related",
    link: "/teacher_dashboard",
  },
];
</script>
