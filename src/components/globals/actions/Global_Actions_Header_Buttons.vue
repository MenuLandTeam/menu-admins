<script>
export default {
  name: "Global_Actions_Header_Buttons",
  props:['route','index','create','archive']
}
</script>

<template>
  <template v-if="route">

    <q-btn v-if="create" :to="{name : route+'_create'}" class="float-right" color="indigo-8"  glossy icon="fas fa-plus" size="11px" round>
      <q-tooltip  transition-show="scale" transition-hide="scale" class="bg-blue-grey-9 font-12">
        افزودن آیتم
      </q-tooltip>
    </q-btn>
    <q-btn v-if="index" :to="{name : route+'_index'}" class="float-right q-mr-sm" color="blue-8"  glossy icon="fas fa-list" size="11px" round>
      <q-tooltip  transition-show="scale" transition-hide="scale" class="bg-blue-grey-9 font-12">
        لیست موراد
      </q-tooltip>
    </q-btn>
    <q-btn v-if="archive" :to="{name : route+'_trash'}" class="float-right q-mr-sm" color="red-8"  glossy icon="fas fa-archive" size="11px" round>
      <q-tooltip  transition-show="scale" transition-hide="scale" class="bg-blue-grey-9 font-12">
        آرشیو شده
      </q-tooltip>
    </q-btn>


  </template>

</template>

<style scoped>

</style>