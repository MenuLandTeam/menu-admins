<script>
export default {
  name: "Global_Items_User",
  props:['user'],
}
</script>

<template>
  <q-chip v-if="user && user.name" color="grey-5" size="13px">
    <q-avatar>
      <img src="assets/images/icons/user.png">
    </q-avatar>
    <span class="user">{{ user.name }}</span>
  </q-chip>
</template>

<style scoped>
.user{
  font-weight: 450;
  font-size: 12px;
}
</style>