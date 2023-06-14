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
      <div class="row q-col-gutter-md items-center">
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
          <div class="text-h6 q-mb-md">Invoice details</div>
          <div style="border: 1px solid grey; border-radius: 5px">
            <div style="border-bottom: 1px solid grey" class="q-pa-lg">
              Invoice No. <span class="text-blue">IN093439#@09</span>
            </div>
            <div class="row">
              <div class="q-pa-lg col-6" style="border-right: 1px solid black">
                Date <span class="text-blue">25/05/2022</span>
              </div>
              <div class="q-pa-lg">
                Date <span class="text-blue">25/05/2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
          <div>
            <q-checkbox model="teal" label="Enable Tax" color="teal" />
          </div>
          <div>
            <q-checkbox model="teal" label="Recurring invoice" color="teal" />
          </div>
        </div>
      </div>
      <q-separator inset class="q-mt-xl" />
      <div class="q-mt-lg row q-col-gutter-md">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="row justify-between q-mb-md items-center">
            <div class="text-h6">Invoice From</div>
            <div class="text-blue">Edit Address</div>
          </div>
          <div>
            <div>Darren Elder</div>
            <div>806 Twin Willow Lane, Old Forge,</div>
            <div>Newyork, USA</div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="q-mb-md">
            <div class="text-h6">Invoice From</div>
          </div>
          <div>
            <div>Darren Elder</div>
            <div>806 Twin Willow Lane, Old Forge,</div>
            <div>Newyork, USA</div>
          </div>
        </div>
      </div>
      <div class="text-h6 q-mt-lg q-mb-md">Item Details</div>
      <div>
        <q-markup-table class="shadow-0" separator="horizontal">
          <thead>
            <tr
              class="items-center"
              style="background-color: rgba(207, 198, 198, 0.096)"
            >
              <td>Item</td>
              <td>Category</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Ammount</td>
              <td>Discount</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td>
                <div class="row items-center justify-between">
                  <div><q-icon name="add" /></div>
                  <div><q-icon name="content_copy" /></div>
                  <div><q-icon name="delete" /></div>
                </div>
              </td>
            </tr>
            <tr>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td><q-input outlined /></td>
              <td>
                <div class="row items-center justify-between">
                  <div><q-icon name="add" /></div>
                  <div><q-icon name="content_copy" /></div>
                  <div><q-icon name="delete" /></div>
                </div>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
      <q-separator class="q-mt-sm" />
      <div class="row q-mt-lg q-col-gutter-md">
        <div class="col-lg-7 col-md-6 col-sm-12 col-12">
          <div class="q-pa-md text-h6">More Fields</div>
          <div class="q-pa-md" style="border: 1px solid black">
            <div class="q-mb-md text-bold">Payment Details</div>
            <div><q-btn size="35px" label="Add Bank Details" icon="add" /></div>
          </div>
          <div class="q-mt-md">
            <q-expansion-item
              style="border: 1px solid rgba(172, 167, 167, 0.37)"
              header-class="text-grey-6"
              switch-toggle-side
              expand-separator
              icon="add"
              label="Add Terms & Conditions"
            >
              <q-card>
                <q-input
                  v-model="textareaModel"
                  filled
                  clearable
                  type="textarea"
                  color="red-12"
                  label="Textarea with shadow text"
                  hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
                  :shadow-text="textareaShadowText"
                  @keydown="processTextareaFill"
                  @focus="processTextareaFill"
                />
              </q-card>
            </q-expansion-item>
          </div>
          <div class="q-mt-md">
            <q-expansion-item
              style="border: 1px solid rgba(172, 167, 167, 0.37)"
              header-class="text-grey-6"
              switch-toggle-side
              expand-separator
              icon="add"
              expand-icon="edite"
              expanded-icon="more_vert"
              label="Add Terms & Conditions"
            >
              <q-card>
                <q-input
                  v-model="textareaModel"
                  filled
                  clearable
                  type="textarea"
                  color="red-12"
                  label="Textarea with shadow text"
                  hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
                  :shadow-text="textareaShadowText"
                  @keydown="processTextareaFill"
                  @focus="processTextareaFill"
                />
              </q-card>
            </q-expansion-item>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
          <div class="q-pa-md text-h6">Summary</div>
          <div class="" style="border: 1px solid black">
            <div class="q-pa-md">Texable Ammount</div>
            <div class="q-pa-md">Round Off</div>
            <div class="q-pa-md"><q-icon name="add" /> Additional Charge</div>
            <div style="border-bottom: 1px solid rgb(0, 0, 0)" class="q-pa-md">
              <q-icon name="add" /> Additional Charge
            </div>
            <div class="row justify-between q-pa-md">
              <div>Total Ammount</div>
              <div>$ 894.00</div>
            </div>
          </div>
          <div class="q-mt-md" style="width: 300px; float: right">
            <div
              class="q-pa-lg text-center"
              style="border: 2px dotted rgba(0, 0, 0, 0.281)"
            >
              Upload Sign
            </div>
            <div class="q-mt-md">
              <q-input outlined label="Name Of The Signatuaory" />
            </div>
            <div class="q-mt-md">
              <q-btn
                style="float: right"
                color="blue"
                label="Save Invoice"
                size="16px"
              />
            </div>
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

.q-table thead tr {
  height: 60px;
  border-bottom: 1px solid red !important;
}
</style>
<script setup></script>
