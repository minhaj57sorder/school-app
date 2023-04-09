<template>
  <div>
    <q-card class="q-pa-md">
      <div class="flex justify-between items-center">
        <div>
          <div class="text-h6 text-bold">Today’s Lesson</div>
        </div>
        <div class="">
          <q-icon class="text-blue" name="fiber_manual_record" />
          <q-icon class="text-grey-4" name="fiber_manual_record" />
          <q-icon class="text-grey-4" name="fiber_manual_record" />
          <span class="text-blue q-ml-sm text-bold">View All</span>
          <q-icon class="text-h6 bg-grey-3 border q-ml-sm" name="more_vert" />
        </div>
      </div>
      <div class="q-mt-sm flex row">
        <div class="flex items-center">
          <div class="q-mr-xl">
            <q-circular-progress
              show-value
              :value="80"
              :thickness="0.2"
              size="80px"
              color="indigo"
              track-color="indigo-2"
              class="text-blue text-bold"
            >
              80
            </q-circular-progress>
          </div>
          <div class="q-mr-lg">
            <div class="flex q-pa-xs">
              <div>
                <div>
                  <q-icon
                    class="text-h6 q-mr-sm text-grey-9"
                    name="cast_for_education"
                  />
                </div>
              </div>
              <div>
                <div class="text-indigo-2">Class</div>
                <div class="text-bold">Electrical Engg</div>
              </div>
            </div>
            <div class="flex q-pa-xs">
              <div>
                <div>
                  <q-icon
                    class="text-h6 q-mr-sm text-grey-9"
                    name="import_contacts"
                  />
                </div>
              </div>
              <div>
                <div class="text-indigo-2">Lessons</div>
                <div class="text-bold">5 Lessons</div>
              </div>
            </div>
            <div class="flex q-pa-xs">
              <div>
                <div>
                  <q-icon class="text-h6 q-mr-sm text-grey-9" name="schedule" />
                </div>
              </div>
              <div>
                <div class="text-indigo-2">Time</div>
                <div class="text-bold">Lessons</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex q-ml-xl">
          <div>
            <div class="flex q-pa-xs">
              <div>
                <div>
                  <q-icon
                    class="text-h6 q-mr-sm text-grey-9"
                    name="foundation"
                  />
                </div>
              </div>
              <div>
                <div class="text-indigo-2">Asignment</div>
                <div class="text-bold">5 Asignment</div>
              </div>
            </div>
            <div class="flex q-pa-xs">
              <div>
                <div>
                  <q-icon
                    class="text-h6 q-mr-sm text-grey-9"
                    name="transfer_within_a_station"
                  />
                </div>
              </div>
              <div>
                <div class="text-indigo-2">Staff</div>
                <div class="text-bold">John Doe</div>
              </div>
            </div>
            <div class="flex q-pa-xs">
              <div>
                <div>
                  <q-icon class="text-h6 q-mr-sm text-grey-9" name="book" />
                </div>
              </div>
              <div>
                <div class="text-indigo-2">Lesson Learned</div>
                <div class="text-bold">10/50</div>
              </div>
            </div>
          </div>
          <div class="q-ml-xl margin">
            <div class="q-mb-md">
              <q-btn class="" color="white" text-color="black" label="Skip" />
            </div>
            <div>
              <q-btn class="btn-2" color="primary" label="Continue" />
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup></script>

<style scoped>
.q-btn {
  width: 120px;
  height: 30px;
}

.margin {
  margin-top: 50px;
}

.border {
  border-radius: 5px;
  height: 22px;
}

/* .btn-1 :hover {
  background-color: blue;
} */
</style>
