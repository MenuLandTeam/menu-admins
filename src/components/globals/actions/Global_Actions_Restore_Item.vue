<script>
import { useQuasar} from 'quasar'

export default {
  name: "Global_Actions_Restore_Item",
  props:['loading'],
  data() {
    return {
      $q: useQuasar(),
    }
  },
  methods:{
    Restore_Item() {
      this.$q.dialog({
        title: 'آیا اطمینان دارید',
        message: 'آیتم مورد نظر بازگردانی شود ؟',
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
  <q-btn :loading="loading" glossy class="q-ma-xs" color="green-6" icon="fas fa-refresh" size="9px" round @click="Restore_Item"  />
</template>

<style scoped>

</style>