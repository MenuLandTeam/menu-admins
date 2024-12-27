<script>
export default {
  name: "Global_Loading_Shape",
  props:['size'],
  mounted() {
    if (this.size){
      this.width = this.size
    }
  },
  data(){
    return {
      width : 60
    }
  }
}
</script>

<template>
<div class="text-center q-pa-lg">
  <div style="margin: 0 auto" :style="'width:'+width+'px'" class="loader"></div>
  <div class="q-mt-md font-13 font-weight-600">درحال دریافت اطلاعات ... </div>
</div>


</template>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  aspect-ratio: 1;
  border-radius: 50%;
  background: #f03355;
  clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
  animation: l1 1.7s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes l1 {
  33% {border-radius: 0;background: #514b82 ;clip-path: polygon(0 0,100% 0,100% 100%,0 100%)}
  66% {border-radius: 0;background: #ffa516 ;clip-path: polygon(50% 0,50% 0,100% 100%,0 100%)}
}

</style>