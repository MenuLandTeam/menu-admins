<script>
//#TODO Show full and short date by click
export default {
  name: "Global_Filter_Date_Create",
  props:['date'],
  data(){
    return{
      show:true
    }
  },
  computed:{
    ShowDate(){
      if (this.show){
        return this.$filters.date_jalali(this.date)
      }else {
        return this.$filters.date_jalali(this.date,"jYYYY/jM/jD")
      }
    }
  }
}
</script>

<template>
  <q-chip @click="show=!show;ShowDate" v-if="date" dir="ltr" color="grey-10" text-color="white" size="sm" class="create cursor-pointer">
    {{ShowDate}}
  </q-chip>
</template>

<style scoped>
.create{
  font-size: 12px;
  font-weight: 450;
}
</style>