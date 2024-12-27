<script>
export default {
  name: "Global_Searching_Sorting",
  data(){
    return {
      option_select:"id",
      type_select : "desc",
      options :[
        {
          label:"ID",
          value:"id",
        },
        {
          label:"تاریخ ایجاد",
          value:"created_at",
        },
        {
          label:"تاریخ ویرایش",
          value:"updated_at",
        }
      ],
      types:[
        {
          label : "صعودی",
          value : "asc"
        },
        {
          label : "نزولی",
          value : "desc"
        }
      ],

    }
  },
  methods : {
    Sorting(){
      this.$emit("DoSorting",{sort_by : this.option_select,sort_type : this.type_select})
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <strong class="text-teal-8">
        مرتب سازی
      </strong>
    </div>
    <div class="col-md-6 q-mt-sm row">
      <div class="col-md-6 q-pa-sm">
        <q-select
            outlined
            dense
            v-model="option_select"
            transition-show="flip-up"
            transition-hide="flip-down"
            label="بر اساس"
            :options="options"
            emit-value
            map-options
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

      </div>
      <div class="col-md-6 q-pa-sm">
        <q-select
            outlined
            dense
            v-model="type_select"
            transition-show="flip-up"
            transition-hide="flip-down"
            label="نوع"
            :options="types"
            emit-value
            map-options
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

      </div>
      <div class="col-12 q-pa-sm">
        <q-btn @click="Sorting" color="teal" label="اعمال مرتب سازی" glossy icon="fas fa-sort" class="font-13"></q-btn>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>