<script>
import Template_Menu_Components_Sub_Menu
  from "@/components/template/menu/components/Template_Menu_Components_Sub_Menu.vue";
import menu_items from "./Template_Menu_File.json";

export default {
  name: "Template_Menu_Main",
  created() {
    this.items = menu_items

  },
  components : {
    'menu_item' : Template_Menu_Components_Sub_Menu
  },
  data() {
    return {
      items:[],
    }
  }

}
</script>

<template>
  <q-list>
    <menu_item v-for="item in items" :item="item"></menu_item>
  </q-list>

</template>

<style scoped>

</style>