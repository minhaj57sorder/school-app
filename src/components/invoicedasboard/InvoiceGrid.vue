<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between q-pa-lg items-center">
      <div>
        <div class="text-h6 text-bold">Student</div>
      </div>
      <div>
        <div class="row text-grey-7" style="font-size: 16px">
          <span class="cursor-pointer q-mr-xs">Student</span>
          <span class="q-ml-xs">All Student</span>
        </div>
      </div>
    </div>

    <q-card class="q-pa-lg">
      <div class="row items-center q-col-gutter-md">
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-select
            outlined
            v-model="section"
            label="Please Select Class"
            :options="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 col-12">
          <q-btn label="Genaret Report" icon="signal_cellular_alt" />
        </div>
      </div>
    </q-card>

    <div class="row q-mt-lg justify-end items-center q-col-gutter-md">
      <div>
        <q-icon name="settings" size="35px" />
      </div>
      <div>
        <q-btn label="New Invoice" icon="add_circle" />
      </div>
    </div>
    <div class="row q-col-gutter-md q-mt-xl">
      <div
        class="col-lg-3 col-md-6 col-12"
        v-for="(item, index) in grid"
        :key="index"
      >
        <q-card>
          <div class="flex justify-between q-pa-md">
            <div>{{ item.id }}</div>
            <div><q-icon :name="item.icon" /></div>
          </div>
          <div class="row items-center q-pa-md bg-grey-5 q-mt-sm">
            <div>
              <q-avatar>
                <q-img style="width: 50px; height: 50px" :src="item.image" />
              </q-avatar>
            </div>
            <div class="text-h6 q-ml-md">{{ item.name }}</div>
          </div>
          <div class="row justify-between q-pa-md">
            <div>
              <div>
                <q-icon name="payments" /> <span>{{ item.ammaunt }}</span>
              </div>
              <div>{{ item.tk }}</div>
            </div>
            <div>
              <div><q-icon name="today" /> {{ date }}</div>
              <div>{{ item.month }}</div>
            </div>
          </div>
          <div class="q-pa-md"><q-btn label="Cancelled" color="warning" /></div>
        </q-card>
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn class="q-pa-sm" size="md">
        <q-circular-progress
          indeterminate
          rounded
          size="30px"
          color="lime"
          class="q-mr-sm"
        />
        Load More
      </q-btn>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
const section = ref("null");

const grid = [
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
  {
    id: "IN01560#$56",
    icon: "more_vert",
    image:
      "https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-04.jpg",
    name: "Barbara Moore",
    ammaunt: "Amount",
    tk: "$3,470",
    date: "Due Date",
    month: "10 Mar 2022",
  },
];
</script>

<style scoped></style>
