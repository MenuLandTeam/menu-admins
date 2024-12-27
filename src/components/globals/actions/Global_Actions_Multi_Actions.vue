<script>
import { useQuasar} from 'quasar'

export default {
  name: "Global_Actions_Multi_Actions",
  props:['items','action_loading'],
  data(){
    return {
      $q: useQuasar(),
    }

  },
  methods:{
    Items_Delete(){
      this.$q.dialog({
        title: 'آیا اطمینان دارید',
        message: 'آیتم های مورد نظر حذف شودند ؟',
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
        this.$emit("Delete_Ok")
      }).onCancel(() => {

      }).onDismiss(() => {

      })

    }
  }
}
</script>

<template>

  <q-btn :loading="action_loading" class="q-ml-md font-14 animation-fade-in" color="dark" size="sm" glossy label="انجام عملیات گروهی">
    <q-menu class="bg-glossy"
            transition-show="rotate"
            transition-hide="rotate"
    >
      <q-list  >
        <q-item clickable class="q-pt-md" @click="this.$emit('Edit_Ok')">
          <q-icon color="blue" name="fas fa-edit" class="font-20"></q-icon>
          <span class="q-ml-sm text-white">ویرایش انتخاب شده ها</span>
        </q-item>
        <q-separator color="grey-6"></q-separator>
        <q-item :disable="action_loading" clickable @click="Items_Delete" class="q-pt-md">
          <q-icon name="fas fa-trash" color="red" class="font-20"></q-icon>
          <span class="q-ml-sm text-white">حذف انتخاب شده ها</span>
        </q-item>
        <q-separator></q-separator>
        <q-item :disable="action_loading" clickable class="q-pt-md" @click="this.$emit('SMS_Ok')">
          <q-icon name="fas fa-message" color="green" class="font-20"></q-icon>
          <span class="q-ml-sm text-white">ارسال پیامک</span>
        </q-item>
        <q-separator></q-separator>
        <q-item :disable="action_loading" clickable class="q-pt-md" @click="this.$emit('Email_Ok')">
          <q-icon name="fas fa-envelope" color="yellow-9" class="font-20"></q-icon>
          <span class="q-ml-sm text-white">ارسال ایمیل</span>
        </q-item>

      </q-list>
    </q-menu>
  </q-btn>






</template>

<style scoped>

</style>