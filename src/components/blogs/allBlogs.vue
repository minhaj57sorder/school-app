<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between">
      <div class="row q-col-gutter-md items-center">
        <div>
          <q-btn
            padding="10px"
            label="Active Blogs"
            outline
            :class="[!activeBlogsModel ? 'bg-white' : 'bg-grey-4']"
            :text-color="!activeBlogsModel ? 'blue' : 'black'"
            @click="
              () => {
                activeBlogsModel = false;
              }
            "
          />
        </div>
        <div>
          <q-btn
            padding="10px"
            label="Panding Blogs"
            outline
            :class="[activeBlogsModel ? 'bg-white' : 'bg-grey-4']"
            :text-color="activeBlogsModel ? 'blue' : 'black'"
            @click="
              () => {
                activeBlogsModel = true;
              }
            "
          />
        </div>
      </div>
    </div>
    <div class="q-mt-lg row q-col-gutter-md">
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
        <q-card class="q-pa-md">
          <div style="position: relative">
            <div style="position: relative">
              <q-img
                src="https://preschool.dreamguystech.com/template/assets/img/category/blog-6.jpg"
              />
            </div>
            <div
              style="
                background-color: rgba(255, 252, 252, 0.895);
                width: 50px;
                padding: 5px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                top: 10px;
                left: 10px;
              "
            >
              <q-icon name="visibility" />
              <span>250</span>
            </div>
          </div>
          <div class="row items-center q-col-gutter-md q-mt-sm">
            <div>
              <q-img
                style="border-radius: 9px"
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg"
              />
            </div>
            <div>
              <div>Vincent</div>
              <div class="text-grey-7">
                <q-icon name="timer" class="q-mr-xs" />4 dec 2022
              </div>
            </div>
          </div>
          <div class="q-mt-md">
            Learning is an objective, Lorem Ipsum is not Lorem ipsum dolor sit
            amet, consectetur em adipiscing elit, sed do eiusmod tempor.sdf
          </div>

          <div class="row justify-between items-center q-mt-sm">
            <div class="flex items-center">
              <q-btn
                size="md"
                style="height: 35px; border-radius: 8px"
                icon-left
              >
                <q-icon name="border_color" style="font-size: 14px" />
                <span class="q-ml-sm">Edit</span>
              </q-btn>
              <div
                style="border-radius: 7px; padding: 6px; width: 70px"
                class="cursor-pointer bg-green-2 text-green-10"
              >
                <q-icon class="q-mr-sm" name="border_color" />Edit
              </div>
              <div
                style="border-radius: 7px; padding: 6px; width: 80px"
                class="cursor-pointer bg-red-2 text-red-10 q-ml-sm q-pa-xs"
              >
                <q-icon class="q-mr-sm" name="delete" />Delete
              </div>
            </div>
            <div v-if="activeBlogsModel" class="cursor-pointer text-red">
              <q-toggle v-model="card1Toggler" color="green" />
            </div>
            <div v-else class="cursor-pointer text-red">
              <q-icon name="visibility_off" /> Inactive
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
        <q-card class="q-pa-md">
          <div>
            <div style="position: relative">
              <q-img
                src="https://preschool.dreamguystech.com/template/assets/img/category/blog-6.jpg"
              />
            </div>
            <div
              style="
                background-color: rgba(255, 252, 252, 0.895);
                width: 50px;
                padding: 5px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                top: 10px;
                left: 10px;
              "
            >
              <q-icon name="visibility" />
              <span>250</span>
            </div>
          </div>
          <div class="row items-center q-col-gutter-md q-mt-sm">
            <div>
              <q-img
                style="border-radius: 9px"
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg"
              />
            </div>
            <div>
              <div>Vincent</div>
              <div class="text-grey-7">
                <q-icon name="timer" class="q-mr-xs" />4 dec 2022
              </div>
            </div>
          </div>
          <div class="q-mt-md">
            Learning is an objective, Lorem Ipsum is not Lorem ipsum dolor sit
            amet, consectetur em adipiscing elit, sed do eiusmod tempor.
          </div>

          <div class="row justify-between items-center q-mt-sm">
            <div class="flex items-center">
              <div
                style="
                  border-radius: 7px;
                  background-color: rgba(230, 32, 32, 0.807);
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 70px;
                "
                class="cursor-pointer"
              >
                <q-icon class="q-mr-sm" name="border_color" />Edit
              </div>
              <div
                style="
                  border-radius: 7px;
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 80px;
                "
                class="cursor-pointer bg-green q-ml-sm q-pa-xs"
              >
                <q-icon class="q-mr-sm" name="delete" />Delete
              </div>
            </div>
            <div class="cursor-pointer text-red">
              <q-icon name="visibility_off" /> Inactive
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
        <q-card class="q-pa-md">
          <div>
            <div style="position: relative">
              <q-img
                src="https://preschool.dreamguystech.com/template/assets/img/category/blog-6.jpg"
              />
            </div>
            <div
              style="
                background-color: rgba(255, 252, 252, 0.895);
                width: 50px;
                padding: 5px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                top: 120px;
                left: 35px;
              "
            >
              <q-icon name="visibility" />
              <span>250</span>
            </div>
          </div>
          <div class="row items-center q-col-gutter-md q-mt-sm">
            <div>
              <q-img
                style="border-radius: 9px"
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg"
              />
            </div>
            <div>
              <div>Vincent</div>
              <div class="text-grey-7">
                <q-icon name="timer" class="q-mr-xs" />4 dec 2022
              </div>
            </div>
          </div>
          <div class="q-mt-md">
            Learning is an objective, Lorem Ipsum is not Lorem ipsum dolor sit
            amet, consectetur em adipiscing elit, sed do eiusmod tempor.
          </div>

          <div class="row justify-between items-center q-mt-sm">
            <div class="flex items-center">
              <div
                style="
                  border-radius: 7px;
                  background-color: rgba(230, 32, 32, 0.807);
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 70px;
                "
                class="cursor-pointer"
              >
                <q-icon class="q-mr-sm" name="border_color" />Edit
              </div>
              <div
                style="
                  border-radius: 7px;
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 80px;
                "
                class="cursor-pointer bg-green q-ml-sm q-pa-xs"
              >
                <q-icon class="q-mr-sm" name="delete" />Delete
              </div>
            </div>
            <div class="cursor-pointer text-red">
              <q-icon name="visibility_off" /> Inactive
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
        <q-card class="q-pa-md">
          <div>
            <div style="position: relative">
              <q-img
                src="https://preschool.dreamguystech.com/template/assets/img/category/blog-6.jpg"
              />
            </div>
            <div
              style="
                background-color: rgba(255, 252, 252, 0.895);
                width: 50px;
                padding: 5px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                top: 120px;
                left: 35px;
              "
            >
              <q-icon name="visibility" />
              <span>250</span>
            </div>
          </div>
          <div class="row items-center q-col-gutter-md q-mt-sm">
            <div>
              <q-img
                style="border-radius: 9px"
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg"
              />
            </div>
            <div>
              <div>Vincent</div>
              <div class="text-grey-7">
                <q-icon name="timer" class="q-mr-xs" />4 dec 2022
              </div>
            </div>
          </div>
          <div class="q-mt-md">
            Learning is an objective, Lorem Ipsum is not Lorem ipsum dolor sit
            amet, consectetur em adipiscing elit, sed do eiusmod tempor.
          </div>

          <div class="row justify-between items-center q-mt-sm">
            <div class="flex items-center">
              <div
                style="
                  border-radius: 7px;
                  background-color: rgba(230, 32, 32, 0.807);
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 70px;
                "
                class="cursor-pointer"
              >
                <q-icon class="q-mr-sm" name="border_color" />Edit
              </div>
              <div
                style="
                  border-radius: 7px;
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 80px;
                "
                class="cursor-pointer bg-green q-ml-sm q-pa-xs"
              >
                <q-icon class="q-mr-sm" name="delete" />Delete
              </div>
            </div>
            <div class="cursor-pointer text-red">
              <q-icon name="visibility_off" /> Inactive
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
        <q-card class="q-pa-md">
          <div>
            <div style="position: relative">
              <q-img
                src="https://preschool.dreamguystech.com/template/assets/img/category/blog-6.jpg"
              />
            </div>
            <div
              style="
                background-color: rgba(255, 252, 252, 0.895);
                width: 50px;
                padding: 5px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                top: 120px;
                left: 35px;
              "
            >
              <q-icon name="visibility" />
              <span>250</span>
            </div>
          </div>
          <div class="row items-center q-col-gutter-md q-mt-sm">
            <div>
              <q-img
                style="border-radius: 9px"
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg"
              />
            </div>
            <div>
              <div>Vincent</div>
              <div class="text-grey-7">
                <q-icon name="timer" class="q-mr-xs" />4 dec 2022
              </div>
            </div>
          </div>
          <div class="q-mt-md">
            Learning is an objective, Lorem Ipsum is not Lorem ipsum dolor sit
            amet, consectetur em adipiscing elit, sed do eiusmod tempor.
          </div>

          <div class="row justify-between items-center q-mt-sm">
            <div class="flex items-center">
              <div
                style="
                  border-radius: 7px;
                  background-color: rgba(230, 32, 32, 0.807);
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 70px;
                "
                class="cursor-pointer"
              >
                <q-icon class="q-mr-sm" name="border_color" />Edit
              </div>
              <div
                style="
                  border-radius: 7px;
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 80px;
                "
                class="cursor-pointer bg-green q-ml-sm q-pa-xs"
              >
                <q-icon class="q-mr-sm" name="delete" />Delete
              </div>
            </div>
            <div class="cursor-pointer text-red">
              <q-icon name="visibility_off" /> Inactive
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
        <q-card class="q-pa-md">
          <div>
            <div style="position: relative">
              <q-img
                src="https://preschool.dreamguystech.com/template/assets/img/category/blog-6.jpg"
              />
            </div>
            <div
              style="
                background-color: rgba(255, 252, 252, 0.895);
                width: 50px;
                padding: 5px;
                height: 30px;
                border-radius: 10px;
                position: absolute;
                top: 120px;
                left: 35px;
              "
            >
              <q-icon name="visibility" />
              <span>250</span>
            </div>
          </div>
          <div class="row items-center q-col-gutter-md q-mt-sm">
            <div>
              <q-img
                style="border-radius: 9px"
                width="50px"
                src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg"
              />
            </div>
            <div>
              <div>Vincent</div>
              <div class="text-grey-7">
                <q-icon name="timer" class="q-mr-xs" />4 dec 2022
              </div>
            </div>
          </div>
          <div class="q-mt-md">
            Learning is an objective, Lorem Ipsum is not Lorem ipsum dolor sit
            amet, consectetur em adipiscing elit, sed do eiusmod tempor.
          </div>

          <div class="row justify-between items-center q-mt-sm">
            <div class="flex items-center">
              <div
                style="
                  border-radius: 7px;
                  background-color: rgba(230, 32, 32, 0.807);
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 70px;
                "
                class="cursor-pointer"
              >
                <q-icon class="q-mr-sm" name="border_color" />Edit
              </div>
              <div
                style="
                  border-radius: 7px;
                  color: rgb(255, 250, 250);
                  padding: 6px;
                  width: 80px;
                "
                class="cursor-pointer bg-green q-ml-sm q-pa-xs"
              >
                <q-icon class="q-mr-sm" name="delete" />Delete
              </div>
            </div>
            <div class="cursor-pointer text-red">
              <q-icon name="visibility_off" /> Inactive
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="5" direction-links />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const current = ref(3);
const activeBlogsModel = ref(false);
const card1Toggler = ref(true);
</script>
