<script>
import { useQuasar} from 'quasar'

export default {
  name: "Global_Actions_Activation_Item",
  props:['loading','status'],
  data() {
    return {
      $q: useQuasar(),
    }
  },
  methods:{
    Change_Activation_Item() {
      this.$q.dialog({
        title: 'آیا اطمینان دارید',
        message: 'وضعیت آیتم مورد نظر تغییر کند ؟',
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

  <q-btn v-if="status" title="فعال"  glossy class="q-ma-xs" color="green-8" icon="fas fa-check" size="9px" round @click="Change_Activation_Item"  />
  <q-btn v-else title="غیرفعال"  glossy class="q-ma-xs" color="red-8" icon="fas fa-times" size="9px" round @click="Change_Activation_Item"  />

</template>

<style scoped>

</style>