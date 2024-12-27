<script>
export default {
  name: "Global_Images_Animation_Info",
  props : ['text']

}
</script>

<template>
  <div class="text-center q-mt-md q-mb-md">
    <img src="assets/images/animations/info.svg" width="260" alt="">
    <div>
      <strong class="text-red-7"> {{text}} </strong>
    </div>
  </div>
</template>

<style scoped>

</style>