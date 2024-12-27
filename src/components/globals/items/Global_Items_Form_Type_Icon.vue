<script>
export default {
  name: "Global_Items_Form_Type_Icon",
  props:['type']
}
</script>

<template>
  <q-icon color="teal-7" v-if="type === 'text'" name="fas fa-file-lines" size="sm"/>
  <q-icon color="teal-7" v-if="type === 'number'" name="fas fa-hashtag"  size="sm" />
  <q-icon color="teal-7" v-if="type === 'select'" name="fas fa-table-list"  size="sm" />
  <q-icon color="teal-7" v-if="type === 'checkbox'" name="fas fa-square-check"  size="sm" />
  <q-icon color="teal-7" v-if="type === 'textarea'" name="fas fa-file"  size="sm" />
  <q-icon color="teal-7" v-if="type === 'email'" name="fas fa-envelope"  size="sm" />
  <q-icon color="teal-7" v-if="type === 'password'" name="fas fa-lock"  size="sm" />

</template>

<style scoped>

</style>