<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between q-mb-xl items-center">
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
    <q-card style="padding-bottom: 0px" class="q-pa-lg">
      <div>
        <div class="flex justify-between items-center">
          <div class="text-h6">Profile</div>
          <div class="text-h5 text-bold"><q-icon name="more_vert" /></div>
        </div>
      </div>

      <div>
        <div class="q-mt-lg">
          <q-img
            style="border-radius: 15px"
            src="https://preschool.dreamguystech.com/template/assets/img/profile-bg.jpg"
          />
        </div>
        <div>
          <div class="flex justify-between items-center q-pa-xl">
            <div class="flex q-col-gutter-xl">
              <div>
                <q-img
                  style="
                    width: 140px;
                    border: 8px solid rgb(189, 183, 183);
                    border-radius: 70px;
                    margin-top: -85px;
                  "
                  src="https://preschool.dreamguystech.com/template/assets/img/profile-user.jpg"
                  ><q-icon style="margin: 0 auto" name="border_color"
                /></q-img>
              </div>
              <div style="">
                <div class="text-bold text-h6">Bruce Willis</div>
                <div class="text-grey-7">Computer Science</div>
              </div>
            </div>

            <div>
              <div class="text-grey-7">Followers</div>
              <div class="text-bold text-h6">2850</div>
            </div>
            <div>
              <div class="text-grey-7">Followers</div>
              <div class="text-bold text-h6">2850</div>
            </div>
            <div>
              <div class="text-grey-7">Followers</div>
              <div class="text-bold text-h6">2850</div>
            </div>
            <div style="margin-right: 60px" class="row q-col-gutter-sm">
              <div><q-btn color="red" push label="Message" /></div>
              <div><q-btn color="blue" push label="Follow" /></div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
    <div class="row q-col-gutter-lg">
      <div class="col-lg-4 col-12">
        <q-card class="q-mt-lg q-pa-lg">
          <div class="q-mb-lg">
            <div class="text-h6">Personal Details:</div>
          </div>
          <div
            class="row q-mb-lg q-col-gutter-sm"
            v-for="(item, index) in deta"
            :key="index"
          >
            <div><q-icon class="text-h5 text-blue" :name="item.icon" /></div>
            <div>
              <div class="text-bold">{{ item.name }}</div>
              <div>{{ item.title }}</div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-8 col-12">
        <q-card class="q-mt-lg q-pa-lg">
          <div class="q-mb-lg">
            <div class="text-bold text-h6">About Me</div>
            <div class="q-mt-md text-bold text-h6">Hello I am Daisy Parks</div>
            <div class="q-mt-md text-grey-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur officia deserunt mollit anim id est
              laborum.

              <div class="q-mt-md">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </div>
            </div>
            <div class="q-mt-md text-bold text-h6">Education</div>
            <div class="q-mt-md">2008 - 2009</div>
            <div class="q-mt-md">
              Secondary Schooling at xyz school of secondary education, Mumbai.
            </div>
            <div class="q-mt-md">
              Higher Secondary Schooling at xyz school of higher secondary
              education, Mumbai.
            </div>
            <div class="q-mt-md">2012 - 2015</div>
            <div class="q-mt-md">
              Bachelor of Science at Abc College of Art and Science, Chennai.
            </div>
            <div class="q-mt-md">2015 - 2017</div>
            <div class="q-mt-md">
              Master of Science at Cdm College of Engineering and Technology,
              Pune.
            </div>
            <div class="q-mt-md">2008 - 2009</div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-4 col-12">
        <q-card class="q-pa-lg">
          <div class="q-mb-lg">
            <div class="text-h6">Skills :</div>
          </div>
          <div>
            <div class="row justify-between q-mt-lg">
              <div>Photoshop</div>
              <div>90%</div>
            </div>
            <q-linear-progress
              rounded
              size="10px"
              :value="progress"
              color="warning"
              track-color="orange-2"
              class="q-mt-sm"
            />
          </div>
          <div>
            <div class="row justify-between q-mt-lg">
              <div>Code Editor</div>
              <div>75%</div>
            </div>
            <q-linear-progress
              rounded
              size="10px"
              :value="progress1"
              color="secondary"
              track-color="orange-2"
              class="q-mt-sm"
            />
          </div>
          <div>
            <div class="row justify-between q-mt-lg">
              <div>Illustrator</div>
              <div>95%</div>
            </div>
            <q-linear-progress
              rounded
              size="10px"
              :value="progress2"
              color="blue"
              track-color="orange-2"
              class="q-mt-sm"
            />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const progress = ref(0.9);
const progress1 = ref(0.75);
const progress2 = ref(0.95);

const deta = [
  {
    icon: "person",
    name: "Name",
    title: "Bruce Willis",
  },
  {
    icon: "apartment",
    name: "Department",
    title: "Computer Science",
  },
  {
    icon: "phone_in_talk",
    name: "Mobile",
    title: "+91 89657 48512",
  },
  {
    icon: "mail",
    name: "Email",
    title: "daisy@gmail.com",
  },
  {
    icon: "person",
    name: "Gender",
    title: "Male",
  },
  {
    icon: "today",
    name: "Date of Birthme",
    title: "22 Apr 1995",
  },
  {
    icon: "language",
    name: "Language",
    title: "English, French, Bangla",
  },
  {
    icon: "home",
    name: "Address",
    title: "480, Estern Avenue, New York",
  },
];
</script>
