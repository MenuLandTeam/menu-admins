<script>
export default {
  name: "Global_Validations_Errors",
  props:['errors','classes']
}
</script>

<template>

  <div v-if="errors" class="text-red q-mb-sm" :class="classes"  v-for="(error,index) in errors" :key="index">
    {{ error }}
  </div>

</template>

<style scoped>

</style>