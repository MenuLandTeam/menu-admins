<script>
export default {
  name: "Global_Filter_File_Type",
  props:['file'],
  created() {
    if (this.file){
      this.type = this.file;
    }
  },
  data(){
    return {
      type : 'unknown',
    }
  }
}
</script>

<template>
  <template v-if="type">
    <img v-if="type==='text'" src="assets/images/icons/text_file.png" :alt="type" width="36" >
    <img v-if="type==='image'" src="assets/images/icons/image_file.png" :alt="type" width="36" >
    <img v-if="type==='video'" src="assets/images/icons/video_file.png" :alt="type" width="36" >
    <img v-if="type==='archive'" src="assets/images/icons/archive_file.png" :alt="type" width="36" >
    <img v-if="type==='office'" src="assets/images/icons/office_file.png" :alt="type" width="36" >
    <img v-if="type==='audio'" src="assets/images/icons/audio_file.png" :alt="type" width="36" >
    <img v-if="type==='unknown'" src="assets/images/icons/unknown_file.png" :alt="type" width="36" >
    <strong class="text-dark">{{type}}</strong>

  </template>
</template>
<style scoped>

</style>