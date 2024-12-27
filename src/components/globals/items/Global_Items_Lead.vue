<script>
export default {
  name: "Global_Items_Lead",
  props:['lead'],
}
</script>

<template>
  <q-chip v-if="lead && lead.name" color="indigo-2" size="15px">
    <q-avatar>
      <img src="assets/images/icons/lead.png">
    </q-avatar>
    <span class="user">{{ lead.name }}</span>
  </q-chip>
</template>

<style scoped>
.user{
  font-weight: 500;
  font-size: 12px;
}
</style>