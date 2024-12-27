<script>
import { useQuasar} from 'quasar'

export default {
  name: "Global_Actions_Delete_Item",
  props:['loading'],
  data() {
    return {
      $q: useQuasar(),
    }
  },
  methods:{
    Delete_Item() {
      this.$q.dialog({
        title: 'آیا اطمینان دارید',
        message: 'آیتم مورد نظر حذف شود ؟',
        ok: {
          glossy: true,
          color : "green-7"
        },
        cancel: {
          glossy: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.$emit("Set_Ok")
      }).onCancel(() => {

      }).onDismiss(() => {

      })
    },

  }

}
</script>

<template>
  <q-btn :loading="loading" title="حذف این آیتم" glossy class="q-ma-xs" color="red-8" icon="fas fa-trash" size="9px" round @click="Delete_Item"  />
</template>

<style scoped>

</style>