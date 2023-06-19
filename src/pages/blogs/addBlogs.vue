<template>
  <q-page class="q-pa-lg">
    <div class="text-h5">Add post</div>

    <q-card class="q-pa-lg q-mt-md">
      <div class="q-mb-md">
        <div class="q-mb-xs">Title <span class="text-red">*</span></div>
        <div>
          <q-input
            outlined
            v-model="title"
            ref="titleEl"
            :rules="[(val) => !!val || 'field is required']"
          />
        </div>
      </div>
      <div class="q-mb-md">
        <div class="q-mb-xs">Blog image <span class="text-red">*</span></div>
        <div>
          <q-file
            no-hover
            name="poster_file"
            v-model="file"
            ref="fileEl"
            :rules="[fileValidate]"
            filled
            label="Select poster image"
          />
        </div>
      </div>
      <div class="q-mb-md">
        <div class="q-mb-xs">Description <span class="text-red">*</span></div>
        <div>
          <q-editor
            v-model="editor"
            :definitions="{
              save: {
                tip: 'Save your work',
                icon: 'save',
                label: 'Save',
                handler: saveWork,
              },
              upload: {
                tip: 'Upload to cloud',
                icon: 'cloud_upload',
                label: 'Upload',
                handler: uploadIt,
              },
            }"
            :toolbar="[
              ['bold', 'italic', 'strike', 'underline'],
              ['upload', 'save'],
            ]"
          />
        </div>
      </div>
      <q-btn label="Add Post" color="blue" no-caps @click="addPost" />
    </q-card>
  </q-page>
</template>
<script setup>
import { ref } from "vue";

const title = ref(null);
const titleEl = ref(null);
const fileEl = ref(null);
const file = ref(null);
const editor = ref(null);

const fileValidate = (val) => {
  return val instanceof File ? true : "Please Attach File";
};

const addPost = () => {
  titleEl.value.validate();
  if (titleEl.value.hasError) {
    console.log("Faild");
    return;
  }
  console.log("passed");
};
</script>
