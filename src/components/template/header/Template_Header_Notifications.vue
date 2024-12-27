<script>

export default {
  name: "Template_Header_Notifications",
  data(){
    return {
      user : null
    }
  },
  methods:{

  },
  mounted() {

  }

}
</script>

<template>
  <q-btn v-if="user" title="اعلانات" round icon="fas fa-bell" size="14px" :loading="!user">
    <q-badge color="red" floating>4</q-badge>
    <q-menu
        transition-show="flip-right"
        transition-hide="flip-left"
         style="width: 360px">
      <q-card-section class="q-pl-none q-pr-none">
        <div class="text-center q-pb-sm">
          <strong class="text-red-8 font-17">اعلانات</strong>
        </div>
        <q-separator/>
        <q-list>
          <template v-for="i in 3">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="assets/images/icons/megaphone.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">اطلاعیه</q-item-label>
                <q-item-label caption lines="2">
                  جزء کوتاهی از پیام نوتیفیکشن اطلاعیه
                </q-item-label>
              </q-item-section>
              <q-item-section  side top>
                <span class="text-pink-8"> 1 دقیقه پیش</span>
                <div class="q-mt-sm">
                  <q-btn icon="fas fa-check" class="q-ml-xs q-mr-xs" size="xs" color="green-8" round glossy></q-btn>
                  <q-btn icon="fas fa-trash" class="q-ml-xs q-mr-xs" size="xs" color="red-8" round glossy></q-btn>
                  <q-btn icon="fas fa-eye" class="q-ml-xs q-mr-xs" size="xs" color="blue-8" round glossy></q-btn>
                </div>
              </q-item-section>
            </q-item>
            <q-separator inset="item" class="q-mt-xs q-mb-xs" />
          </template>


        </q-list>


      </q-card-section>
    </q-menu>
  </q-btn>
</template>

<style scoped>

</style>