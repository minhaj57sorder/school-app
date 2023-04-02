<template>
  <q-card class="q-pa-lg">
    <div class="row justify-between">
      <div class="">
        <div class="Upcoming">Upcoming Even</div>
      </div>
      <div><q-icon class="add text-h6" name="add"></q-icon></div>
    </div>
    <div class="row justify-between q-mt-lg upcome-event-date">
      <div class="">
        <div class="Month">10 Jan</div>
      </div>
      <div><q-icon class="dot text-h6" name="more_horiz"></q-icon></div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>
          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mb-sm q-mt-lg">
      <div class="">
        <div class="Month">10 Jan</div>
      </div>
      <div><q-icon class="dot text-h6" name="more_horiz"></q-icon></div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
    <div class="row justify-between q-mt-sm">
      <div class="">
        <div class="row items-center">
          <div class="q-mr-md">08:00 am</div>

          <div class="calendar-box">
            <div class="calandar-event-name">
              <div>Botony</div>
              <div>Lorem ipsum sit amet</div>
            </div>
          </div>
        </div>
      </div>
      <div>08:00 - 09:00 am</div>
    </div>
  </q-card>
</template>

<script setup></script>

<style scoped>
.Upcoming {
  font-size: 18px;
  font-weight: 400;
}
.add {
  background-color: rgba(129, 128, 128, 0.068);
  width: 20px;
  height: 20px;
  color: black;
  padding: 5px;
}
.Month {
  font-size: 16px;
  font-weight: 600;
}
.calendar-box::before {
  content: "";
  width: 4px;
  height: 85%;
  position: absolute;
  border-radius: 25px;
  background-color: blueviolet;
}

.calendar-box {
  display: flex;
  align-items: center;
  position: relative;
}

.calendar-box:before {
  content: "";
  position: absolute;
  background: #3d5ee1;
  width: 4px;
  height: 100%;
  border-radius: 25px;
}

.calandar-event-name {
  padding-left: 10px;
}

.upcome-event-date:before {
  content: "";
  position: absolute;
  background: #ebebeb;
  width: 100%;
  height: 1px;
  top: 10px;
}

.upcome-event-date {
  position: relative;
  margin: 38px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
