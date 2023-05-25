<template>
  <q-page class="q-pa-lg">
    <div class="">
      <div class="border bg-grey-2 row justify-end items-center q-pa-md">
        <div class="q-mr-md cursor-pointer">
          <q-icon name="arrow_back_ios" /> <span>Back to invoice List </span>
        </div>
        <div class="q-mr-md cursor-pointer">
          <q-icon name="visibility" /><span class="q-ml-sm">Preview</span>
        </div>
        <div class="q-mr-md"><q-btn color="blue" label="Delete Invoice" /></div>
        <div><q-btn color="blue" label="Save Draft" /></div>
      </div>
    </div>

    <q-card class="q-mt-lg q-pa-md">
      <div class="row q-col-gutter-md">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div>
            <div>
              <div>Customer Name</div>
              <div class="q-mt-md">
                <q-select outlined label="Standard" />
              </div>
            </div>
            <div class="q-mt-md">
              <div>Phone Number</div>
              <div class="q-mt-md">
                <q-select outlined label="Standard" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
          <div>
            <div>
              <div>Customer Name</div>
              <div class="q-mt-md">
                <q-select outlined label="Standard" />
              </div>
            </div>
            <div class="q-mt-md">
              <div>Phone Number</div>
              <div class="q-mt-md">
                <q-select outlined label="Standard" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
          <div>
            <div>
              <div>Customer Name</div>
              <div class="q-mt-md">
                <q-select outlined label="Standard" />
              </div>
            </div>
            <div class="q-mt-md">
              <div>Phone Number</div>
              <div class="q-mt-md">
                <q-select outlined label="Standard" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <q-separator inset class="q-mt-xl" />
      <div class="q-mt-lg row q-col-gutter-md">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="row justify-between">
            <div>Invoice From</div>
            <div>Edit Address</div>
          </div>
          <div>
            <div>Darren Elder</div>
            <div>806 Twin Willow Lane, Old Forge,</div>
            <div>Newyork, USA</div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <div>
            <div>Invoice From</div>
          </div>
          <div>
            <div>Darren Elder</div>
            <div>806 Twin Willow Lane, Old Forge,</div>
            <div>Newyork, USA</div>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<style scoped>
.border {
  border-radius: 10px;
}
</style>
