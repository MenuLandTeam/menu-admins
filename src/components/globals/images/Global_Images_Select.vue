<script>
export default {
  name: "Global_Images_Select",
  props:['image']
}
</script>

<template>
  <q-img :src="image" class="image-size" loading="lazy">
  </q-img>
</template>

<style scoped>


</style>