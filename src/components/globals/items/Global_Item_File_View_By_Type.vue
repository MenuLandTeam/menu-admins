<script>
export default {
  name: "Global_Item_File_View_By_Type",
  props:['file'],
  methods:{
      DownloadFile(){
        const link = document.createElement('a');
        link.href = this.VUE_APP_ASSET+this.file.file_url;
        link.download = this.file.file_name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
}
</script>

<template>

  <template v-if="file.file_type && file.file_url">
    <template v-if="file.file_type === 'image'">
      <div class="text-center">
        <q-img  class="rounded-borders q-mt-sm responsive-image-box" :src="VUE_APP_ASSET+file.file_url">
        </q-img>
      </div>
    </template>
    <template v-if="file.file_type === 'audio'">
      <div class="text-center q-mt-md">
        <audio controls style="width: 100%;">
          <source :src="VUE_APP_ASSET+file.file_url" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </template>
    <template v-if="file.file_type === 'video'">
      <div class="text-center q-mt-md">
        <video class="responsive-image-box" controls>
          <source :src="VUE_APP_ASSET+file.file_url" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </template>
    <template v-if="file.file_type === 'archive'">
      <div class=" q-mt-md">
          <q-btn glossy @click="DownloadFile" color="pink-8" class="font-13"  icon-right="fas fa-archive text-white"  :label="'ZIP File : '+file.file_name+' ( '+ this.$filters.file_size(file.file_size) +' )' "></q-btn>
      </div>
    </template>
    <template v-if="file.file_type === 'office'">
      <div class=" q-mt-md">
        <q-btn glossy @click="DownloadFile" color="blue-9" class="font-13"  icon-right="fab fa-windows text-white"  :label="'Office File : '+file.file_name+' ( '+ this.$filters.file_size(file.file_size) +' )' "></q-btn>
      </div>
    </template>
    <template v-if="file.file_type === 'text'">
      <div class=" q-mt-md">
        <q-btn glossy @click="DownloadFile" color="deep-orange-7" class="font-13"  icon-right="fas fa-file-text text-white"  :label="'Text File : '+file.file_name+' ( '+ this.$filters.file_size(file.file_size) +' )' "></q-btn>
      </div>
    </template>

  </template>

</template>

<style scoped>

</style>