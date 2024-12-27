<script>
export default {
  name: "Template_Title"
}
</script>

<template>

  <q-card flat>
    <q-card-section class="q-py-xs">
      <div class="text-subtitle1 font-weight-600 font-17">
        {{this.$route.meta.title}}
      </div>
      <div class="text-subtitle2 text-grey-7">
        {{this.$route.meta.subtitle}}

      </div>
      <q-separator class="q-mt-xs"></q-separator>
    </q-card-section>
  </q-card>


</template>

<style scoped>

</style>