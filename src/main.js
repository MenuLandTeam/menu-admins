
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports packages and libs
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Quasar , Notify ,LoadingBar, Dialog} from 'quasar'
import quasarLang from 'quasar/lang/fa-IR'
import '@/includes/axios.js';
import quasarIconSet from 'quasar/icon-set/mdi-v7'
// Import icon libraries
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/dist/quasar.css'
import '/src/assets/css/app.css'
import '/src/assets/css/fonts.css'
import '/src/assets/css/animations.css'
import methods from "@/includes/methods.js";
import "@/includes/axios.js";

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports Global Components
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import Global_Validations_Errors from "@/components/globals/validations/Global_Validations_Errors.vue";
import Template_Menu_Components_Sub_Menu from "@/components/template/menu/components/Template_Menu_Components_Sub_Menu.vue";
import Global_Loading_Shape from "@/components/globals/loadings/Global_Loading_Shape.vue";
import Global_Images_Select from "@/components/globals/images/Global_Images_Select.vue";
import Global_Actions_Delete_Item from "@/components/globals/actions/Global_Actions_Delete_Item.vue";
import Global_Actions_Activation_Item from "@/components/globals/actions/Global_Actions_Activation_Item.vue";
import Global_Filter_Date from "@/components/globals/filters/Global_Filter_Date.vue";
import Global_Items_User from "@/components/globals/items/Global_Items_User.vue";
import Global_Actions_Restore_Item from "@/components/globals/actions/Global_Actions_Restore_Item.vue";
import Global_Searching_Full_Search from "@/components/globals/searching/Global_Searching_Full_Search.vue";
import Global_Searching_Sorting from "@/components/globals/searching/Global_Searching_Sorting.vue";
import Global_Images_Animation_No_Data from "@/components/globals/images/Global_Images_Animation_No_Data.vue";
import Global_Chips_Bool_Status from "@/components/globals/chips/Global_Chips_Bool_Status.vue";
import Global_Items_Form_Type_Icon from "@/components/globals/items/Global_Items_Form_Type_Icon.vue";
import Global_Filter_File_Type from "@/components/globals/filters/Global_Filter_File_Type.vue";
import Global_Item_File_View_By_Type from "@/components/globals/items/Global_Item_File_View_By_Type.vue";
import Global_Images_Animation_Info from "@/components/globals/images/Global_Images_Animation_Info.vue";
import Global_Items_Lead from "@/components/globals/items/Global_Items_Lead.vue";
import Global_Actions_Multi_Actions from "@/components/globals/actions/Global_Actions_Multi_Actions.vue";
import Global_Actions_Header_Buttons from "@/components/globals/actions/Global_Actions_Header_Buttons.vue";
import {Stores_Auth} from "@/stores/auth/auth.js";



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const app = createApp(App)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Globals Components
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.component('global_validations_errors',Global_Validations_Errors)
app.component('global_menu_item',Template_Menu_Components_Sub_Menu)
app.component('global_loading_shape',Global_Loading_Shape)
app.component('global_images_select',Global_Images_Select)
app.component('global_images_animation_no_data',Global_Images_Animation_No_Data)
app.component('global_images_animation_info',Global_Images_Animation_Info)
app.component('global_actions_delete_item',Global_Actions_Delete_Item)
app.component('global_actions_restore_item',Global_Actions_Restore_Item)
app.component('global_actions_activation_item',Global_Actions_Activation_Item)
app.component('global_actions_multi_actions',Global_Actions_Multi_Actions)
app.component('global_actions_header_buttons',Global_Actions_Header_Buttons)
app.component('global_filter_date',Global_Filter_Date)
app.component('global_filter_file_type',Global_Filter_File_Type)
app.component('global_items_user',Global_Items_User)
app.component('global_items_lead',Global_Items_Lead)
app.component("global_searching_full_search",Global_Searching_Full_Search)
app.component("global_searching_sorting",Global_Searching_Sorting)
app.component("global_chips_bool_status",Global_Chips_Bool_Status)
app.component("global_form_type_icon",Global_Items_Form_Type_Icon)
app.component("global_items_file_view_by_type",Global_Item_File_View_By_Type)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// App configs and uses
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.use(router)
app.use(Quasar, {

    plugins: {
        Notify,
        LoadingBar,
        Dialog
    }, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,

    config: {
        brand: {
            // primary: '#e46262',
            // ... or all other brand colors
        },
        notify: {

        },

    }

})
app.mixin(methods);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Globals Filters
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.config.globalProperties.$filters={

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.use(createPinia())
Stores_Auth().AuthSyncData();
app.mount('#app')
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



